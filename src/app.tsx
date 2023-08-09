import { render } from 'preact'
import Router from 'preact-router'
import generated from './generated/index'
export { generated }
export { renderPage } from './templates/page'
export { renderPost } from './templates/post'
import './app.css'

export const App = () => (
  <Router>
    {Object.entries(generated).map(([slug, { Component, ...props }]) => {
      Component = Component().default
      return <Component path={slug} {...props} />
    })}
  </Router>
)

