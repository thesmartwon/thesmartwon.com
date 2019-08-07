const path = require('path')
const fs = require('fs-extra')
const render = require('preact-render-to-string')
// HTML template
const { h } = require('preact')
const { HTML } = require('./html')

const renderPage = (Component, title, slug, posts) => {
	return `<!DOCTYPE html>${render(
		<HTML title={title}>
			<Component
				posts={Object.values(posts)
					.filter(p => p.frontmatter)
					.sort((p1, p2) => p2.frontmatter.date.localeCompare(p1.frontmatter.date))
				}
				path={'/' + slug.replace('index', '')}
				/>
		</HTML>)}`
}

module.exports = {
	renderPage
}