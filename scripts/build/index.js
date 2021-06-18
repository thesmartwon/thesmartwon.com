const { css } = require('./css')
const { copy } = require('./copy')
const { source } = require('../html/source')
const { render } = require('../html/render')
const { clean } = require('../clean')

function build() {
  clean()
  copy()
  const cssFileName = css()
  source()
  render({ cssFileName })
  return cssFileName
}

if (require.main === module) build()

module.exports = {
  build
}

