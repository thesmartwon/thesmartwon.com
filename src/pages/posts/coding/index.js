import { h } from 'preact'
import { Level2TopicTemplate } from '../../../templates/topic'

export const title = 'Coding posts'
export default ({ path, posts }) => (
  <Level2TopicTemplate
    path={path}
    posts={posts}
    subtitle="Beep boop. Coding is like Legos. Move one lego and it all falls apart. But if you leave it alone, it's magnificant."
  />
)