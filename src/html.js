import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  // console.log(props.path);
  // console.log('html headComponents', JSON.stringify(props.headComponents));
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* https://varvy.com/pagespeed/render-blocking-css.html */}
        {process.env.NODE_ENV === 'development' ? props.headComponents : props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript">
          Some things might not work because Javascript is disabled, but you aren't missing out on much.
        </noscript>
        <div
          key="body"
          id="b"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {process.env.NODE_ENV === 'development' ? props.postBodyComponents : props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
