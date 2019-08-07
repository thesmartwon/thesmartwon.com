require('./scripts/hijack-requires')

const { src, dest, series } = require('gulp');
const fs = require('fs-extra');
const sass = require('node-sass');
const crypto = require('crypto');
const through2 = require('through2');
const { markdownPipe, renderPost } = require('./scripts/render-content')

let posts = {}
let cssFile

function clean(cb) {
	fs.remove('public', cb)
}

function copyContent() {
	return src([
		'src/content/**/*',
		'!src/content/**/*.md',
		'!src/content/**/*.js',
	])
		.pipe(dest('public/posts'));
}

function renderContent() {
	return src('posts/**/*.md')
		.pipe(through2.obj(function (chunk, _, cb2) {
			const destFile = chunk.history[0].replace(/\\/g, '/') + '.js'
			const vfile = markdownPipe.processSync(chunk._contents)
			fs.writeFileSync(destFile, vfile.contents)
			console.log('Compiled', chunk.history[0].replace(chunk._base, ''))

			if (vfile.data.frontmatter.draft) {
				console.log('Skipping', vfile.data.frontmatter.title, '(draft)')
			}

			delete require.cache[require.resolve(destFile)]
			const post = {
				slug: `/${destFile.replace('/index', '')}`,
				component: require(destFile).default,
				frontmatter: vfile.data.frontmatter,
			}

			chunk.contents = Buffer.from(renderPost(post))
			chunk.history.push(chunk.history[0].replace('.md', '.html'))
			console.log('Rendered', post.frontmatter.title)

			cb2(null, chunk)
		}))
		.pipe(dest('public/posts'))
}

function css(cb) {
	const css = sass.renderSync({
		file: 'src/main.scss',
		outputStyle: 'compressed',
		outFile: 'public/main.css',
		sourceMap: true,
	})
	console.log(`Compiled ${css.stats.includedFiles.length} SASS files`)
	const hash = crypto.createHash('md5').update(css.css).digest('hex')
	cssFile = `public/main-${hash.substr(0, 5)}.css`
	fs.ensureDirSync('public')
	fs.writeFileSync(cssFile, css.css)
	console.log(`Wrote ${cssFile}`)
	cb();
}

module.exports = {
	css,
	clean,
	copyContent,
	renderContent,
}