import React from 'react'
import Link from './link'
import './article-preview.scss'

export default (node) => {
  const { path, context } = node
  const topic = path.split('/')[2]

  return (
    <div key={path} style={{paddingBottom: '3rem'}}>
      <div className="media">
        <div className="media-content has-text-centered no-overflow">
          <Link href={path} className={`title article-title ${context.excerpt ? 'is-3' : 'is-4'}`}>
            {context.title}
          </Link>
          <div className="tags has-addons level-item">
            {context.excerpt
              ? <Link className="tag is-rounded is-warning" href={`/posts/${topic}`}>
                  {topic}
                </Link>
              : <span className="tag is-rounded is-warning">
                  {context.timeToRead} mins
                </span>
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
