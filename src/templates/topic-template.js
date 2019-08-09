import { h } from 'preact'
import CenterLayout from '../layouts/center-layout'
import ArticlePreview from '../components/article-preview'
import { capitalize } from '../helpers/capitalize'

export const TopicTemplate = ({ path, topic, subtitle, posts, children }) => (
  <CenterLayout
    title={<h1 className="title is-2">{capitalize(topic)} Posts</h1>}
    subtitle={(
      <h2 className="subtitle is-4 has-text-grey-light">
        {subtitle}
      </h2>
    )}
    path={path}
  >
    <div className="content is-medium">
      {children}
      {posts.map(post => ArticlePreview(post, true, false))}
    </div>
  </CenterLayout>
)
