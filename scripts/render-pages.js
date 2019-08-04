import path from 'path'
import fs from 'fs-extra'
import chokidar from 'chokidar'
import { h } from 'preact'
import render from 'preact-render-to-string'
import { HTML } from './html'

const pageIndex = {}
const pageDirectory = `src/pages/`
const renderPage = Component => `<!DOCTYPE html>${render(<HTML><Component /></HTML>)}`

const watcher = chokidar.watch(pageDirectory, {
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
	.on('ready', () => watcher.close())
