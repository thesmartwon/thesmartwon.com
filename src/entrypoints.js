const path = require('path');
const glob = require('glob');

module.exports = {
	entrypoints: glob
		.sync(`${path.resolve(__dirname, 'pages')}/**/*.js`)
		.reduce((acc, file) => {
			const slug = file.replace(/.*pages\//, '').replace('/index', '').replace('.js', '');
			acc[slug || 'index'] = file.replace(/.*src\//, './src/');
			return acc;
		}, {})
}
