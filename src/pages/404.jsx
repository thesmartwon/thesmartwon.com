import { h, Fragment } from 'preact'

export const title = 'Error 404 (Not found)!!1'
export default () => (
  <Fragment>
    <p><b>404.</b> <ins>That’s an error.</ins></p>
    <p>The requested URL was not found on this server.  <ins>That’s all we know.</ins></p>
    <a href="/">Go Home, I guess...</a>
  </Fragment>
)
