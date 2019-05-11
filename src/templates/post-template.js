import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'

export default function PostTemplate({ data, children }) {
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
      {children
          ? <div className="content is-medium">{children}</div>
          : <div className="content is-medium" dangerouslySetInnerHTML={{__html: html}} />
      }
      <div className="has-text-centered">
        <Link href="#">Back to top</Link>{' / '}
        <Link href="/posts">View all posts</Link>
      </div>
    </CenterLayout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      timeToRead: PropTypes.number.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        dateShort: PropTypes.string,
        dateLong: PropTypes.string,
        javascript: PropTypes.bool
      }).isRequired,
      fields: PropTypes.shape({slug: PropTypes.string}).isRequired
    }).isRequired
  }).isRequired
};

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
