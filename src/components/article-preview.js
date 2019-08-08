import { h } from 'preact'
import Link from './link'

export default (post, showPreview = true) => {
  const { slug, frontmatter } = post
  const topic = slug.split('/')[2]

  return (
    <div key={slug} style={{paddingBottom: '3rem'}}>
      <div className="media">
        <div className="media-content has-text-centered is-clipped">
          <Link href={slug} className={`title article-title ${showPreview ? 'is-3' : 'is-4'}`}>
            {frontmatter.title}
          </Link>
          <div className="tags has-addons is-centered">
            {showPreview
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
      {showPreview && 
        <div className="article-body">
          <p>{frontmatter.excerpt}…</p>
        </div>
      }
    </div>
  )
}
