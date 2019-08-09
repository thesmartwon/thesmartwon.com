import { h } from 'preact'
import { TopicTemplate } from '../../../templates/topic-template'

export default ({ path, posts }) => {
  const topic = path.split('/')[2]

  return (
    <TopicTemplate 
      path={path}
      topic={topic}
      subtitle="School sucks."
      posts={posts.filter(post => post.slug.indexOf(topic) >= 0)} />
  )
}