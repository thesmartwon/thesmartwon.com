import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby';
import CenterLayout from '../../layouts/center-layout';
import Link from '../../components/link'
import { capitalize } from '../../helpers/capitalize'


// Group nodes by topic (school, money, bikes, etc...)
const getGroups = nodes => {
  return nodes.reduce((acc, node) => {
      const group = node.fields.slug.split('/')[2];
      acc[group] = acc[group] || [];
      acc[group].push(node);
      return acc;
    }, {})
}
// Split groups into num columns
const splitGroups = (groups, num) => {
  const res = []
  const entries = Object.entries(groups)
  
  for (let i = 0; i < entries.length; i++) {
    let group = res[i % num] ? res[i % num] : []
    group.push(entries[i])
    res[i % num] = group
  }

  return res
}

export default () => {
  const data = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(filter: {fields: {slug: {ne: null}}}) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const groups = getGroups(data.allMarkdownRemark.nodes)
  const split = splitGroups(groups, 2)

  return (
    <CenterLayout
      title={<h1 className="title is-2">All Posts</h1>}
      subtitle={(
        <h2 className="subtitle is-4 has-text-grey-light">
          I hope something tickles your fancy
        </h2>
      )}
      path={'/posts'}
    >
      <Helmet title="The Smart Won's Posts" defer={false} />
      <div className="content is-medium">
        <div className="columns">
          {split.map(col => (
            <div key={col[0][0]} className="column">
              {col.map(group => (
                <React.Fragment key={group[0]}>
                  <h3>{capitalize(group[0])}</h3>
                  {group[1].map(v => <Link key={v.fields.slug} href={v.fields.slug}>{v.frontmatter.title}</Link>)}
                </React.Fragment>))}
            </div>
          ))}
        </div>
      </div>
    </CenterLayout>
  )
}