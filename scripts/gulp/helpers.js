const crypto = require('crypto')

const paths = {
	postAssets: {
		src: [
			'posts/**/*',
			'!posts/**/*.md',
			'!posts/**/*.js',
		],
		dest: 'dist/posts'
	},
	staticAssets: {
		src: [
			'src/pages/*',
			'src/pages/**/*',
			'!src/pages/*.js',
			'!src/pages/**/*.js',
			'static/*',
		],
		dest: 'dist'
	},
	sass: {
		src: 'src/main.scss',
		dest: 'dist'
	},
	js: {
		src: [
			'posts/**/*.js',
			'!posts/**/*.md.js'
		],
		dest: 'dist/posts'
	},
	posts: {
		src: 'posts/**/*.md',
		dest: 'dist/posts'
	},
	pages: {
		src: 'src/pages/**/*.js',
		dest: 'dist'
	},
	render: {
		src: [
			'src/**/*.js',
			'!src/pages/**/*.js'
		]
	}
}

const slugify = chunk => chunk.history[0]
	.replace(chunk._base, '/posts')
	.replace(/\\/g, '/')
	.replace('/index', '')
	.replace('.md', '')
	.replace('.js', '')

const getHash = string => {
	if (process.env.NODE_ENV === 'production') {
		const hash = crypto.createHash('md5').update(string).digest('hex')
		return hash.substr(0, 5)
	}

	return 'dev'
}

module.exports = {
  paths,
  slugify,
  getHash
}