---
title: "How this Site is Built"
date:  2019-08-09
---

import { Logo } from '../../../src/components/logo'

# RIP Gatsby
I ditched Gatsby.
<figure>
<img src="gatsby-gets-shot.jpg" alt="Death to gatsby" />
<figcaption>Gatsby is dead.</figcaption>
</figure>

I decided to ditch Gatsby because after [an update to how Gatsby's resources were loaded,](https://github.com/gatsbyjs/gatsby/pull/14889) my site wouldn't build anymore. 
I could just use an old version of Gatsby forever, but even with the old version things were breaking because of dependencies of Gatsby's dependencies in its [package.json](https://github.com/gatsbyjs/gatsby/blob/master/package.json) (welcome to the NPM ecosystem).
I didn't want to my entire project's to hinge on a single `package-lock.json`, so I decided to write my own framework.

## Death to Webpack, too
Webpack is a little black box everyone depends on.

<figure>
<img src="webpack.png" alt="Webpack" />
<figcaption>Most web developers use this. Most don't have the slightest idea how it works.</figcaption>
</figure>

I like Webpack, so I experimented with building my site using [prerender-loader](https://github.com/GoogleChromeLabs/prerender-loader) or [prerender-SPA-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) paired with [Preact-router](https://github.com/preactjs/preact-router).
I never want to actually use a router since I have to update it every post, but it was bearable and I could dynamically generate routes based on [globbing](https://github.com/isaacs/node-glob) my local directories.

There were a lot of small annoying problems I ran into with prerendering (like needing React AND Preact).
The real problem ended up being I had to use the same bloated JS to generate the static HTML as I bundled in the page. This includes things I never want to ship in my bundle like [preact-helmet](https://github.com/download/preact-helmet). There was the issue of dynamically templating some pages to NOT include JS...

Suffice it to say it got complicated FAST (I'd have to run webpack twice -- once to prerender, and once to bundle) so I gave up on a Webpack approach.
I briefly checked out [Parcel](https://github.com/parcel-bundler/parcel) but it seems that the _approach_ is flawed more than the tools. Bundlers are made for SPAs.

## What I actually want

<figure>
<Logo background="#673ab8" fill="white" fg="#673ab8" text="white" />
<figcaption>I just want to use Preact as much as I can.</figcaption>
</figure>

Since my pages don't include JS, I really just want a templating framework, like [hexo](https://hexo.io) or [hugo](https://gohugo.io) to render my site's HTML.
However, I want to write React components in JSX instead of EJS or `%`-style PHP templates. For example, I already had the [post template](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/templates/post.js), [article previews](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/components/article-preview.js), and the [breadcrumb](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/components/breadcrumb.js) written in React,.

<figure>

```js
{posts.map(post => ArticlePreview(post))}
```
<figcaption>This is all I write for Article previews on navigation pages. No copy/pasting and updating per-post.</figcaption>
</figure>

Using React as my templating engine makes it easy for when I want to write JS for things like my [retirement calculator](/posts/money/early-retirement). I can just keep using React.

# Back to the basics
I needed to render my components to HTML using something like [preact-render-to-string](https://github.com/preactjs/preact-render-to-string).
Rendering React components per-markdown file seems like such a simple use case, yet no other frameworks seemed to have me covered.

To get started using `preact-render-to-string`, I needed a bit of hackery using [@babel/register](https://babeljs.io/docs/en/babel-register):
```js
const path = require('path')
const fs = require('fs-extra')
const mime = require('mime')
const render = require('preact-render-to-string')
const { h } = require('preact')
// Hack to hijack all require()s and babel them
require('@babel/register')({
  ignore: [/node_modules/],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }, ],
    ['@babel/plugin-proposal-class-properties']
  ],
  presets: ['@babel/preset-env']
})

// All further `require()`s go through Babel (so they can 
// include JSX, class properties, and `import` statements)
const { myComponent } = require('some-component');
console.log(render(h(myComponent)))
```

After figuring out [preact-render-to-string](https://github.com/preactjs/preact-render-to-string) was something I could use with JSX without having to have extra intermediate files, I was SOLD!!

<figure>
<img src="shut-up-and-take-my-money.jpg" alt="Take my money" />
<figcaption>Shut up and take my soul.</figcaption>
</figure>

## Let's commit to this renderer
I need to extract some metadata from Markdown files (like the post's title and date) to include in my templated site components (like the [post template](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/templates/post.js)). [Unified](https://github.com/unifiedjs/unified) is THE natural choice for this in NodeJS land.

### Enter: MDX
I also wanted to be able to include React components in my Markdown files so dynamic components can be statically rendered like the [retirement calculator](/posts/money/early-retirement). Enter [MDX](https://mdxjs.com/), which has a plugin for Unified called [remark-mdx](https://github.com/mdx-js/mdx/tree/master/packages/remark-mdx).

<figure>
<svg xmlns="http://www.w3.org/2000/svg" width="138" height="57"><g fill="none" fill-rule="evenodd"><rect width="136.5" height="55.5" x=".75" y=".75" fill="#FFF" stroke="#EAEAEA" stroke-width="1.5" rx="4.5"/><g stroke="#000" stroke-width="6"><path stroke-linecap="square" d="M70.5 36V13.836"/><path d="M57 27.239L70.611 40.85l13.415-13.414"/></g><path stroke="#000" stroke-width="6" d="M16.45 43.928V18.964L30.3 32.815l13.932-13.931v24.865"/><g stroke="#F9AC00" stroke-width="6"><path d="M122.439 41.268L93.17 12M93.561 41.268L122.83 12"/></g></g></svg>
<figcaption>Pretty neat idea. Markdown -> JSX.</figcaption>
</figure>

I created a Unified pipeline that used [remark-mdx](https://github.com/mdx-js/mdx/tree/master/packages/remark-mdx) like this:

```js
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
```

[MDX's default way of rendering to JSX](https://github.com/mdx-js/mdx/tree/master/packages/mdx) wasn't exactly what I wanted, so I wrote my own [ast-to-mdx-hast](https://github.com/thesmartwon/thesmartwon.com/blob/master/scripts/mdx-ast-to-mdx-hast.js) and [mdx-hast-to-jsx](https://github.com/thesmartwon/thesmartwon.com/blob/master/scripts/mdx-hast-to-jsx.js) built on top of [remark-mdx](https://github.com/mdx-js/mdx/tree/master/packages/remark-mdx).

Now for each one of my Markdown files, I have a `.md.js` file that looks like this:

```js
import { h, Fragment } from 'preact'

export default () => <Fragment>
  {/* Content here */}
</Fragment>;
```

Now I just `require()` that file and use [preact-render-to-string](https://github.com/preactjs/preact-render-to-string) on it!
I also collect some metadata on all the posts rendered in order to build index pages that list all the posts.

### But you need _some_ JavaScript
For interactive pages, I do need some JavaScript. Rollup played the role of Babelling, bundling, and minifying JS files like this:

```js
import { h, render } from 'preact'
import { Logo } from '../../../src/components/logo'

const root = document.getElementById('preact-logo')
render(h(Logo), root, root)
```

The config is a little overly verbose, but it's not terrible:

```js
rollup.rollup({
  input: file,
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
}).then(bundle => bundle.generate({
    format: 'iife', // immediately invoked function expression
    name: slug.split('/').pop().replace(/\-/g, ''), // global variable name representing your bundle
    compact: true,
  }).then(({ output }) => console.log(output[0].code))
}))
```

The more annoying part is injecting the CSS and JS file names dynamically into the HTML templates. I just kept track of where I wrote out the CSS and JS files. For development, I don't bother changing the filename to include a hash because that's a lot of work.

### Orchestrating it all
I used to have a single NodeJS script orchestrating all the tools, but I just decided to use [Gulp](https://gulpjs.com/), which is a nice task runner to read and write files at certain paths. The default task of [my Gulpfile](https://github.com/thesmartwon/thesmartwon.com/blob/master/gulpfile.js):
- Creates assets with no dependencies: parallel(copyStaticAssets, copyPostAssets, css, js)
  - Populates cssFileNames = [] and jsFileNames = {}
- Renders posts (and populates posts = {} to pass to index pages)
- Renders Pages
- Cleans up a file that all posts that are drafts and shouldn't be rendered get pointed to

#### Creating the start task
This is what Gulp made easy for me since I didn't use a pre-built framework with nice hot-reloading for me. Gulp wraps [chokidar's](https://github.com/paulmillr/chokidar) `watch` function:

```js
function start() {
	watch(paths.postAssets.src, { ignoreInitial: false }, copyPostAssets)
	watch(paths.staticAssets.src, { ignoreInitial: false }, copyStaticAssets)

	// TODO: parallel css/js
	css()
		.on('end', () => js() // TODO: rollup.watch
			.on('end', () => {
				watch(paths.sass.src, css)
				watch(jsWatchFiles, js)
				watch(paths.posts.src, { ignoreInitial: false }, series(renderPosts, renderPages))
				watch(paths.pages.src, { ignoreInitial: false }, renderPages)
			})
		)
}
```

I do still have to reload my page manually after my site rebuilds, but I could look into using [browser-sync](https://www.browsersync.io/docs/gulp) to auto-reload it. That would also save me having [http-server](https://www.npmjs.com/package/http-server) open in another terminal serving my `dist` folder.

## Reflection
All this work took me upwards of 25 hours. The hardest part was writing the remark plugins for MDX. A lot of it was wasted researching prerendering, and I did write a few posts in the meantime.

It was well worth it to control every tool that creates the HTML, CSS, and JS my readers read. I'm (fairly) framework agnostic and learned a ton of new things! 

# Future work
My hot-reloading development workflow still needs a few changes:
- Node-sass as well as Rollup have their own watch functions, so I should use those.
- On changes to my component templates, all pages should reload and we need to re-require the module. Currently nothing happens.

My production environment also needs a few fixes:
- I need to minimize my images and wrap them in a container to avoid the content changing height once loaded. I also need to use `srcset` for responsive images. I'd also like a nicer way to create centered images for posts than having to write all this each time:

```html
<figure>
  <img src="shut-up-and-take-my-money.jpg" alt="Take my money" />
  <figcaption>Shut up and take my soul.</figcaption>
</figure>
```
- I need a way to separate out my Preact dependency so it doesn't have to reload 4kb on every JS page.
