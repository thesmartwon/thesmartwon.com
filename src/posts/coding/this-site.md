---
title:  "How this Site was Built"
date:   2019-04-18 21:45:00 -0400
javascript: false
---
You probably don't notice, but this site is nearly as fast as it can possibly be!
I didn't want to make any compromises on the developer experience, though.
Writing should be fun and easy, and deployment should only take one click.
That was a mistake I made with the last version of [thesmartwon.com](https://thesmartwon.com), which was a Jekyll site that used some custom plugins that required manual deployment.
Plus, I just didn't have the time to learn Ruby to make the site do what I want.

Enter [gatsby](https://gatsbyjs.org), a framework to manage site data and create webpages from templates (much like Jekyll).
BUT the key difference is Gatsby lets you use Javascript and React (which I already know) so it's easy to make any content imaginable!
However, the 200kb Gatsby weighs in at for Hello World is just to big compared to the 10kb for my last blog.
On emerging 3G that's still a long time time to load for what is maybe only 5kb of content!
I wanted to optimize that, so I got down and dirty and ripped it apart to include the bare minimum assets needed to render.
This page is proof that with some webpack customization and learning Gatsby internals, it's possible to make tiny static pages IN REACT that don't even ship React.js to the browser!
It's what I've been looking for since it's the fastest, cleanest, most customizable way to control content I ship to your browser.
I understand how every line of HTML, CSS, and Javascript got there (preferably without Javascript), and that makes me want to write more and create good content for you guys.

You can checkout the following files I changed to accomplish this:

- [app.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/app.js) (webpack entry point for development)
- [production-app.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/production-app.js) (webpack entry point for production)
- [static-entry.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/src/static-entry.js#L79) (webpack entry point for building html)
- [gatsby-node.js](https://github.com/thesmartwon/thesmartwon.com/blob/master/gatsby-node.js#L87) (webpack config overriding)

The current package.json looks like this:
```
{
  "dependencies": {
    "bulma": "^0.7.4",
    "gatsby": "^2.3.22",
    "gatsby-plugin-manifest": "^2.0.29",
    "gatsby-plugin-react-helmet": "^3.0.12",
    "gatsby-plugin-sass": "^2.0.11",
    "gatsby-plugin-sharp": "^2.0.35",
    "gatsby-remark-images": "^3.0.10",
    "gatsby-source-filesystem": "^2.0.29",
    "gatsby-transformer-remark": "^2.3.8",
    "node-sass": "^4.11.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-helmet": "^5.2.0"
  },
  "devDependencies": {
    "gatsby-plugin-webpack-bundle-analyzer": "^1.0.4",
    "gh-pages": "^2.0.1",
    "null-loader": "^0.1.1",
    "preact": "^8.4.2",
    "preact-compat": "^3.18.4",
    "webpack-bundle-analyzer": "^3.3.2"
  }
}
```

I hope to write a nice README.md soon!
