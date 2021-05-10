---
title: How this Site (used to be) Built
date:  2019-05-12
---

<div class="notification is-info">

  [A newer version of this article](../this-site-2) is available.

</div>

You probably don't notice, but this site is nearly as fast as it can possibly be! I did that because I value your data bill and places which are just now getting emerging internet. I'm also a minimalist.
<figure>
<img src="./road-runner.jpg" alt="Road runner" />
<figcaption>This is exactly how my site gets delivered to you.</figcaption>
</figure>

I didn't want to make any compromises on my developer experience, though. Writing should be fun and easy (this is a creative outlet, after all!) and deployment should only take one click. That was my main gripe with my the last version of this site.

Enter [Gatsby](https://gatsbyjs.org), a framework to pipeline data (like [Markdown](https://en.wikipedia.org/wiki/Markdown)) onto webpages using templates. However, the 200kb Gatsby weighs in at for Hello World is just to big compared to the 10kb for my last Jekyll blog. On emerging 3G that's still 2-3 seconds to load 200kb for what is maybe only 5kb of content!
<figure>
<img src="./gatsby-logo.jpg" alt="Gatsby logo" />
<figcaption><a href="https://www.gatsbyjs.org">GatsbyJS</a> is a nice way to write modern React+JSX without compromising much on SEO and speed.</figcaption>
</figure>

I didn't just blindly adopt Gatsby, though. I value understanding how a system works completely, and there were too many things I didn't understand. I wanted to NOT include JS on pages that didn't need them and to use [Preact](https://preactjs.com) to make the ones that needed JS (like my [retirement projector](/posts/money/early-retirement)) even lighter. No one else seems to want that. Everyone else seems to be okay with the bloat.

I wanted to optimize that, so I got down and dirty for two weeks and ripped Gatsby apart to include the bare minimum needed to render. The result is what you now see.

This page is proof that with some webpack customization and learning Gatsby internals, it's possible to make tiny static pages IN REACT that don't even ship React.js to the browser!
It's what I've been looking for since it's the most elegant and customizable way to control content I ship to your browser.
I understand how every line of HTML, CSS, and Javascript got there (preferably without Javascript), and that makes me want to write more content with higher quality, which should be the whole point of the internet.

If you're into the technical aspects, check out the section below!

<figure>
<img src="show-me-the-source-yoda.jpg" alt="Show me the source" />
<figcaption>Use the source, Luke!</figcaption>
</figure>

# How I Made the Site
### Gatsby Internals I Tore Apart
Everyone loves a great tear. Gatsby's source was actually pretty clean and focused a lot on browser and cross-platform compatibility.

- [app.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/app.js) (webpack entry point for development)
- [production-app.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/production-app.js) (webpack entry point for production)
- [static-entry.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/static-entry.js#L79) (webpack entry point for building html)
- [gatsby-node.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/gatsby-node.js#L87) (webpack config overriding)

This site is all open source, take a look at the [README.md](https://github.com/thesmartwon/thesmartwon.com) where I explain all of the above files!

I've already forgotten a lot of what I did a month ago, but look through the [early commit history](https://github.com/thesmartwon/thesmartwon.com/commits/master?after=b06392c74dca5c55b9c25bfdbd17a41b4f025c26+34) to get the gist of it!

### Cool Features

- React to build interactive and non-interactive pages.
- Bulma as my CSS framework (I use SASS to just get what I need).
- [Gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) which uses [remark](https://remark.js.org) on [my Markdown files.](https://github.com/thesmartwon/thesmartwon.com/tree/master/src/posts) I'm [writing in Markdown right now,](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/posts/coding/this-site.md) and OH BOY it's so much more fun than html!!
  - [Remark](https://remark.js.org) a part of [unified](https://unified.js.org) which is an extremely cool way to parse text into nearly any form you want (like html).
- [Gatsby-remark-images](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images) to resize all the images to reasonable sizes + add a container.
- [Gatsby-remark-manifest](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest) for the mobile navbar color and resizing my favicon.
- [React-helmet](https://github.com/nfl/react-helmet) to set `<head>` per-page for things like the title. It's made by the NFL, who knew.

<figure>
<img src="./football.jpg" alt="Getting tackled" />
<figcaption>React-helmet is a cool name coming from the NFL. I like American football.</figcaption>
</figure>

- [Preact](https://preactjs.com/) because I don't need everything in React and I value my page size very highly. SPA frameworks are kinda a must-have nowadays for interactive pages.
- To update the site, I just need to push and [CircleCI](https://circleci.com/blog/deploying-documentation-to-github-pages-with-continuous-integration) takes care of the rest for me. How cool is that? 
