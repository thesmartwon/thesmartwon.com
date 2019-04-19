---
title:  "How this Site was Built"
date:   2019-04-18 21:45:00 -0400
draft: true
---
You probably don't notice, but this site is nearly as fast as it can possibly be! I didn't want to make any compromises on the developmer experience, though. Writing should be fun and easy, and deployment should only take one click. That was a mistake I made with the last version of [thesmartwon.com](thesmartwon.com), which was a Jekyll site that used some custom plugins that required manual deployment. Plus, I just didn't have the time to learn Ruby to make the site do what I want.

Enter [gatsby](gatsbyjs.org), a framework to manage site data and create webpages from templates (much like Jekyll). BUT the key difference is Gatsby lets you use Javascript and React (which I already know), soo it's easy to make any content imaginable! However, the 200kb Gatsby weighs in at for Hello World is just to big compared to the 10kb for my last blog. On emerging 3G that's still a long time time to load for what is maybe only 1kb of content! I wanted to optimize that, so I got down and dirty and ripped it apart to include the bare minimum assets needed to render, and this page is proof that with some webpack customization and learning Gatsby internals, it's possible to make tiny static pages IN REACT! It's what I've been looking for since it's the fastest, cleanest, most customizable way to control content I ship to your browser. I understand how every line of HTML, CSS, and Javascript got there (preferably without Javascript), and that makes me want to write more and create good content for you guys.

You can checkout the following files I changed to accomplish this:

- app.js (webpack entrypoint for development)
- html.js (customizes HTML template)
- production-app.js (webpack entrypoint for production)
- static-entry.js (webpack entrypoint for building html)
- gatsby-node.js (webpack config overriding)
