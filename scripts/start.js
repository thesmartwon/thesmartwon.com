const { build } = require('./build')
const { copy } = require('./build/copy')
const { post, index, writeIndex } = require('./html/source')
const { render, esbuildConfigSSR } = require('./html/render')
const { serve, clients } = require('./serve')
const { walk } = require('./helpers')
const { watch } = require('chokidar')
const esbuild = require('esbuild')
const path = require('path')

function register(path, listener) {
  watch(path, { ignoreInitial: true }).on('all', listener)
}

const cssFileName = build()
console.log('watching for changes')
register('posts/**/*.{jpg,jpeg,gif,svg,png}', copy) // TODO: copy only what changes
register('posts/**/*.{md,js,jsx}', (ev, file) => {
  console.log('[watch]', ev, file)
  let dirname
  while (dirname = path.dirname(file)) {
    file = walk(dirname, { ext: '.md' })[0]
    if (file) {
      if (ev === 'change' || ev === 'add') {
        post(file)
      }
      else if (ev === 'unlink') {
        delete index[slugify(file)]
      }
      writeIndex()
      return
    }
  }
})
esbuild.build({
  ...esbuildConfigSSR,
  watch: {
    onRebuild(error) {
      if (error) {
        console.log(error)
        return
      }
      // TODO: find out way to render only changed post + pages
      render({ cssFileName })
      clients.forEach(res => res.write('data: update\n\n'))
      clients.length = 0
    },
  },
})
serve()

