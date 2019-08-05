import { h, Fragment } from 'preact'
import CenterLayout from '../../layouts/center-layout';
import Link from '../../components/link'
import { capitalize } from '../../helpers/capitalize'
import ArticlePreview from '../../components/article-preview'

// Group nodes by topic (school, money, bikes, etc...)
const getGroups = pages => pages.reduce((acc, page) => {
    const group = page.slug.split('/')[1];
    acc[group] = acc[group] || [];
    acc[group].push(page);
    return acc;
  }, {})

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

export const title = 'The Smart Posts'
export default ({ path, pages }) => {
  const groups = getGroups(pages)
  const split = splitGroups(groups, 2)

  return (
    <CenterLayout
      title={<h1 className="title is-2">All Posts</h1>}
      subtitle={(
        <h2 className="subtitle is-4 has-text-grey-light">
          I hope something tickles your fancy
        </h2>
      )}
      path={path}
    >
      <div className="content is-medium">
        <div className="columns">
          {split.map(col => (
            <div key={col[0][0]} className="column has-text-centered">
              {col.map(group => (
                <Fragment key={group[0]}>
                  <h3><Link className="title" href={`/posts/${group[0]}`}>{capitalize(group[0])}</Link></h3>
                  {group[1].map(node => ArticlePreview(node, false))}
                </Fragment>))}
            </div>
          ))}
        </div>
      </div>
    </CenterLayout>
  )
}
