import { h } from 'preact'
import { Helmet } from 'preact-helmet'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'

export const PostTemplate = ({ frontmatter, timeToRead, slug, children }) => (
  <CenterLayout
    title={<h1 className="title is-2">{frontmatter.title}</h1>}
    subtitle={(
      <span className="has-text-grey">
        <time dateTime={frontmatter.dateShort}>{frontmatter.dateLong}</time>
        {' · '}{timeToRead} min read
      </span>
    )}
    javascript={frontmatter.javascript}
    path={slug}
  >
    <Helmet title={frontmatter.title} defer={false} />

    <div className="content is-medium">
      {children}
    </div>
      
    <div className="has-text-centered">
      <Link href="#">Back to top</Link>{' / '}
      <Link href="/posts">View all posts</Link>
    </div>
  </CenterLayout>
)
