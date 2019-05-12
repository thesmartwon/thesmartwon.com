import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import CenterLayout from '../layouts/center-layout'
import ArticlePreview from '../components/article-preview'
import { capitalize } from '../helpers/capitalize'


export default ({ data, pageContext }) => {
  const { topic } = pageContext

  return (
    <CenterLayout
      title={<h1 className="title is-2">{capitalize(topic)} Posts</h1>}
      subtitle={(
        <h2 className="subtitle is-4 has-text-grey-light">
          {{
            money: "Money is a tool, use it wisely",
            coding: "Beep boop, coding is fun",
            school: "School sucks",
            bikes: "Biking is fun"
          }[topic]}
        </h2>
      )}
      path={`/posts/${topic}`}
    >
      <Helmet title={`${capitalize(topic)} Posts`} defer={false} />
      <div className="content is-medium">
        {data.pages.nodes.map(node => ArticlePreview(node, true))}
      </div>
    </CenterLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostByTopic($glob: String!) {
    pages: allSitePage(filter: {context: {title: {ne: null}}, path: {glob: $glob}},
                        sort: {order: DESC, fields: context___date},
                        limit: 15) {
      nodes {
        path
        context {
          title
          dateShort: date(formatString: "YYYY-MM-DD")
          dateLong: date(formatString: "MMMM DD, YYYY")
          timeToRead
          excerpt
        }
      }
    }
  }
`
