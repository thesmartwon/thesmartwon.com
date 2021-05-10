const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const paths = {
  outdir: 'dist',
  postsDir: 'posts',
  pagesDir: 'src/pages',
  staticDir: 'static',
}

const slugify = p => p
	.replace(/\\/g, '/')
  .replace(/\/\//g, '/')
	.replace('/index', '')
  .replace(/^([^\/])/, (_, match) => '/' + match)
	.replace('.md', '')
	.replace('.jsx', '')
	.replace('.js', '')

function getHash(string) {
	if (process.env.NODE_ENV === 'production') {
		const hash = crypto.createHash('md5').update(string).digest('hex')
		return hash.substr(0, 5)
	}

	return 'dev'
}

function _walk(dir, options, res) {
	fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    try {
      const stats = fs.statSync(filepath)
      if (stats.isDirectory()) {
        _walk(filepath, options, res)
      } else if (stats.isFile() && filepath.endsWith(options.ext)) {
        res.push(filepath)
      }
    } catch { /* can't stat file */ }
  })
}

function walk(dir, options = { ext: '' }) {
  const res = []
  _walk(dir, options, res)
  return res
}

const esbuildConfig = {
  metafile: true,
  bundle: true,
  outdir: paths.outdir,
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  loader: { '.svg': 'dataurl' },
}

module.exports = {
  paths,
  slugify,
  getHash,
  walk,
  esbuildConfig
}
