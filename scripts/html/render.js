const { esbuildConfig, paths } = require('../helpers')
const esbuild = require('esbuild')
const path = require('path')
const fs = require('fs')
const { h } = require('preact')

function render({ cssFileNames }) {
  const { metafile } = esbuild.buildSync({
    entryPoints: ['./src/entry.jsx'],
    entryNames: '[dir]/[name]',
    platform: 'node',
    ...esbuildConfig
  })
  const outFile = path.join(process.cwd(), Object.keys(metafile.outputs).find(outfile => outfile.endsWith('.js')))
  const { App, renderPost, renderPage } = require(outFile)

  Object.entries(require('../../src/generated')).forEach(([slug, props]) => {
    const outFile = path.join(paths.outdir, slug, 'index.html')
    fs.mkdirSync(path.dirname(outFile), { recursive: true })
    global.location = { pathname: slug }
    props.children = h(App)
    props.cssFileNames = cssFileNames
    props.path = slug
    const html = props.dateShort
      ? renderPost(props)
      : renderPage(props)
    fs.writeFileSync(outFile, html)
  })
}

module.exports = {
  render
}

