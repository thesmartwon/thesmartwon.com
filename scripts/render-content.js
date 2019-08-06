const path = require('path')
const fs = require('fs-extra')
const chokidar = require('chokidar')
const render = require('preact-render-to-string')
// Unified
const vfile = require('to-vfile')
const visit = require('unist-util-visit')
const report = require('vfile-reporter')
// HTML template
const moment = require('moment');
const { h } = require('preact')
const { HTML } = require('./html')
const { PostTemplate } = require('../src/templates/post-template')

const pageIndex = {}
const contentDirectory = 'src/content/'
const renderPost = post => `<!DOCTYPE html>\n${render(
	<HTML title={post.frontmatter.title}>
		<PostTemplate
			frontmatter={post.frontmatter}
			slug={post.slug}
		>
			{h(post.component)}
		</PostTemplate>
	</HTML>)}`
const markdownPipe = require('unified')()
	.use(require('remark-parse'))
	// Frontmatter
	.use(require('remark-frontmatter'))
	.use(require('remark-parse-yaml'))
	.use(() => (ast, file) => {
		visit(ast, 'yaml', item => {
			file.data.frontmatter = item.data.parsedValue
			file.data.frontmatter.dateShort = moment(file.data.frontmatter.date).format('YYYY-MM-DD')
			file.data.frontmatter.dateLong = moment(file.data.frontmatter.date).format('MMMM DD, YYYY')
		});
	})
	.use(() => (ast, file) => {
		let excerpt = ''
		visit(ast, 'text', item => {
			if (excerpt.length < 150) {
				excerpt += item.value + ' '
			}
		})

		file.data.frontmatter.excerpt = excerpt.substr(0, 150).trim()
	})
	// Render to JSX
	.use(require('remark-mdx'))
	.use(require('./mdx-ast-to-mdx-hast'))
	.use(require('./mdx-hast-to-jsx'))

const onFile = file => {
	if (path.sep === '\\') {
		file = file.replace(/\\/g, '/')
	}
	const ext = path.extname(file)
	let fname = file.replace(contentDirectory, 'posts/')
	if (ext === '.md') {
		const readFile = vfile.readSync(file)
		const wordCount = String(readFile.contents).split(' ').length

		markdownPipe.process(readFile, (err, mdxFile) => {
			if (err || !mdxFile) {
				console.error(report(mdxFile), err)
				return
			}
			if (mdxFile.data.frontmatter.draft) {
				console.log(report(mdxFile), '(skipped draft)')
				return
			}
			// Write out JS component
			const jsFile = file + '.js'
			fs.writeFileSync(jsFile, mdxFile.contents, 'utf8')

			// require() it and render templated content
			fname = fname.replace(ext, '')
			mdxFile.data.frontmatter.timeToRead = parseInt(wordCount / 300)
			delete require.cache[require.resolve(`../${file}.js`)]
			pageIndex[fname] = {
				slug: `/${fname.replace('/index', '')}`,
				component: require(`../${file}.js`).default,
				frontmatter: mdxFile.data.frontmatter,
			}
			fs.ensureFileSync(`public/${fname}.html`)
			fs.writeFileSync(`public/${fname}.html`, renderPost(pageIndex[fname]))

			console.log(report(mdxFile))
		})
	} else {
		fs.ensureFileSync(`public/${fname}`)
		fs.copySync(file, `public/${fname}`)
	}
}

module.exports = watchMode => new Promise(resolve => 
	chokidar
		.watch(contentDirectory, {
			ignored: ['**/*.swp', '**/*.js'],
			persistent: true
		})
		.on('add', onFile)
		.on('change', onFile)
		.on('ready', () => {
			if (!watchMode) {
				watcher.close();
			}
			resolve(pageIndex);
		})
)