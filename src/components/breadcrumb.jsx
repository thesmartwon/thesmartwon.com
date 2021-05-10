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

export default ({ path }) => {
  let crumbs = [{ text: 'Home', path: '/' }]
  const split = path.split('/')
    .filter(Boolean)
  if (split.length > 0) {
    split.reduce((acc, cur) => {
      crumbs.push({
        text: cur.split('-').map(capitalize).join(' '),
        path: `${acc}/${cur}`
      })

      return `${acc}/${cur}`
    }, '')
  }
  crumbs[crumbs.length - 1].isActive = true
  
  return (
    <nav className="breadcrumb is-marginless is-centered" aria-label="breadcrumbs">
      <ul>
        {crumbs.map(crumb => (
          <li key={crumb.text} className={crumb.isActive ? 'is-active' : ''}><Link href={crumb.path}>{crumb.text}</Link></li>
        ))}
      </ul>
    </nav>
  )
}
