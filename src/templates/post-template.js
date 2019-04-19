import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import CenterLayout from '../layouts/center-layout'

export default ({ data }) => {
  const { frontmatter, html, timeToRead, fields } = data.markdownRemark

  return (
    <CenterLayout
      title={<h1 className="title is-2">{frontmatter.title}</h1>}
      subtitle={(
        <span className="has-text-grey">
          <time dateTime={frontmatter.dateShort}>{frontmatter.dateLong}</time>
        · {timeToRead} min read
        </span>
      )}
      javascript={frontmatter.javascript}
      path={fields.slug}
    >
      <Helmet title={frontmatter.title} defer={false} />
      <div className="content is-medium" dangerouslySetInnerHTML={{__html: html}} />
    </CenterLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      timeToRead
      frontmatter {
        title
        dateShort: date(formatString: "YYYY-MM-DD")
        dateLong: date(formatString: "MMMM DD, YYYY")
        javascript
      }
      fields {
        slug
      }
    }
  }
`