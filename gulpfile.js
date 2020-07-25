const { src, dest, series, parallel, watch } = require('gulp')
const crypto = require('crypto')
const fs = require('fs-extra')
const browserSync = require('browser-sync').create()
const through2 = require('through2')
const rollup = require('rollup')
const path = require('path')
const sass = require('node-sass')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')
const { markdownPipe } = require('./scripts/markdown')

// Hijack to allow JSX in renderPost and renderPage
require('./scripts/hijack-requires')
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
	},
	render: {
		src: [
			'src/**/*.js',
			'!src/pages/**/*.js'
		]
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
	return src(paths.staticAssets.src)
		.pipe(dest(paths.staticAssets.dest))
}

function copyPostAssets() {
	return src(paths.postAssets.src)
		.pipe(dest(paths.postAssets.dest))
}

function css() {
	cssFileNames = []
	return src(paths.sass.src)
		.pipe(through2.obj(function (chunk, _, cb2) {
			const file = chunk.history[0]
			const css = sass.renderSync({
				file, // For import resolution
				outputStyle: 'compressed',
			})
			console.log(`Compiled ${css.stats.includedFiles.length} SASS files`)
			chunk.contents = Buffer.from(css.css)

			chunk.history.push(file.replace('.scss', `-${getHash(css.css)}.css`))
			cssFileNames.push('/' + path.basename(chunk.history[1]))

			console.log('cssFileNames', cssFileNames)
			cb2(null, chunk)
		}))
		.pipe(dest(paths.sass.dest))
}

function js() {
	jsFileNames = {}
	jsWatchFiles = []
	return src(paths.js.src)
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
				})
			})
		}))
		.pipe(dest(paths.js.dest))
}

function renderPosts() {
	const { renderPost } = require('./src/templates/post')

	return src(paths.posts.src)
		.pipe(through2.obj(function (chunk, _, cb2) {
			const destFile = chunk.history[0].replace(/\\/g, '/') + '.js'
			const vfile = markdownPipe.processSync(chunk._contents)
			fs.writeFileSync(destFile, vfile.contents)
			process.stdout.write(`Post ${
				chunk.history[0].replace(chunk._base, '').replace(/\\/g, '/')
				}.js: `)

			if (vfile.data.frontmatter.draft) {
				console.log('skipped', vfile.data.frontmatter.title, '(draft)')
				chunk.history.push('null')
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
			console.log(post.frontmatter.title)

			cb2(null, chunk)
		}))
		.pipe(dest(paths.posts.dest))
}

function renderPages() {
	const { renderPage } = require('./src/templates/page')

	return src(paths.pages.src)
		.pipe(through2.obj(function (chunk, _, cb2) {
			delete require.cache[require.resolve(chunk.history[0])]
			const page = require(chunk.history[0])
			const slug = slugify(chunk).replace('/posts', '') + '/'

			chunk.contents = Buffer.from(
				renderPage(page.default, page.title, cssFileNames, slug, posts)
			)
			chunk.history.push(chunk.history[0].replace('.js', '.html'))
			console.log('Page', slug)

			cb2(null, chunk)
		}))
		.pipe(dest(paths.pages.dest))
}

function removeNull(cb) {
	fs.remove('dist/null', cb)
}

function startServer(cb) {
	if (!browserSync.active) {
		browserSync.init({
			server: {
				baseDir: './dist',
				index: 'index.html',
				serveStaticOptions: {
					extensions: ['html']
				}
			},
			files: ['dist/**/*']
		})
	}
	cb()
}

function deleteRenderCache() {
	return src(paths.render.src)
		.pipe(through2.obj(function (chunk, _, cb2) {
			delete require.cache[require.resolve(chunk.history[0])]
			cb2(null, chunk)
		}))
}

async function start() {
	watch(paths.postAssets.src, { ignoreInitial: false }, copyPostAssets)
	watch(paths.staticAssets.src, { ignoreInitial: false }, copyStaticAssets)

	await new Promise(parallel(css, js)) // TODO: rollup.watch
	watch(paths.sass.src, css)
	watch(jsWatchFiles, js)
	watch(paths.render.src, series(deleteRenderCache, renderPosts, renderPages))
	watch(paths.posts.src, { ignoreInitial: false }, series(renderPosts, renderPages, startServer))
	watch(paths.pages.src, renderPages)
}

module.exports = {
	clean,
	copyStaticAssets,
	copyPostAssets,
	copy: parallel(copyStaticAssets, copyPostAssets),
	css,
	js,
	renderPosts,
	start: series(clean, start),
	default: series(
		parallel(copyStaticAssets, copyPostAssets, css, js),
		renderPosts,
		renderPages,
		removeNull
	),
}