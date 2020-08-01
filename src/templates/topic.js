import { h } from 'preact'
import CenterLayout from '../layouts/center-layout'
import ArticlePreview from '../components/article-preview'
import { capitalize } from '../helpers/capitalize'

export const TopicTemplate = ({ path, topic, subtitle, posts }) => (
  <CenterLayout
    title={<h1 className="title is-2">{capitalize(topic)} Posts</h1>}
    subtitle={(
      <h2 className="subtitle is-4">
        {subtitle}
      </h2>
    )}
    path={path}
  >
    <div className="content is-medium has-text-centered">
      <ul className="article-list">
        {posts.map(post => ArticlePreview(post, true, false))}
      </ul>
    </div>
  </CenterLayout>
)

export const Level2TopicTemplate = ({ path, posts, subtitle }) => {
  const topic = path.split('/')[2]

  return (
    <TopicTemplate 
      path={path}
      topic={topic}
      subtitle={subtitle}
      posts={posts.filter(post => post.slug.includes(topic))}
    />
  )
}
