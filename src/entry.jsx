import { h, render } from 'preact'
import Router from 'preact-router'
import sourcedPages from './generated/index'
export { renderPage } from './templates/page'
export { renderPost } from './templates/post'

export const App = () => (
  <Router>
    {Object.entries(sourcedPages).map(([slug, { Component, ...props }]) => {
      Component = Component().default
      return <Component path={slug} {...props} />
    })}
  </Router>
)

if (typeof document !== 'undefined') {
  render(<App />, document.getElementById('main'))
}

