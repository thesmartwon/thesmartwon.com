// Hack to hijack all require()s and babel them
require('@babel/register')({
  ignore: [/node_modules/],
  plugins: [['@babel/plugin-transform-react-jsx', { 'pragma':'h' }]],
  presets: ['@babel/preset-env']
})
require.extensions['.scss'] = () => {}
require.extensions['.png'] = () => {}
require.extensions['.jpg'] = () => {}
require.extensions['.gif'] = () => {}
require.extensions['.svg'] = () => {}

module.exports = {
  ...require('./page_templates')
}
