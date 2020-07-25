const browserSync = require('browser-sync').create()

function startServer(cb) {
	if (!browserSync.active) {
		browserSync.init({
			server: {
				baseDir: './dist',
				index: 'index.html',
				serveStaticOptions: {
					extensions: ['html']
				}
			},
			files: ['dist/**/*']
		})
	}
	cb()
}

module.exports = {
  startServer
}