const { css } = require('./css')
const { copy } = require('./copy')
const { source } = require('../html/source')
const { render } = require('../html/render')
const { clean } = require('../clean')

function build() {
  clean()
  copy()
  const cssFileNames = [css()]
  source()
  render({ cssFileNames })
  return cssFileNames
}

if (require.main === module) build()

module.exports = {
  build
}

