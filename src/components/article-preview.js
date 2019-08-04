import { h } from 'preact'
import Link from './link'

export default (node, showTime) => {
  const { path, context } = node
  const topic = path.split('/')[2]

  return (
    <div key={path} style={{paddingBottom: '3rem'}}>
      <div className="media">
        <div className="media-content has-text-centered is-clipped">
          <Link href={path} className={`title article-title ${context.excerpt ? 'is-3' : 'is-4'}`}>
            {context.title}
          </Link>
          <div className="tags has-addons is-centered">
            {showTime
              ? <span className="tag is-rounded is-warning">
                  {context.timeToRead} mins
                </span>
              : <Link className="tag is-rounded is-warning" href={`/posts/${topic}`}>
                  {topic}
                </Link>
            }
            <span className="tag is-rounded">
              <time dateTime={context.dateShort}>{context.dateLong}</time>
            </span>
          </div>
        </div>
      </div>
      {context.excerpt && 
        <div className="article-body">
          <p>{context.excerpt}</p>
        </div>
      }
      </div>
  )
}