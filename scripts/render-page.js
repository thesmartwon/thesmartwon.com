const { h } = require('preact')
const render = require('preact-render-to-string')
// HTML template
const { HTML } = require('./html')

const renderPage = (Component, title, cssFileNames = [], slug, posts) => {
	return `<!DOCTYPE html>${render(
		<HTML title={title} cssFileNames={cssFileNames}>
			<Component
				posts={Object.values(posts)
					.filter(p => p.frontmatter)
					.sort((p1, p2) => p2.frontmatter.date.localeCompare(p1.frontmatter.date))
				}
				path={slug.replace('index', '')}
				/>
		</HTML>)}`
}

module.exports = {
	renderPage
}