const path = require('path')
const fs = require('fs-extra')
const mime = require('mime')
// Hack to hijack all require()s and babel them
require('@babel/register')({
  ignore: [/node_modules/],
  plugins: [['@babel/plugin-transform-react-jsx', { 'pragma':'h' }]],
  presets: ['@babel/preset-env']
})

const urlLoader = mod => {
  const data = fs.readFileSync(mod.id)
  const mimeType = mime.getType(mod.id) || ''
  
  if (data.length < 10240) {
    // Inline
    mod.exports = `data:${mimeType};base64,${data.toString('base64')}`
  } else {
    mod.exports = path.basename(mod.id)
    // Copy to dist
    const srcPath = mod.id.replace(/.*src[\/\\]pages/, '')
    fs.ensureFileSync(`public/${srcPath}`)
    fs.copySync(mod.id, `public/${srcPath}`)
  }
}

require.extensions['.png'] = urlLoader
require.extensions['.jpg'] = urlLoader
require.extensions['.svg'] = urlLoader
require.extensions['.gif'] = () => {}

// Render the pages!
require('./render-pages');
