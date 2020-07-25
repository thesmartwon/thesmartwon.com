const { src, dest } = require('gulp')
const fs = require('fs')
const through2 = require('through2')
const { markdownPipe } = require('../markdown')
const { paths, slugify } = require('./helpers')
const { getJsFileNames } = require('./js')
const { getCssFileNames } = require('./css')

let postIndex = {}

function posts() {
	// Hijack to allow JSX in renderPost
	require('../hijack-requires')
	const { renderPost } = require('../../src/templates/post')

	const cssFileNames = getCssFileNames()
	const jsFileNames = getJsFileNames()

	return src(paths.posts.src)
		.pipe(through2.obj(function (chunk, _, cb2) {
			const destFile = chunk.history[0].replace(/\\/g, '/') + '.js'
			const vfile = markdownPipe.processSync(chunk._contents)
			fs.writeFileSync(destFile, vfile.contents)

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
			postIndex[slug] = post

			chunk.contents = Buffer.from(renderPost(post))
			chunk.history.push(chunk.history[0].replace('.md', '.html'))

			cb2(null, chunk)
		}))
		.pipe(dest(paths.posts.dest))
		.on('end', () => console.log('Rendered', Object.keys(postIndex).length, 'posts'))
}

module.exports = {
	postIndex,
	posts
}