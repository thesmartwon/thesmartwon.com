import { h } from 'preact'
import { TopicTemplate } from '../../../../templates/topic'

export const title = 'Canvas game engine posts'
export default ({ path, posts }) => {
	const topic = path.split('/').slice(2, 4).join('/')
	const filteredPosts = posts.filter(post => post.slug.includes(topic))

  return (
		<TopicTemplate 
			path={path}
			topic={topic}
			subtitle="Posts about a toy canvas game engine"
			posts={filteredPosts}
		>
		</TopicTemplate>
	)
}