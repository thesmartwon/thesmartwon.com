import { h } from 'preact'
import { Level2TopicTemplate } from '../../../templates/topic'

export const title = 'Bike posts'
export default ({ path, posts }) => (
  <Level2TopicTemplate
    path={path}
    posts={posts}
    subtitle="Bikes are fun. Biking is fun."
  />
)