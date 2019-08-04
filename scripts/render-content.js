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
const moment = require('moment');
const { h } = require('preact')
const { HTML } = require('./html')
const { PostTemplate } = require('../src/templates/post-template')

const pageIndex = {}
const contentDirectory = 'src/content/'
const renderPost = post => {
	post.frontmatter.dateShort = moment(post.frontmatter.date).format("YYYY-MM-DD")
	post.frontmatter.dateLong = moment(post.frontmatter.date).format("MMMM DD, YYYY")
	return `<!DOCTYPE html>${render(
		<HTML>
			<PostTemplate
				frontmatter={post.frontmatter}
				slug={post.slug}
				timeToRead={parseInt(post.wordCount / 300)}
			>
				{h(post.component)}
			</PostTemplate>
		</HTML>)}`
}

const watcher = chokidar.watch(contentDirectory, {
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
		if (ext === '.md') {
			const readFile = vfile.readSync(file)
			const wordCount = String(readFile.contents).split(' ').length

			markdownPipe.process(readFile, (err, mdxFile) => {
				if (err || !mdxFile) {
					console.error(report(mdxFile), err)
					return
				}
				// Write out JS component
				const jsFile = file + '.js'
				fs.writeFileSync(jsFile, mdxFile.contents, 'utf8')

				// require() it and render templated content
				const fname = file.replace(contentDirectory, '').replace(ext, '')
				pageIndex[fname] = {
					slug: fname,
					component: require(`../${file}.js`).default,
					frontmatter: mdxFile.data.frontmatter,
					wordCount: wordCount
				}
				fs.ensureFileSync(`public/${fname}.html`)
				fs.writeFileSync(`public/${fname}.html`, renderPost(pageIndex[fname]))

				console.log(report(mdxFile))
			})
		} else {
			const fname = file.replace(contentDirectory, '')
			fs.ensureFileSync(`public/${fname}`)
			fs.copySync(file, `public/${fname}`)
		}
	})
	.on('ready', () => {
		console.log(pageIndex);
		watcher.close();
	})
