const path = require('path')
const fs = require('fs-extra')
const chokidar = require('chokidar')
const render = require('preact-render-to-string')
// Unified
const unified = require('unified')
const visit = require('unist-util-visit')
const parse = require('remark-parse')
const frontmatter = require('remark-frontmatter')
const parseFrontmatter = require('remark-parse-yaml')
const vfile = require('to-vfile')
const report = require('vfile-reporter')
// MDX
const remarkMdx = require('remark-mdx')
const mdxAstToMdxHast = require('./mdx-ast-to-mdx-hast')
const mdxHastToJsx = require('./mdx-hast-to-jsx')
// HTML template
const { h } = require('preact')
const { HTML } = require('./html')

const pageIndex = {}
const pageDirectory = 'src/pages/'
const contentDirectory = 'src/posts/'
const renderPage = Component => `<!DOCTYPE html>${render(<HTML><Component /></HTML>)}`

const watcher = chokidar.watch('src', {
	ignored: ['**/*.swp', '**/*.md.js'],
  persistent: true
})

const markdownPipe = unified()
	.use(parse)
	// Frontmatter
	.use(frontmatter)
	.use(parseFrontmatter)
	.use(() => (ast, file) => {
		visit(ast, 'yaml', item => {
			file.data.frontmatter = item.data.parsedValue;
		});
	})
	// Render to JSX
	.use(remarkMdx)
	.use(mdxAstToMdxHast)
	.use(mdxHastToJsx)

watcher
  .on('add', file => {
		if (path.sep === '\\') {
			file = file.replace(/\\/g, '/')
		}
		const ext = path.extname(file)
		if (file.startsWith(pageDirectory)) {
			const fname = file.replace(pageDirectory, '').replace(ext, '')
			if (ext === '.js') {
				pageIndex[fname] = renderPage(require(`../${file}`).default)
				fs.ensureFileSync(`public/${fname}.html`)
				fs.writeFileSync(`public/${fname}.html`, pageIndex[fname])
			}
		} else if (file.startsWith(contentDirectory)) {
			if (ext === '.md') {
				markdownPipe.process(vfile.readSync(file), (err, mdxFile) => {
					if (err) {
						console.error(report(mdxFile), err)
					} else {
						console.log(report(mdxFile))
					}
					if (mdxFile) {
						const jsFile = file + '.js'
						fs.writeFileSync(jsFile, mdxFile.contents, 'utf8')

						const fname = file.replace(contentDirectory, '').replace(ext, '')
						pageIndex[fname] = renderPage(require(`../${file}.js`).default)
						fs.ensureFileSync(`public/${fname}.html`)
						fs.writeFileSync(`public/${fname}.html`, pageIndex[fname])
					}
				})
			}
		}
	})
	.on('ready', () => watcher.close())
