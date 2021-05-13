# thesmartwon.com [![CircleCI](https://img.shields.io/circleci/build/github/thesmartwon/thesmartwon.com?style=for-the-badge)](https://circleci.com/gh/thesmartwon/thesmartwon.com)

My blog lives here. Custom rendered with lots of ❤️ for my readers.

## Lots of ❤️
I got tired of being pigeon-holed into different framworks, so I made my own.

- [dart-sass](https://github.com/sass/dart-sass) to render my CSS
  - [Bulma](https://bulma.io) as a sensible CSS framework
- [JSX components + Preact](https://github.com/preactjs/preact-render-to-string) to render my HTML
  - [esbuild](https://esbuild.github.io/) to transform JSX into CJS 
  - [esbuild](https://esbuild.github.io/) to bundle JS for a few pages (like the [retirement calculator](https://thesmartwon.com/posts/money/early-retirement/))

### Deployment
I used [circle-ci](https://circleci.com/gh/thesmartwon/thesmartwon.com) to deploy a built version of my site on each push to master using a deploy script to push to this repo's [gh-pages](https://github.com/thesmartwon/thesmartwon.com/tree/gh-pages) branch which Github hosts at https://thesmartwon.github.io/thesmartwon.com with a CNAME to https://thesmartwon.com. Free hosting is cool, huh?
