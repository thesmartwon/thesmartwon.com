const { src, dest } = require('gulp')
const { paths } = require('./helpers')

function copyStaticAssets() {
	return src(paths.staticAssets.src)
		.pipe(dest(paths.staticAssets.dest))
}

function copyPostAssets() {
	return src(paths.postAssets.src)
		.pipe(dest(paths.postAssets.dest))
}

module.exports = {
  copyStaticAssets,
  copyPostAssets
}