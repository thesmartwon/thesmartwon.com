const { src, dest, series, parallel, watch, lastRun } = require('gulp')
const crypto = require('crypto')
const fs = require('fs-extra')
const through2 = require('through2')
const rollup = require('rollup')
const path = require('path')
const sass = require('node-sass')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')

// Hijack to allow JSX in renderPost and renderPage
require('./scripts/hijack-requires')
const { markdownPipe, renderPost } = require('./scripts/render-post')
const { renderPage } = require('./scripts/render-page')

const paths = {
	postAssets: {
    src: [
			'posts/**/*',
			'!posts/**/*.md',
			'!posts/**/*.js',
		],
    dest: 'dist/posts'
	},
	staticAssets: {
		src: [
			'src/pages/*',
			'src/pages/**/*',
			'!src/pages/*.js',
			'!src/pages/**/*.js',
			'static/*',
		],
		dest: 'dist'
	},
	sass: {
		src: 'src/main.scss',
		dest: 'dist'
	},
	js: {
		src: [
			'posts/**/*.js',
			'!posts/**/*.md.js'
		],
		dest: 'dist/posts'
	},
	posts: {
		src: 'posts/**/*.md',
		dest: 'dist/posts'
	},
	pages: {
		src: 'src/pages/**/*.js',
		dest: 'dist'
	}
}

let posts = {}
let cssFileNames = []
let jsFileNames = {}
let jsWatchFiles = []
const slugify = chunk => chunk.history[0]
	.replace(chunk._base, '/posts')
	.replace(/\\/g, '/')
	.replace('/index', '')
	.replace('.md', '')
	.replace('.js', '')

const getHash = string => {
	if (process.env.NODE_ENV === 'production') {
		const hash = crypto.createHash('md5').update(string).digest('hex')
		return hash.substr(0, 5)
	}

	return 'dev'
}

function clean(cb) {
	fs.remove('dist', cb)
}

function copyStaticAssets() {
	return src(paths.staticAssets.src, { since: lastRun(copyStaticAssets) })
		.pipe(dest(paths.staticAssets.dest));
}

function copyPostAssets() {
	return src(paths.postAssets.src, { since: lastRun(copyPostAssets) })
		.pipe(dest(paths.postAssets.dest));
}

function css() {
	cssFileNames = []
	return src(paths.sass.src, { since: lastRun(css) })
		.pipe(through2.obj(function (chunk, _, cb2) {
			const css = sass.renderSync({
				file: chunk.history[0], // For import resolution
				outputStyle: 'compressed',
			})
			console.log(`Compiled ${css.stats.includedFiles.length} SASS files`)
			chunk.contents = Buffer.from(css.css)

			chunk.history.push(
				chunk.history[0].replace('.scss', `-${getHash(css.css)}.css`))
			cssFileNames.push('/' + path.basename(chunk.history[1]))

			console.log('cssFileNames', cssFileNames)
			cb2(null, chunk)
		}))
		.pipe(dest(paths.sass.dest))
}

function js() {
	jsFileNames = {}
	jsWatchFiles = []
	return src(paths.js.src, { since: lastRun(js) })
		.pipe(through2.obj(function (chunk, _, cb2) {
			const slug = slugify(chunk)
			rollup.rollup({
				input: chunk.history[0],
				plugins: [
					resolve(),
					babel({ exclude: 'node_modules/**' }),
					terser(),
				],
			}).then(bundle => {
				jsWatchFiles = jsWatchFiles.concat(bundle.watchFiles
					.filter(file => !file.includes('rollupPluginBabelHelpers.js')))
				bundle.generate({
					format: 'iife', // immediately invoked function expression
					name: slug.split('/').pop().replace(/\-/g, ''), // global variable name representing your bundle
					compact: true,
				}).then(({ output }) => {
					chunk.contents = Buffer.from(output[0].code)
					chunk.history.push(chunk.history[0].replace('.js', `-${getHash(output[0].code)}.js`))
					jsFileNames[slug] = jsFileNames[slug] || []
					jsFileNames[slug].push(path.basename(chunk.history[1]))
					console.log('jsFileNames', slug, jsFileNames[slug])
					
					cb2(null, chunk)
				})})
		}))
		.pipe(dest(paths.js.dest))
}

function renderPosts() {
	return src(paths.posts.src, { since: lastRun(renderPosts) })
		.pipe(through2.obj(function (chunk, _, cb2) {
			const destFile = chunk.history[0].replace(/\\/g, '/') + '.js'
			const vfile = markdownPipe.processSync(chunk._contents)
			fs.writeFileSync(destFile, vfile.contents)
			process.stdout.write(`Compiled ${
				chunk.history[0].replace(chunk._base, '').replace(/\\/g, '/')
			}.js...`)

			if (vfile.data.frontmatter.draft) {
				console.log('norender', vfile.data.frontmatter.title, '(draft)')
				chunk.history.push('basicallydevnull')
				cb2(null, chunk)
				return
			}

			delete require.cache[require.resolve(destFile)]
			const slug = slugify(chunk)
			const post = {
				slug,
				component: require(destFile).default,
				frontmatter: vfile.data.frontmatter,
				cssFileNames,
				jsFileNames: jsFileNames[slug]
			}
			posts[slug] = post

			chunk.contents = Buffer.from(renderPost(post))
			chunk.history.push(chunk.history[0].replace('.md', '.html'))
			console.log(' rendered', post.frontmatter.title)

			cb2(null, chunk)
		}))
		.pipe(dest(paths.posts.dest))
}

function renderPages() {
	return src(paths.pages.src)
		.pipe(through2.obj(function (chunk, _, cb2) {
			delete require.cache[require.resolve(chunk.history[0])]
			const page = require(chunk.history[0])
			const slug = slugify(chunk).replace('/posts', '') + '/'

			chunk.contents = Buffer.from(
				renderPage(page.default, page.title, cssFileNames, slug, posts)
			)
			chunk.history.push(chunk.history[0].replace('.js', '.html'))
			console.log('Rendered', slug, '->', chunk.history[1])

			cb2(null, chunk)
		}))
		.pipe(dest(paths.pages.dest))
}

function removeNull(cb) {
	fs.remove('dist/basicallydevnull', cb)
}

function start() {
	watch(paths.postAssets.src, { ignoreInitial: false }, copyPostAssets)
	watch(paths.staticAssets.src, { ignoreInitial: false }, copyStaticAssets)

	// TODO: parallel css/js
	css()
		.on('end', () => js() // TODO: rollup.watch
			.on('end', () => {
				watch(paths.sass.src, css)
				watch(jsWatchFiles, js)
				watch(paths.posts.src, { ignoreInitial: false }, series(renderPosts, renderPages))
				watch(paths.pages.src, { ignoreInitial: false }, renderPages)
			})
		)
}

module.exports = {
	clean,
	copyStaticAssets,
	copyPostAssets,
	copy: parallel(copyStaticAssets, copyPostAssets),
	css,
	js,
	renderPosts,
	start,
	default: series(
		parallel(copyStaticAssets, copyPostAssets, css, js),
		renderPosts,
		renderPages,
		removeNull
	),
}