const { esbuildConfig } = require('../helpers')
const path = require('path')
const esbuild = require('esbuild')

const isProd = process.env.NODE_ENV === 'production'

function js(file) {
  const start = process.hrtime()
  console.log('[js]', file) 
  const { metafile } = esbuild.buildSync({
    entryPoints: [file],
    entryNames: `[dir]/${path.dirname(file)}/[name]${isProd ? '.[hash]' : ''}`,
    ...esbuildConfig
  })
  const elapsed = process.hrtime(start)[1] / 1000000
  console.log('[js] bundled', Object.keys(metafile.inputs).length, 'files in', elapsed + 'ms')
  return Object.keys(metafile.outputs).find(outFile => outFile.endsWith('.js'))
}

module.exports = {
  js
}

