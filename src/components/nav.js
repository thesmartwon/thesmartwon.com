import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './link'
import {capitalize} from '../helpers/capitalize'


export default () => {
  const data = useStaticQuery(
    graphql`
    {
      allSitePage {
        nodes {
          path
          context {
            title
          }
        }
      }
    }
    `
  )

  const groups = data.allSitePage.nodes
    .filter(node => node.path.indexOf('posts') !== -1)
    .reduce((acc, node) => {
      const group = node.path.split('/')[2];
      acc[group] = acc[group] || [];
      acc[group].push(node);
      return acc;
    }, {})
  console.log('groups', groups)
  return (
    <>
    {Object.entries(groups).map(([key, value]) => (
      <React.Fragment key={key}>
        <h3>{capitalize(key)}</h3>
        {value.map(v => <Link key={v.path} href={v.path}>{v.context.title}</Link>)}
      </React.Fragment>
    ))
    }
    </>
  )
}
