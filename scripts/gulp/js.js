const { src, dest } = require('gulp')
const rollup = require('rollup')
const through2 = require('through2')
const path = require('path')
const babel = require('rollup-plugin-babel')
const { terser } = require('rollup-plugin-terser')
const resolve = require('rollup-plugin-node-resolve')
const { paths, slugify, getHash } = require('./helpers')

let jsFileNames = {}
let jsWatchFiles = []

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

					cb2(null, chunk)
				})
			})
		}))
		.pipe(dest(paths.js.dest))
}

module.exports = {
  js,
  getJsFileNames: () => jsFileNames,
  getJsWatchFiles: () => jsWatchFiles
}