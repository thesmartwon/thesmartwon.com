import { h } from 'preact'
import Link from './link'
import { pluralize } from '../helpers/pluralize'

export default function ArticlePreview({
  title,
  path,
  timeToRead,
  dateShort,
  dateLong,
  excerpt,
  showPreview = true,
  showTopic = true
}) {
  const topic = path.split('/')[2]

  return (
    <li key={path} style={{paddingBottom: '3rem'}}>
      <div className="media">
        <div className="media-content has-text-centered is-clipped">
          <Link href={path} className={`title article-title ${showPreview ? 'is-3' : 'is-4'}`}>
            {title}
          </Link>
          <div className="tags has-addons is-centered">
            {showTopic
              ? <Link className="tag is-rounded is-warning" href={`/posts/${topic}/`}>
                  {topic}
                </Link>
              : <span className="tag is-rounded is-warning">
                  {`${timeToRead} ${pluralize('min', timeToRead)}`}
                </span>
            }
            <span className="tag is-rounded">
              <time dateTime={dateShort}>{dateLong}</time>
            </span>
          </div>
        </div>
      </div>
      {showPreview &&
        <article className="article-body">
          <p>{excerpt}</p>
        </article>
      }
    </li>
  )
}
