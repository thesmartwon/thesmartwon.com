[![CircleCI](https://circleci.com/gh/thesmartwon/thesmartwon.com.svg?style=svg)](https://circleci.com/gh/thesmartwon/thesmartwon.com)

# thesmartwon.com
My blog lives here. Made with Gatsby + lots of love ❤️.

## Lots of Love ❤️
I ripped apart Gatsby to make the site smaller and only include what's necessary.  This is a record of what I did for when I forget in a few years or if some brave soul wants to clone this repo.

### Webpack Entry Points
#### app.js
This is the primary entry point for development. All I really did was remove @reach/router.

#### production-app.js
This is the primary entry point for production. I stripped all unnecessary .cache dependencies. The hardest one to remove was `loader.js`, which I managed to strip down to two Promises which load the pageContext and pre-fetched JS.

#### static-entry.js
This is the primary entry point for rendering the static HTML. I added a clever check `hasJavascript = dataAndContext.pageContext.javascript === true` to not include `<script>` tags on pages that don't need Javascript. I use a stylesheet instead of adding a lot of redundant extra kilobytes per-page. I gutted a few other things so the file is readable.

### gatsby-config.js
Pretty self explanatory. Source everything in the `posts` folder. Use gatsby-transformer-remark to transform the md files.

### gatsby-node.js
Create markdown and JS pages from the `posts` folder. Add some templated index pages. Define the custom Webpack entry points. Don't include the JS for react-helmet because I never want to dynamically change `<head>` at runtime. Don't include `core-js` because polyfills shouldn't be larger than the entire site.  

### Deployment
I used [circle-ci](https://circleci.com/gh/thesmartwon/thesmartwon.com) to deploy a built version of my site on each push to master using [gh-pages](https://www.npmjs.com/package/gh-pages), which is yet another script to push to this repo's [gh-pages](https://github.com/thesmartwon/thesmartwon.com/tree/gh-pages) branch which Github hosts at https://thesmartwon.github.io/thesmartwon.com with a CNAME to https://thesmartwon.com . Free hosting is cool, huh?
