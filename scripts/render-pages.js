const path = require('path')
const fs = require('fs-extra')
const chokidar = require('chokidar')
const render = require('preact-render-to-string')
// HTML template
const { h } = require('preact')
const { HTML } = require('./html')

const pageDirectory = 'src/pages/'
const renderPage = (pageIndex, fname) => {
	const Component = pageIndex[fname].component
	return `<!DOCTYPE html>${render(
		<HTML title={pageIndex[fname].title}>
			<Component
				pages={Object.values(pageIndex)
					.filter(page => page.frontmatter)
					.sort((p1, p2) => p2.frontmatter.date.localeCompare(p1.frontmatter.date))
				}
				path={'/' + fname.replace('index', '')}
				/>
		</HTML>)}`
}

const watcher = chokidar.watch(pageDirectory, {
	ignored: ['**/*.swp', '**/*.md.js'],
  persistent: true
})

module.exports = pageIndex => new Promise(resolve =>
	watcher
		.on('add', file => {
			if (path.sep === '\\') {
				file = file.replace(/\\/g, '/')
			}
			const ext = path.extname(file)
			const fname = file.replace(pageDirectory, '').replace(ext, '')
			if (ext === '.js') {
				const page = require(`../${file}`)
				pageIndex[fname] = {
					slug: fname,
					component: page.default,
					title: page.title
				}
				fs.ensureFileSync(`public/${fname}.html`)
				fs.writeFileSync(`public/${fname}.html`, renderPage(pageIndex, fname))
			}
		})
		.on('ready', () => {
			watcher.close()
			resolve(pageIndex)
		})
);
