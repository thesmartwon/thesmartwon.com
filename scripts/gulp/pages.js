const { src, dest } = require('gulp')
const through2 = require('through2')
const { paths, slugify } = require('./helpers')
const { postIndex } = require('./posts')
const { getCssFileNames } = require('./css')

function pages() {
	// Hijack to allow JSX in renderPage
	require('../hijack-requires')
	const { renderPage } = require('../../src/templates/page')
	let pageCount = 0

	return src(paths.pages.src)
		.pipe(through2.obj(function (chunk, _, cb2) {
			delete require.cache[require.resolve(chunk.history[0])]
			const page = require(chunk.history[0])
			const slug = slugify(chunk).replace('/posts', '') + '/'

			chunk.contents = Buffer.from(
				renderPage(page.default, page.title, getCssFileNames(), slug, postIndex)
			)
			chunk.history.push(chunk.history[0].replace('.js', '.html'))

			pageCount++
			cb2(null, chunk)
		}))
		.pipe(dest(paths.pages.dest))
		.on('end', () => console.log('Rendered', pageCount, 'pages'))
}

module.exports = {
  pages
}