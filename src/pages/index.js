import { h } from 'preact'
import { Helmet } from 'preact-helmet'
import Mug from './favicon.jpg'
// import Mug from './cup-of-hot-chocolate.svg'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'
import ArticlePreview from '../components/article-preview'

console.log('mug is', Mug)
export default () => {
  const data = undefined;

  return (
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
      path={'/'}
    >
      <Helmet title="The Smart Blog" defer={false} />
      <div className="content is-medium has-text-centered">
        {data && data.pages.nodes.map(node => ArticlePreview(node, false))}
        <div>
          <Link href="/posts">View all posts</Link>
        </div>
      </div>
    </CenterLayout>
  )
}
