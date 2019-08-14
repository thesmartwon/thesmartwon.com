const fs = require('fs-extra')
const visit = require('unist-util-visit')

const markdownPipe = require('unified')()
  .use(require('remark-parse'))

const vfile = markdownPipe.parse(fs.readFileSync('./posts/bikes/buying-used.md'))

for (const child of vfile.children) {
  console.dir(child);
}
