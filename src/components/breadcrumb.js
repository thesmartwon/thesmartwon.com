import React from 'react';
import Link from './link'
import {capitalize} from '../helpers/capitalize'

const crumbify = (word, crumbs) => {
  console.log('crumbify', word, crumbs)
  let path = ''
  for (var crumb of crumbs) {
    path += '/' + crumb;
    if (word === crumb)
      break
  }

  return {
    name: capitalize(word),
    path: path,
    isActive: path === window.location.pathname
  }
}

export default () => {
  let crumbs = window.location.pathname.split('/')
      .filter(p => p)
  crumbs = crumbs.map(crumb => crumbify(crumb, crumbs))
  crumbs.unshift({name: 'Home', path: '/', isActive: false})
  
  return (
		<section className="section is-paddingless-horizontal">
			<div className="container">
				<nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            {crumbs.map(crumb => (
                <li key={crumb.name} className={crumb.isActive ? 'is-active' : ''}><Link href={crumb.path}>{crumb.name}</Link></li>
            ))}
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