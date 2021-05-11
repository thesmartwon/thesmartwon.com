const { watch } = require('chokidar')
const { build } = require('./build')
const { css } = require('./build/css')
const { copy } = require('./build/copy')
const { post, index, writeIndex } = require('./html/source')
const { render, esbuildConfigSSR } = require('./html/render')
const { serve, clients } = require('./serve')
const esbuild = require('esbuild')

function register(path, listener) {
  watch(path, { ignoreInitial: true }).on('all', listener)
}

let cssFileNames = build()
console.log('watching for changes')
register('src/**/*.sass', css) // TODO: sass graph
register('posts/**/*.{jpg,jpeg,gif,svg,png}', copy) // TODO: copy only what changes
register('posts/**/*.md', (ev, file) => {
  console.log('[watch]', ev, file)
  if (ev === 'change' || ev === 'add') {
    post(file)
  }
  else if (ev === 'unlink') {
    delete index[slugify(file)]
  }
  writeIndex()
})
esbuild.build({
  ...esbuildConfigSSR,
  watch: {
    onRebuild(error, _res) {
      clients.forEach((res) => res.write('data: update\n\n'))
      clients.length = 0
      if (error) console.log(error)
      // TODO: find out way to render only changed post + pages
      render({ cssFileNames })
    },
  },
})
serve()

