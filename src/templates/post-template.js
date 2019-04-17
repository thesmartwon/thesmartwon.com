import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import '../pages/index.scss'

export default ({ pageContext, data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <>
      <Nav />
      <main>
        <Helmet title={pageContext.title} defer={false} />
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
        {frontmatter.javascript && (
          <noscript key="noscript">
            Some things might not work because Javascript is disabled, but you aren't missing out on much.
          </noscript>)}
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        javascript
      }
    }
  }
`