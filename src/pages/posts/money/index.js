import { h } from 'preact'
import { Level2TopicTemplate } from '../../../templates/topic'

export const title = 'Money posts'
export default ({ path, posts }) => (
  <Level2TopicTemplate
    path={path}
    posts={posts}
    subtitle="Time is money, friend!"
  />
)