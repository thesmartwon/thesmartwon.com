const fs = require('fs')
const render = require('preact-render-to-string')
const marked = require('marked')
const { compiler } = require('markdown-to-jsx')

const bikePost = fs.readFileSync('./posts/money/early-retirement/index.md', 'utf8')

//console.log('bikePost', bikePost)
//const jsx = compiler(bikePost)
//console.log(render(jsx))

console.log(marked(bikePost))
