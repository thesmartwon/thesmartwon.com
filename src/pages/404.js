import React from "react"
import { Helmet } from 'react-helmet'


export default () => (
  <>
    <Helmet title="Page Not Found!!1" defer={false} />
    <a href="/">Go Home, I guess...</a>
    <p><b>404.</b> <ins>That’s an error.</ins></p>
    <p>The requested URL was not found on this server.  <ins>That’s all we know.</ins></p>
  </>
)
