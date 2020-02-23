const path = require('path')
const fs = require('fs-extra')
const mime = require('mime')
// Hack to hijack all require()s and babel them
require('@babel/register')({
  ignore: [/node_modules/],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }, ]
  ],
  presets: ['@babel/preset-env']
})

const urlLoader = (mod, noInline) => {
  const data = fs.readFileSync(mod.id)
  const mimeType = mime.getType(mod.id) || ''

  if (data.length < 10240 && !noInline) {
    // Inline
    mod.exports = `data:${mimeType};base64,${data.toString('base64')}`
  } else {
    mod.exports = path.basename(mod.id)
    // We *could* copy to dist, but our `copyContent` gulp task does that
    // The issue is we still should require() images and things in our MD
    // const destFile = mod.id
    //   .replace(/posts/, 'dist/posts')
    //   .replace(/src[\/\\]pages/, 'dist')
    // console.log('oy', destFile)
    // fs.ensureFileSync(destFile)
    // fs.copySync(mod.id, destFile)
  }
}

require.extensions['.png'] = urlLoader
require.extensions['.jpg'] = urlLoader
require.extensions['.svg'] = urlLoader
require.extensions['.gif'] = mod => urlLoader(mod, true)
