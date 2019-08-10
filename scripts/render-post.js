const render = require('preact-render-to-string')
// Unified
const visit = require('unist-util-visit')
// HTML template
const moment = require('moment');
const { h } = require('preact')
const { HTML } = require('./html')
const { PostTemplate } = require('../src/templates/post-template')

const renderPost = post => `<!DOCTYPE html>\n${render(
	<HTML
		title={post.frontmatter.title}
		cssFileNames={post.cssFileNames}
		jsFileNames={post.jsFileNames}
		>
		<PostTemplate
			frontmatter={post.frontmatter}
			slug={post.slug}
		>
			{h(post.component)}
		</PostTemplate>
	</HTML>)}`

const markdownPipe = require('unified')()
	.use(require('remark-parse'))
	// Frontmatter
	.use(require('remark-frontmatter'))
	.use(require('remark-parse-yaml'))
	.use(() => (ast, file) => {
		visit(ast, 'yaml', item => {
			file.data.frontmatter = item.data.parsedValue
			const { frontmatter } = file.data
			frontmatter.dateShort = moment(frontmatter.date).format('YYYY-MM-DD')
			frontmatter.dateLong = moment(frontmatter.date).format('MMMM DD, YYYY')
		});
	})
	.use(() => (ast, file) => {
		let { frontmatter } = file.data
		let excerpt = ''
		visit(ast, 'text', item => {
			excerpt += item.value + ' '
		})

		frontmatter.excerpt = excerpt.substr(0, 150).trim()
		// Assume 300wpm reading speed
		// Round to nearest .5
		frontmatter.timeToRead = Math.round(excerpt.split(' ').length / 300 * 2) / 2
	})
	// Render to JSX
	.use(require('remark-mdx'))
	.use(require('./mdx-ast-to-mdx-hast'))
	.use(require('./mdx-hast-to-jsx'))

module.exports = {
	markdownPipe,
	renderPost,
}
