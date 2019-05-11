import React from 'react';
import Link from './link'
import { capitalize } from '../helpers/capitalize'
import './breadcrumb.scss'


const crumbify = (word, crumbs, curPath) => {
  let path = ''
  for (var crumb of crumbs) {
    path += '/' + crumb;
    if (word === crumb)
      break
  }

  return {
    name: capitalize(word),
    path: path,
    isActive: path === curPath
  }
}

export default (props) => {
  let crumbs = props.path.split('/')
      .filter(p => p)
  crumbs = crumbs.map(crumb => crumbify(crumb, crumbs, props.path))
  crumbs.unshift({name: 'Home', path: '/', isActive: false})
  
  return (
    <nav className="breadcrumb is-marginless is-centered" aria-label="breadcrumbs">
      <ul>
        {crumbs.map(crumb => (
          <li key={crumb.name} className={crumb.isActive ? 'is-active' : ''}><Link href={crumb.path}>{crumb.name}</Link></li>
        ))}
      </ul>
    </nav>
  )
}
