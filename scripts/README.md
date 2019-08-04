## Yet another React static-site generator
I haven't yet found a static site generator that I like...

I want to write React templates and render them to static HTML that doesn't include Javascript.

However, for some pages, I want to include Javascript. And I want to fully control how it's bundled.

I also want to write my posts in Markdown rather than JSX and include some frontmatter on them and pass
them to my React templates for index pages that show all posts.

### What it does
- Scan src/pages for pages to render
- Scan src/content for content to render according to a template
	- Gather metadata for pages (title, date, JS enabled, `<head>` content)
- Render static pages using [@babel/register](https://babeljs.io/docs/en/babel-register)
- Render a single CSS sheet using node-sass
- Do something to bundle JS???
