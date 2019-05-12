import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet'
import Mug from './cup-of-hot-chocolate.svg'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'
import ArticlePreview from '../components/article-preview'

export default () => {
  const data = useStaticQuery(
    graphql`
    {
      pages: allSitePage(filter: {context: {title: {ne: null}}},
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
  `)

  return (
    <CenterLayout
      title={(
        <h1 className="title is-2">
          You've found my blog
        </h1>
      )}
      subtitle={(
        <h2 className="subtitle is-4 has-text-grey-light">
          Relax and have a good read!<img src={Mug} alt="Mug" style={{paddingLeft: '1rem', height: '1.5rem'}} />
        </h2>
      )}
      path={'/'}
    >
      <Helmet title="The Smart Blog" defer={false} />
      <div className="content is-medium has-text-centered">
        {data.pages.nodes.map(ArticlePreview)}
        <div>
          <Link href="/posts">View all posts</Link>
        </div>
      </div>
    </CenterLayout>
  )
}
