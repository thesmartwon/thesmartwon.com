import { h, render } from 'preact'
import Router from 'preact-router'
import sourcedPages from './generated/index'
export { renderPage } from './templates/page'
export { renderPost } from './templates/post'

const posts = Object.entries(sourcedPages)
  .filter(([_, props]) => props.dateShort)
  .map(([path, props]) => ({
    path,
    ...props
  }))

export const App = () => (
  <Router>
    {Object.entries(sourcedPages).map(([slug, { Component, ...props }]) => {
      Component = Component().default
      return <Component path={slug} posts={posts} {...props} />
    })}
  </Router>
)

if (typeof document !== 'undefined') {
  render(<App />, document.getElementById('main'))
}

