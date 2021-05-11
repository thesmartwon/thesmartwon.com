const { slugify, paths, walk } = require('../helpers/index')
const { js } = require('../build/js')
const fs = require('fs')
const path = require('path')
const marked = require('marked')
const yaml = require('js-yaml')


function getWordCount(text) {
  const matches = text.match(/\S+/g) ;
  return matches ? matches.length : 0;
}

function splitFrontmatter(file) {
  let contents = fs.readFileSync(file, 'utf8')
  const frontmatterRegex = /---/g;
  const start = frontmatterRegex.exec(contents) 
  const end = frontmatterRegex.exec(contents)

  if (!start || !end) {
    throw Error(`Post ${file} must contain frontmatter`)
  }

  const frontmatter = contents.substr(start.index + 3, end.index - 3)

  return [yaml.load(frontmatter), contents.substr(end.index + 3)]
}

const unescapeQuotes = text => text.replace(/&#39;/g, "'").replace(/&quot;/g, '"')

// MD -> JSX
marked.setOptions({ 
  highlight(code, _lang) {
    return '{`' + code.replace(new RegExp('`', 'g'), '&#58;') + '`}'
  }
})
function posts() {
  const postIndex = {}
  console.log('[posts] start')
  const start = process.hrtime()
  const mdFiles = walk(paths.postsDir, { ext: '.md' })
  mdFiles.forEach(file => {
    const [frontmatter, contents] = splitFrontmatter(file)

    if (frontmatter.draft) {
      console.log('[posts] skipping draft:', frontmatter.title)
      return
    }

    const destFile = path.join(paths.generatedDir, file.replace(/\\/g, '/') + '.jsx')
    const imports = ["import { h, Fragment } from 'preact'"]
    const importRegex = /^\s*import (.*) from (&#39;|&quot;)(.*)(&#39;|&quot;)$/;
    let fullText = ''
    function addFullText(src) {
      fullText += unescapeQuotes(
        src
          .replace(/<figcaption>[^>]*<\/figcaption>/g, '')
          .replace(/<[^>]*>/g, '')
          .trimRight() + ' '
      )
      return src
    }

    // https://marked.js.org/using_pro#renderer
    const renderer = {
      paragraph(src) {
        const match = src.match(importRegex)
        if (match) {
          const from = path.resolve(path.dirname(file), match[3])
          const to = path.dirname(path.resolve(destFile))
          const imp = path.relative(to, from)
          imports.push(`import ${match[1]} from '${imp}'`)
          return ''
        }
        else {
          addFullText(src)
        }

        return false
      },
      html: addFullText
    }

    marked.use({ renderer })
    const html = marked(contents)
    const jsx = `${imports.join('\n')}

export default () => (
<Fragment>
${html}
</Fragment>
)`;

    fullText = fullText.replace(/\s+/g, ' ')
    frontmatter.excerpt = fullText.substr(0, 150).trimRight()
    // Finish on end of sentence if possible
    const lastSentencePattern = /([.!?])[^.!?]+$/
    if (lastSentencePattern.test(frontmatter.excerpt)) {
      frontmatter.excerpt = frontmatter.excerpt.replace(lastSentencePattern, (_, match) => match)
    }
    else {
      frontmatter.excerpt += '…'
    }
    frontmatter.excerpt = frontmatter.excerpt.trim()
    // Assume 200wpm reading speed
    // Round to nearest .5
    frontmatter.timeToRead = Math.round(getWordCount(fullText) / 200 * 2) / 2

    // Pretty formats for rendering
    if (frontmatter.date) {
      const longFormat = Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
      frontmatter.dateLong = longFormat.format(frontmatter.date)
      frontmatter.dateShort = frontmatter.date.toISOString().substr(0, 10)
      delete frontmatter.date
    }

    fs.mkdirSync(path.dirname(destFile), { recursive: true })
    fs.writeFileSync(destFile, jsx)

    // Bundle JS if post has any
    const postJsIndex = file.replace(/.md$/, '.js')
    if (fs.existsSync(postJsIndex)) {
      frontmatter.jsFileNames = [path.basename(js(postJsIndex))]
    }
    const post = {
      destFile: path.resolve(destFile),
      frontmatter
    }
    postIndex[slugify(file)] = post
  })


  const elapsed = process.hrtime(start)[1] / 1000000
  console.log('[posts] rendered', mdFiles.length, 'posts in', elapsed + 'ms')
  return postIndex
}

const titleRe = /export\s+const\s+title\s+=\s+['"](.*)['"]/
function pages() {
  const pageIndex = {}
  const pages = walk(paths.pagesDir, { ext: '.jsx' })

  pages.forEach(file => {
    const frontmatter = {}
    const contents = fs.readFileSync(file, 'utf8')
    const match = contents.match(titleRe)
    if (match) {
      frontmatter.title = match[1]
    }

    const page = {
      destFile: path.resolve(file),
      frontmatter
    }
    pageIndex[slugify(file.replace(paths.pagesDir, ''))] = page
  })

  return pageIndex
}

function source() {
  // TODO: duplicate check
  const index = {
    ...posts(),
    ...pages()
  }
  // Make an index of posts
  const indexPath = path.join(paths.generatedDir, 'index.js')
  const indexContent = 'module.exports = {\n' +
    Object.entries(index).map(([slug, { frontmatter, destFile }]) =>
  `  ${JSON.stringify(slug)}: {
    Component: () => require('./${path.relative(path.dirname(indexPath), destFile)}'),
    ${JSON.stringify(frontmatter, null, 4).slice(1, -1).trim()}
  }`).join(',\n') + '\n}'
  fs.writeFileSync(indexPath, indexContent)
}

module.exports = {
	source
}

