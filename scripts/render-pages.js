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

const onFile = (pageFile, pageIndex) => {
	if (path.sep === '\\') {
		pageFile = pageFile.replace(/\\/g, '/')
	}
	const ext = path.extname(pageFile)
	const fname = pageFile.replace(pageDirectory, '').replace(ext, '')
	if (ext === '.js') {
		delete require.cache[require.resolve(`../${pageFile}`)]
		const page = require(`../${pageFile}`)
		pageIndex[fname] = {
			slug: fname,
			component: page.default,
			title: page.title
		}
		fs.ensureFileSync(`public/${fname}.html`)
		fs.writeFileSync(`public/${fname}.html`, renderPage(pageIndex, fname))

		console.log(`${pageFile}: no issues found`)
	}
}

module.exports = (pageIndex, watchMode) => new Promise(resolve =>
	chokidar
		.watch(pageDirectory, {
			ignored: ['**/*.swp', '**/*.md.js'],
			persistent: true
		})
		.on('add', file => onFile(file, pageIndex))
		.on('change', file => onFile(file, pageIndex))
		.on('ready', () => {
			if (!watchMode) {
				watcher.close()
			}
			resolve(pageIndex)
		})
);
