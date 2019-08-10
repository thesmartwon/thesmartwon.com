# thesmartwon.com [![CircleCI](https://img.shields.io/circleci/build/github/thesmartwon/thesmartwon.com?style=for-the-badge)](https://circleci.com/gh/thesmartwon/thesmartwon.com)

My blog lives here. Custom rendered with lots of ❤️.

## Lots of ❤️
I got tired of being pigeon-holed into different framworks, so I made my own.

- [Node-sass](https://github.com/sass/node-sass) to render my CSS
  - [Bulma](https://bulma.io) as a sensible CSS framework start
- [Rollup](https://github.com/rollup/rollup) to bundle my JS
  - [Babel](https://babeljs.io) to transform the JS to run in the browser
- [JSX components + Preact](https://github.com/preactjs/preact-render-to-string) to render my HTML
  - [Babel](https://babeljs.io) to transform JSX into CJS 
- [Gulp](https://gulpjs.com) to glue it all together and provide a live dev server

### Deployment
I used [circle-ci](https://circleci.com/gh/thesmartwon/thesmartwon.com) to deploy a built version of my site on each push to master using [gh-pages](https://www.npmjs.com/package/gh-pages), which is a script to push to this repo's [gh-pages](https://github.com/thesmartwon/thesmartwon.com/tree/gh-pages) branch which Github hosts at https://thesmartwon.github.io/thesmartwon.com with a CNAME to https://thesmartwon.com. Free hosting is cool, huh?
