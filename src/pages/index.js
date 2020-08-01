import { h } from 'preact'
import Mug from './cup-of-hot-chocolate.svg'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'
import ArticlePreview from '../components/article-preview'

export const title = 'The Smart Blog'
export default ({ path, posts }) => (
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
        {posts.slice(0, 5).map(post => ArticlePreview(post))}
      </ul>
      <Link href="/posts">View all posts</Link>
    </div>
  </CenterLayout>
)