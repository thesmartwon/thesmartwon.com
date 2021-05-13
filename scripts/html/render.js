const { esbuildConfig, paths } = require('../helpers')
const { rss } = require('./rss')
const esbuild = require('esbuild')
const path = require('path')
const fs = require('fs')
const { h } = require('preact')

const generatedIndex = '../../src/generated'
const esbuildConfigSSR = {
  entryPoints: ['./src/entry.jsx'],
  entryNames: '[dir]/[name]',
  platform: 'node',
  ...esbuildConfig
}

function renderPage({ slug, props, cssFileNames, entryFile }) {
  const { App, renderPost, renderPage } = require(entryFile)
  const outFile = path.join(paths.outdir, slug, 'index.html')
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  global.location = { pathname: slug }
  props.children = h(App)
  props.cssFileNames = cssFileNames
  props.path = slug
  let html
  if (props.dateShort) {
    html = renderPost(props)
  }
  else {
    html = renderPage(props)
  }
  fs.writeFileSync(outFile, html)
}

function render({ cssFileNames }) {
  const start = process.hrtime()
  console.log('[render] start')
  const { metafile } = esbuild.buildSync(esbuildConfigSSR)
  const entryFile = path.join(process.cwd(), Object.keys(metafile.outputs).find(outfile => outfile.endsWith('.js')))

  delete require.cache[generatedIndex]
  delete require.cache[entryFile]

  const index = require(generatedIndex)
  Object.entries(index).forEach(([slug, props]) =>
    renderPage({ slug, props, cssFileNames, entryFile })
  )
  rss(index)

  const elapsed = process.hrtime(start)[1] / 1000000
  console.log('[render] rendered', Object.keys(index).length, 'files in', elapsed + 'ms')
}

module.exports = {
  render,
  renderPage,
  esbuildConfigSSR
}

