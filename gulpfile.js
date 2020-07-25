const { series, parallel } = require('gulp')
const fs = require('fs-extra')
const { css } = require('./scripts/gulp/css')
const { js } = require('./scripts/gulp/js')
const { start } = require('./scripts/gulp/start')
const { copyStaticAssets, copyPostAssets } = require('./scripts/gulp/copy')
const { render } = require('./scripts/gulp/render')

function clean(cb) {
	fs.remove('dist', cb)
}

function removeNull(cb) {
	fs.remove('dist/null', cb)
}

module.exports = {
	clean,
	copy: parallel(copyStaticAssets, copyPostAssets),
	css,
	js,
	start: series(clean, start),
	default: series(
		clean,
		parallel(copyStaticAssets, copyPostAssets, css, js),
		render,
		removeNull
	),
}