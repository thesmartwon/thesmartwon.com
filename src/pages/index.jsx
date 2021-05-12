import { h } from 'preact'
import Mug from './cup-of-hot-chocolate.svg'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'
import ArticlePreview from '../components/article-preview'
import sourcedPages from '../generated/index'

const posts = Object.entries(sourcedPages)
  .filter(([_, props]) => props.timeToRead)
  .map(([path, props]) => ({
    path,
    ...props
  }))

export const title = 'The Smart Blog'
export default ({ path }) => (
  <CenterLayout
    title={
      <h1 className="title is-2">
        You've found my blog
      </h1>
    }
    subtitle={
      <h2 className="subtitle is-4">
        {'Relax and have a good read! '}
        <img
          src={Mug}
          alt="Mug"
          style={{ height: '1.5rem' }} />
      </h2>
    }
    path={path}
  >
    <div className="content is-medium has-text-centered">
      <ul className="article-list">
        {Object.entries(posts)
          .sort(([_, p1], [__, p2]) => p2.dateShort.localeCompare(p1.dateShort))
          .slice(0, 5)
          .map(([slug, post]) =>
            <ArticlePreview path={slug} {...post} />
          )}
      </ul>
      <Link href="/posts">View all posts</Link>
    </div>
  </CenterLayout>
)
