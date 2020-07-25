import { h } from 'preact'
import render from 'preact-render-to-string'
import { HTML } from './html'

export const renderPage = (
	Component,
	title,
	cssFileNames = [], 
	slug,
	posts
) => `<!DOCTYPE html>${render(
	<HTML title={title} cssFileNames={cssFileNames}>
		<Component
			posts={Object.values(posts)
				.filter(p => p.frontmatter)
				.sort((p1, p2) => p2.frontmatter.date.localeCompare(p1.frontmatter.date))
			}
			path={slug.replace('index', '')}
		/>
	</HTML>)}`
