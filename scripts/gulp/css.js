const { src, dest } = require('gulp')
const through2 = require('through2')
const sass = require('node-sass')
const path = require('path')
const { paths, getHash } = require('./helpers')

let cssFileNames = []

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

			cb2(null, chunk)
		}))
		.pipe(dest(paths.sass.dest))
}

module.exports = {
  css,
  getCssFileNames: () => cssFileNames
}