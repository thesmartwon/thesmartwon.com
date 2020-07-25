const { series } = require('gulp')
const { posts } = require('./posts')
const { rss } = require('./rss')
const { pages } = require('./pages')

const render = series(posts, rss, pages)

module.exports = {
  render
}