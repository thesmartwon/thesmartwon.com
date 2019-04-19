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
      allMarkdownRemark(filter: {fields: {slug: {ne: null}}},
                        sort: {order: DESC, fields: frontmatter___date},
                        limit: 15) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            dateShort: date(formatString: "YYYY-MM-DD")
            dateLong: date(formatString: "MMMM DD, YYYY")
          }
          excerpt
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
      <Helmet title="The Smart Won's Blog" defer={false} />
      <div className="content is-medium has-text-centered">
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.fields.slug} style={{padding: '1.5rem'}}>
            <div className="media">
              <div className="media-content has-text-centered no-overflow">
                <Link href={node.fields.slug} className="title article-title is-3">{node.frontmatter.title}</Link>
                <div className="tags has-addons level-item">
                  <span className="tag is-rounded is-warning">{node.fields.slug.split('/')[2]}</span>
                  <span className="tag is-rounded">
                    <time dateTime={node.frontmatter.dateShort}>{node.frontmatter.dateLong}</time>
                  </span>
                </div>
              </div>
            </div>
            <div className="article-body">
              <p>{node.excerpt}</p>
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
