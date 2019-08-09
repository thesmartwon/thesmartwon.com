import { h } from 'preact'
import { TopicTemplate } from '../../../templates/topic-template'

export default ({ path, posts }) => {
  const topic = path.split('/')[2]

  return (
    <TopicTemplate 
      path={path}
      topic={topic}
      subtitle="Beep boop. Coding is like Legos. Move one lego and it all falls apart. But if you leave it alone, it's magnificant."
      posts={posts.filter(post => post.slug.indexOf(topic) >= 0)} />
  )
}