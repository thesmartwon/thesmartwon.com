import { h } from 'preact';
import Link from './link'
import { capitalize } from '../helpers/capitalize'

const crumbify = (word, crumbs) => {
  let path = ''
  for (let crumb of crumbs) {
    path += '/' + crumb;
    if (word === crumb)
      break
  }

  return {
    name: word.split('-').map(capitalize).join(' '),
    path: path
  }
}

export default props => {
  let crumbs = [{ name: 'Home', path: '/' }]
  crumbs = crumbs.concat(
    props.path.split('/')
      .filter(Boolean)
      .map(crumb => crumbify(crumb, crumbs))
  )
  crumbs[crumbs.length - 1].isActive = true
  
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
