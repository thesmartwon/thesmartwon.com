import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './link'

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
  
  return (
		<section class="section is-paddingless-horizontal">
			<div class="container">
				<nav class="breadcrumb" aria-label="breadcrumbs">
					<ul>
						<li><Link>Home</Link></li>
					</ul>
				</nav>
			</div>
            {/* <ul>
        {Object.entries(groups).map(([group, links]) => (
          <React.Fragment key={group}>
            <h2>{group}</h2>
            {links.map(link =>
              <li key={link.path}><Link href={link.path}>{link.context.title}</Link></li>
            )}
          </React.Fragment>
        ))}
      </ul> */}
		</section>
  )
}