import { h } from 'preact'
import { Level2TopicTemplate } from '../../../templates/topic'

export const title = 'School posts'
export default ({ path, posts }) => (
  <Level2TopicTemplate
    path={path}
    posts={posts}
    subtitle="School sucks."
  />
)