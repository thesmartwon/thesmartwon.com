import { h } from 'preact'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'
import ArticlePreview from '../components/article-preview'
import sourcedPages from '../generated/index'

const posts = Object.entries(sourcedPages)
  .filter(([_, props]) => props.timeToRead)
  .map(([path, props]) => ({
    path,
    ...props
  }))

export const title = 'The Smart Blog'
export default ({ path }) => (
  <CenterLayout
    title={
      <h1 className="title is-2">
        You've found my blog
      </h1>
    }
    subtitle={
      <h2 className="subtitle is-4">
        Relax and have a good read!
        <svg className="mug" x="0px" y="0px" width="100%" height="1.5rem" viewBox="0 0 49.284 49.284">
        <g>
          <g>
            <path d="M36.591,39.606c8.158-0.328,11.784-4.041,11.784-8.585c0-3.947-2.739-7.268-8.806-8.288
              c0.027-1.468,0.029-2.884,0.029-4.206H0.909c0,8.644,0.01,21.2,7.776,27.197c-4.713,0.361-7.776,0.935-7.776,1.581
              c0,1.094,8.661,1.979,19.345,1.979s19.344-0.885,19.344-1.979c0-0.646-3.063-1.221-7.775-1.581
              C33.931,44.097,35.472,41.991,36.591,39.606z M39.425,26.492c3.404,0.789,4.012,2.458,3.973,4.619
              c-0.043,2.454-0.754,4.115-5.402,4.687C38.837,32.811,39.235,29.604,39.425,26.492z M5.579,21.527h6.048
              c-2.711,8,1.863,20.658,1.862,20.658C3.601,34.606,5.579,21.527,5.579,21.527z"/>
            <path d="M23.419,13.313c0.769-6.968,16.153-3.482,12.947-12.528c-0.49-1.383-2.705-0.787-2.21,0.609
              C35.562,5.36,30.22,5.843,27.5,6.752c-3.267,1.092-5.971,2.918-6.373,6.561C20.965,14.781,23.259,14.765,23.419,13.313z"/>
            <path d="M34.339,8.437c-3,0.707-5.742,1.992-6.677,5.146c-0.421,1.421,1.791,2.023,2.21,0.609
              c1.032-3.483,5.607-3.541,8.528-4.389c3.137-0.911,4.932-3.084,4.501-6.42c-0.188-1.445-2.48-1.463-2.292,0
              C41.13,7.417,37.418,7.71,34.339,8.437z"/>
          </g>
        </g>
        </svg>
      </h2>
    }
    path={path}
    footer={
      <Link href="/posts">
        View all posts
      </Link>
    }
  >
    <ul className="article-list">
      {Object.entries(posts)
        .sort(([_, p1], [__, p2]) => p2.dateShort.localeCompare(p1.dateShort))
        .slice(0, 5)
        .map(([slug, post]) =>
          <ArticlePreview path={slug} {...post} />
        )}
    </ul>
  </CenterLayout>
)
