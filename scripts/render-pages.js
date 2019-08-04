const path = require('path')
const fs = require('fs-extra')
const chokidar = require('chokidar')
const render = require('preact-render-to-string')
// HTML template
const { h } = require('preact')
const { HTML } = require('./html')

const pageIndex = {}
const pageDirectory = 'src/pages/'
const renderPage = Component => `<!DOCTYPE html>${render(<HTML><Component /></HTML>)}`

const watcher = chokidar.watch(pageDirectory, {
	ignored: ['**/*.swp', '**/*.md.js'],
  persistent: true
})

watcher
  .on('add', file => {
		if (path.sep === '\\') {
			file = file.replace(/\\/g, '/')
		}
		const ext = path.extname(file)
		const fname = file.replace(pageDirectory, '').replace(ext, '')
		if (ext === '.js') {
			pageIndex[fname] = renderPage(require(`../${file}`).default)
			fs.ensureFileSync(`public/${fname}.html`)
			fs.writeFileSync(`public/${fname}.html`, pageIndex[fname])
		}
	})
	.on('ready', () => {
		console.log(pageIndex)
		watcher.close()
	})
