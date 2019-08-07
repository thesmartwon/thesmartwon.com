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
			file.data.frontmatter.dateShort = moment(file.data.frontmatter.date).format('YYYY-MM-DD')
			file.data.frontmatter.dateLong = moment(file.data.frontmatter.date).format('MMMM DD, YYYY')
		});
	})
	.use(() => (ast, file) => {
		let excerpt = ''
		visit(ast, 'text', item => {
			if (excerpt.length < 150) {
				excerpt += item.value + ' '
			}
		})

		file.data.frontmatter.excerpt = excerpt.substr(0, 150).trim()
	})
	// Render to JSX
	.use(require('remark-mdx'))
	.use(require('./mdx-ast-to-mdx-hast'))
	.use(require('./mdx-hast-to-jsx'))

module.exports = {
	markdownPipe,
	renderPost,
}
