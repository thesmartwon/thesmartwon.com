## Yet another React static-site generator
I haven't yet found a static site generator that I like...

I want to write React templates and render them to static HTML that doesn't include Javascript.

However, for some pages, I want to include Javascript. And I want to fully control how it's bundled.

I also want to write my posts in [MDX](https://mdxjs.com/) and include some frontmatter on them and pass
them to my React templates for index pages that show all posts.

### What it does
- Scan postsDir for pages to render
- Scan pagesDir for content to render according to a template
	- Gather metadata for pages (title, date, JS enabled, `<head>` content)
	- Use ESBuild to bundle JS
- Renders pages using ESBuild and preact-render-to-string
- Render a single CSS stylesheet using sass
- Copies staticDir to outdir
