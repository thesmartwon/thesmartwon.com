---
title: How this Site will Always be Built
date: 2021-05-12
---

After getting nagged with [6 dependabot security vulnerabilities](https://github.com/thesmartwon/thesmartwon.com/pulls?q=is%3Apr+author%3Aapp%2Fdependabot) (which weren't actually vulnerabilities) I figured it was finally time to dust off this site and give it some love. 

## What I really really want
- Write blog posts in MD which are rendered to HTML
  - Allow importing some JSX
  - Allow writing some JS for interactive pages (like the [retirement calculator](/posts/money/early-retirement))

As an example, I might want to write:
```md
import { RetirementCalc } from './retirement-calc'

Brilliant, you'd like to quit
your day job and do something
more meaningful with your life.
Now how do you do it?

<RetirementCalc />
```

- Write blog components in JSX
  - I still want to keep writing code like `{posts.map(post => ArticlePreview(post))}` for index pages!

### What's wrong with v2?
v2 of this site had [too many dependencies](https://github.com/thesmartwon/thesmartwon.com/blob/9b3ec7e047366a79a12a1d94776d967677e2ada3/package.json) and relied on [`@babel/register`](https://babeljs.io/docs/en/babel-register) for transpiling JSX for server-side-rendering. This was slow and error-prone when writing a development server. With [esbuild](https://esbuild.github.io/) being the fastest transpiler and bundler in town (and sporting no dependencies!) I had to give it a try.

## The perfect system
<figure>
  <img src="perfect-system.jpg" alt="Clu asking to create perfect system" />
  <figcaption>Am I still to create the perfect system? [Tron]</figcaption>
</figure>

I decided the perfect blog build system has just 3 tasks:
- build
  - Clean (just `rm -rf dist`)
  - Copy static and post assets
  - Transpile MD to JSX
  - Render JSX to HTML
- start
  - Build
  - Serve `dist` under <http://localhost>
  - Watch for changes
- serve
  - Serve `dist` under <http://localhost> exactly like production

### Build
#### Transforming MD to JSX
The old v2 system was based on `unified` and `@babel/register` but:
  1. I really don't need all their features, I just need frontmatter and `import` statement support
  2. Both have rather large dependency trees

Enter [`marked`](https://marked.js.org/), a JS library with no dependencies and exactly the functionality I need. 10 years of battle-testing has yielded a non-fussy library where the user doesn't have to parse ASTs! After 100 lines of config (mostly manipulating strings) I was able to transform my MD posts to JSX!

I also took the time to hook up `esbuild` to bundle JS if there's a matching `.js` file to the `.md` file.

#### Transforming JSX to HTML
The old v2 system had some `const index = {}` variables in memory which were exported and then loaded wherever needed (so import order was important)!
<figure>

```js
let postIndex = {}
module.exports = { postIndex }
```

  <figcaption>Many index, much <a href="https://github.com/thesmartwon/thesmartwon.com/blob/9b3ec7e047366a79a12a1d94776d967677e2ada3/scripts/gulp/posts.js">bad old code</a></figcaption>
</figure>

Instead of having indexes live in memory in source files I complemented the new JSX system by writing a `src/generated/index.js` file with a listing of all pages and posts. As long as this file can be imported by both a JS bundler (for SSR) and by Node (to iterate through every page) I wouldn't need `@babel/register` anymore!

<figure>

```js
const index = require('../../../src/generated')
Object.entries(index).forEach(renderPage)
```

  <figcaption>A sane way to do SSR.</figcaption>
</figure>

#### CSS
The old v2 system used [node-sass](https://www.npmjs.com/package/node-sass), but they had platform-dependent (and often incompatible) binaries and 16 dependencies. I still needed a SASS compiler since I'm using `bulma`, but I opted for [dart-sass](https://www.npmjs.com/package/sass) with its single `chokidar` dependency instead.

### Start
My site builds in around 1s, so the start task really just needs to rereun the correct build tasks and provide a live-reload server.

<figure>

```sh
npm run build  1.23s user 0.17s system 139% cpu 0.997 total
```

  <figcaption>Now this is actually "blazingly fast". It also scales linearly instead of exponentially (looking at you, Gatsby).</figcaption>
</figure>

#### Watching for changes
Since [`chokidar`](https://www.npmjs.com/package/chokidar) came along with `dart-sass` I can use it to watch the correct source files:

```js
function register(path, listener) {
  chokidar.watch(path, { ignoreInitial: true }).on('all', listener)
}
// TODO: use CSS instead of SASS
register('src/**/*.sass', css)
// TODO: copy only what changes
register('posts/**/*.{jpg,jpeg,gif,svg,png}', copy)
// Need to rewrite index to update nav
register('posts/**/*.md', (ev, file) => {
  console.log('[watch]', ev, file)
  if (ev === 'change' || ev === 'add') {
    post(file)
  }
  else if (ev === 'unlink') {
    delete index[slugify(file)]
  }
  writeIndex()
})
```

### Serving with live-reloading
The old v2 system used [browser-sync](https://www.npmjs.com/package/browser-sync) which weighs in with 30 direct dependencies! Instead, I decided to write my own HTTP server to both:
1. Serve assets like Github pages's NGINX would in production
2. Inject a livereload script for development

It turned out to only take [100 lines of vanilla Node14 code!](https://github.com/thesmartwon/thesmartwon.com/blob/master/scripts/serve.js) By tracking connected clients in my HTTP server I could add this to my `start` script to get live-reloading:

```js
const { clients } = require('./serve')

// Index pages now update when I touch site components!
esbuild.build({
  ...esbuildConfigSSR,
  watch: {
    onRebuild(error) {
      if (error) {
        console.log(error)
        return
      }
      // TODO: render only changed post + pages
      render({ cssFileName })
      clients.forEach(res => res.write('data: update'))
      clients.length = 0
    },
  },
})
```

## Summary
Using fewer tools has led to a faster more maintainable build system with fewer dependencies that Github's dependabot shouldn't ever bother me about.

Some future areas for improvement (which are no longer daunting!)
- Add back RSS
- Ditch SASS for my own CSS (I want a dark mode!)
- Create image pipeline (resizing and container size)
- Improve watcher to only rerender changed files
- Wrap build system in another package for others to use!

