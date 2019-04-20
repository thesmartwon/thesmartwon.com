import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet'
import Mug from './cup-of-hot-chocolate.svg'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'
import './index.scss'


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
          Relax and have a good read!<img src={Mug} style={{paddingLeft: '.8rem'}}></img>
        </h2>
      )}
      path={'/'}
    >
      <Helmet title="The Smart Blog" defer={false} />
      <div className="content is-medium has-text-centered">
        {data.pages.nodes.map(node => (
          <div key={node.path} style={{padding: '1.5rem'}}>
            <div className="media">
              <div className="media-content has-text-centered no-overflow">
                <Link href={node.path} className="title article-title is-3">{node.context.title}</Link>
                <div className="tags has-addons level-item">
                  <span className="tag is-rounded is-warning">{node.path.split('/')[2]}</span>
                  <span className="tag is-rounded">
                    <time dateTime={node.context.dateShort}>{node.context.dateLong}</time>
                  </span>
                </div>
              </div>
            </div>
            <div className="article-body">
              <p>{node.context.excerpt}</p>
            </div>
          </div>
        ))}
        <div style={{marginTop: '3rem'}}>
          <Link href="posts">View all posts</Link>
        </div>
      </div>
    </CenterLayout>
  )
}
