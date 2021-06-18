const { getHash, paths } = require('../helpers')
const sass = require('sass')
const path = require('path')
const fs = require('fs')

function css() {
  console.log('[css] start')
  const start = process.hrtime()
  try {
    const css = sass.renderSync({
      file: paths.styleFile, 
      outputStyle: 'compressed',
    })

    const toFile = path.basename(css.stats.entry)
      .replace('.sass', `-${getHash(css.css)}.css`)
    
    const outFile = path.join(paths.outdir, toFile)
    fs.writeFileSync(outFile, css.css)
    console.log('[css]', outFile)
    const elapsed = process.hrtime(start)[1] / 1000000
    console.log('[css] bundled', css.stats.includedFiles.length, 'files in', elapsed + 'ms')
    return '/' + toFile
  }
  catch (err) {
    console.error('ERROR', err)
    console.error(err.formatted)
  }
}

module.exports = {
  css,
}

