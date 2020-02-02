import { h } from 'preact'
import Mug from './cup-of-hot-chocolate.svg'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'
import ArticlePreview from '../components/article-preview'

export const title = 'The Smart Blog'
export default ({ path, posts }) => (
  <CenterLayout
    title={(
      <h1 className="title is-2">
        You've found my blog
      </h1>
    )}
    subtitle={(
      <h2 className="subtitle is-4 has-text-grey-light">
        {'Relax and have a good read! '}
        <img
          src={Mug}
          alt="Mug"
          style={{height: '1.5rem'}} />
      </h2>
    )}
    path={path}
  >
    <ul className="content is-medium has-text-centered">
      {posts.map(post => ArticlePreview(post))}
      <div>
        <Link href="/posts">View all posts</Link>
      </div>
    </ul>
  </CenterLayout>
)