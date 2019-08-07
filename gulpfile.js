require('./scripts/hijack-requires')

const os = require('os');
const crypto = require('crypto');
const fs = require('fs-extra');
const through2 = require('through2');
const { src, dest, series } = require('gulp');
const rollup = require('rollup');
const sass = require('node-sass');
const { markdownPipe, renderPost } = require('./scripts/render-content')
const { renderPage } = require('./scripts/render-page')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')

const posts = {}
let cssFileName
let jsFileNames = {}
const slugify = chunk => chunk.history[0]
	.replace(chunk._base, '/posts')
	.replace(/\\/g, '/')
	.replace('/index', '')
	.replace('.md', '')
	.replace('.js', '')

function clean(cb) {
	fs.remove('dist', cb)
}

function copyStatic() {
	return src('static/*')
		.pipe(dest('dist'));
}

function copyPostAssets() {
	return src([
		'posts/**/*',
		'!posts/**/*.md',
		'!posts/**/*.js',
	])
		.pipe(dest('dist/posts'));
}

function css(cb) {
	const css = sass.renderSync({
		file: 'src/main.scss',
		outputStyle: 'compressed',
		outFile: 'dist/main.css',
		sourceMap: true,
	})
	console.log(`Compiled ${css.stats.includedFiles.length} SASS files`)
	const hash = crypto.createHash('md5').update(css.css).digest('hex')
	cssFileName = `dist/main-${hash.substr(0, 5)}.css`
	fs.ensureDirSync('dist')
	fs.writeFileSync(cssFileName, css.css)
	console.log(`Wrote ${cssFileName}`)
	cb();
}

function js(cb) {
	return src([
		'posts/**/*.js',
		'!posts/**/*.md.js'
	])
		.pipe(through2.obj(function (chunk, _, cb2) {
			const slug = slugify(chunk)
			const fname = slug.split('/').pop()
			rollup.rollup({
				input: chunk.history[0],
				plugins: [
					resolve(),
					babel({ exclude: 'node_modules/**' }),
					terser(),
				],
			}).then(bundle => bundle.generate({
				format: 'iife', // immediately invoked function expression
				name: fname.replace('-', ''), // global variable name representing your bundle
				compact: true,
			}).then(({ output }) => {
				chunk.contents = Buffer.from(output[0].code)
				const hash = crypto.createHash('md5').update(output[0].code).digest('hex')
				chunk.history.push(chunk.history[0].replace('.js', `-${hash.substr(0, 5)}.js`))
				jsFileNames[slug] = chunk.history[1]
				cb2(null, chunk)
			}))
		}))
		.pipe(dest('dist/posts'))
}

function renderPosts() {
	return src('posts/**/*.md')
		.pipe(through2.obj(function (chunk, _, cb2) {
			const destFile = chunk.history[0].replace(/\\/g, '/') + '.js'
			const vfile = markdownPipe.processSync(chunk._contents)
			fs.writeFileSync(destFile, vfile.contents)
			process.stdout.write(`Compiled ${
				chunk.history[0].replace(chunk._base, '')}...`)

			if (vfile.data.frontmatter.draft) {
				console.log('norender', vfile.data.frontmatter.title, '(draft)')
				chunk.history.push(os.tmpdir() + 'basicallydevnull')
				cb2(null, chunk)
				return
			}

			delete require.cache[require.resolve(destFile)]
			const post = {
				slug: slugify(chunk),
				component: require(destFile).default,
				frontmatter: vfile.data.frontmatter,
			}
			posts[post.slug] = post

			chunk.contents = Buffer.from(renderPost(post))
			chunk.history.push(chunk.history[0].replace('.md', '.html'))
			console.log(' rendered', post.frontmatter.title)

			cb2(null, chunk)
		}))
		.pipe(dest('dist/posts'))
}

function renderPages() {
	return src('src/pages/**/*.js')
		.pipe(through2.obj(function (chunk, _, cb2) {
			delete require.cache[require.resolve(chunk.history[0])]
			const page = require(chunk.history[0])
			const slug = slugify(chunk)

			chunk.contents = Buffer.from(
				renderPage(page.default, page.title, slug, posts)
			)
			chunk.history.push(chunk.history[0].replace('.js', '.html'))
			console.log('Rendered', slug)

			cb2(null, chunk)
		}))
		.pipe(dest('dist'))
}

module.exports = {
	clean,
	copyStatic,
	copyPostAssets,
	copy: series(copyStatic, copyPostAssets),
	css,
	js,
	renderPosts,
	render: series(renderPosts, renderPages),
}