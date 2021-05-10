const { css } = require('./css')
const { copy } = require('./copy')
const { source } = require('../html/source')
const { render } = require('../html/render')

require('../clean')
copy()
const cssFileNames = [css()]
source()
render({ cssFileNames })

