const path = require('path')
const fs = require('fs')
const { paths } = require('../helpers')

const fromPath = paths.staticDir
const outdir = paths.outdir

module.exports = {
  copy() {
    const start = process.hrtime()
    console.log('[copy] start')
    if (!fs.existsSync(outdir)) {
      fs.mkdirSync(outdir)
    }

    fs.readdirSync(fromPath).forEach(file => {
      fs.copyFileSync(path.join(fromPath, file), path.join(outdir, file))
    })
    const elapsed = process.hrtime(start)[1] / 1000000
    console.log('[copy]', elapsed + 'ms')
  }
}

