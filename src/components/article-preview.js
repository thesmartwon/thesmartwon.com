import { h } from 'preact'
import Link from './link'

export default (page, showReadTime) => {
  const { slug, frontmatter, excerpt } = page
  const topic = slug.split('/')[2]

  return (
    <div key={slug} style={{paddingBottom: '3rem'}}>
      <div className="media">
        <div className="media-content has-text-centered is-clipped">
          <Link href={slug} className={`title article-title ${excerpt ? 'is-3' : 'is-4'}`}>
            {frontmatter.title}
          </Link>
          <div className="tags has-addons is-centered">
            {showReadTime
              ? <span className="tag is-rounded is-warning">
                  {frontmatter.timeToRead} mins
                </span>
              : <Link className="tag is-rounded is-warning" href={`/posts/${topic}`}>
                  {topic}
                </Link>
            }
            <span className="tag is-rounded">
              <time dateTime={frontmatter.dateShort}>{frontmatter.dateLong}</time>
            </span>
          </div>
        </div>
      </div>
      {excerpt && 
        <div className="article-body">
          <p>{excerpt}…</p>
        </div>
      }
      </div>
  )
}
