// Unified
const visit = require('unist-util-visit')
// HTML template
const moment = require('moment')

const lastSentencePattern = /([.!?])[^.!?]+$/

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
    })
  })
  .use(() => (ast, file) => {
    let { frontmatter } = file.data
    let excerpt = ''
    visit(ast, 'paragraph', paragraph =>
      visit(paragraph, 'text', text => {
        if (excerpt.length < 150) {
          excerpt += text.value.trimRight() + ' '
        }
      })
    )

    // Could be over 150 characters
    frontmatter.excerpt = excerpt.substr(0, 150).trimRight()

    // Finish on end of sentence if possible
    if (lastSentencePattern.test(frontmatter.excerpt)) {
      frontmatter.excerpt = frontmatter.excerpt.replace(lastSentencePattern, (_, match) => match)
    }
    else {
      frontmatter.excerpt += '…'
    }
    // Assume 200wpm reading speed
    // Round to nearest .5
    frontmatter.timeToRead = Math.round(excerpt.split(' ').length / 200 * 2) / 2
  })
  // Render to JSX
  .use(require('remark-mdx'))
  .use(require('./mdx-ast-to-mdx-hast'))
  .use(require('./mdx-hast-to-jsx'))

module.exports = {
  markdownPipe
}
