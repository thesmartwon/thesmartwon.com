const { paths } = require('./helpers')
const fs = require('fs')

console.log('[clean] start')
const start = process.hrtime()
fs.rmSync(paths.outdir, { recursive: true, force: true })
fs.rmSync(paths.generatedDir, { recursive: true, force: true })
const elapsed = process.hrtime(start)[1] / 1000000
console.log('[clean]', elapsed + 'ms')
