import { h } from 'preact'
import { Level2TopicTemplate } from '../../../templates/topic'

export const title = 'Work posts'
export default ({ path, posts }) => (
  <Level2TopicTemplate
    path={path}
    posts={posts}
    subtitle="Work sucks less than school."
  />
)