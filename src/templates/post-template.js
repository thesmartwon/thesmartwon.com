import { h, Fragment } from 'preact'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'

export const PostTemplate = ({ frontmatter, slug, children }) => (
  <CenterLayout
    title={<h1 className="title is-2">{frontmatter.title}</h1>}
    subtitle={(
      <span className="has-text-grey">
        <time dateTime={frontmatter.dateShort}>{frontmatter.dateLong}</time>
        {' · '}{frontmatter.timeToRead} min read
      </span>
    )}
    javascript={frontmatter.javascript}
    isFullscreen={frontmatter.isFullscreen}
    path={slug}
  >
    {frontmatter.isFullscreen ? children : (
      <Fragment>
        <div id="content" className="content is-medium">
          {children}
        </div>
          
        <div className="has-text-centered">
          <Link href="#">Back to top</Link>{' / '}
          <Link href="/posts">View all posts</Link>
        </div>
      </Fragment>
    )}

  </CenterLayout>
)
