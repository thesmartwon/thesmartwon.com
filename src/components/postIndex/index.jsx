import { h } from 'preact'
import CenterLayout from '../../layouts/center-layout'
import ArticlePreview from '../article-preview'
import sourcedPages from '../../generated/index'

export default ({ path }) => {
  const { title, subtitle } = sourcedPages[path]
  return (
    <CenterLayout
      title={
        <h1 className="title is-2">
          {title}
        </h1>
      }
      subtitle={
        <h2 className="subtitle is-4">
          {subtitle}
        </h2>
      }
      path={path}
    >
      <div className="content is-medium has-text-centered">
        <ul className="article-list">
          {Object.entries(sourcedPages)
            .filter(([slug, props]) => slug.startsWith(path) && props.timeToRead)
            .sort(([_, p1], [__, p2]) => p2.dateShort.localeCompare(p1.dateShort))
            .map(([slug, post]) =>
              <ArticlePreview path={slug} {...post} />
            )}
        </ul>
      </div>
    </CenterLayout>
  )
}
