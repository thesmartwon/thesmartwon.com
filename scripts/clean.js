const { paths } = require('./helpers')
const fs = require('fs')

console.log('[clean] start')
const start = process.hrtime()
fs.rmdirSync(paths.outdir, { recursive: true })
const elapsed = process.hrtime(start)[1] / 1000000
console.log('[clean]', elapsed + 'ms')
