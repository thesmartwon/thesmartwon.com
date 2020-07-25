const { src, watch, series, parallel } = require('gulp')
const through2 = require('through2')
const { paths } = require('./helpers')
const { startServer } = require('./startServer')
const { copyStaticAssets, copyPostAssets } = require('./copy')
const { css } = require('./css')
const { js, getJsWatchFiles } = require('./js')
const { render } = require('./render')
const { pages } = require('./pages')

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
	watch(getJsWatchFiles(), js)
	watch(paths.render.src, series(deleteRenderCache, render))
	watch(paths.posts.src, { ignoreInitial: false }, series(render, startServer))
	watch(paths.pages.src, pages)
}

module.exports = {
  start
}