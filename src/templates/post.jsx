import { h, Fragment } from 'preact'
import render from 'preact-render-to-string'
import { HTML } from './html'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'

const PostTemplate = ({
  title,
  dateShort,
  dateLong,
  timeToRead,
  path,
  children,
  hasJavascript,
  isFullscreen
}) => (
  <CenterLayout
    title={<h1 className="title is-2">{title}</h1>}
    subtitle={
      <span className="has-text-grey">
        <time dateTime={dateShort}>{dateLong}</time>
        {' · '}{timeToRead} min read
      </span>
    }
    hasJavascript={hasJavascript}
    isFullscreen={isFullscreen}
    path={path}
  >
    {isFullscreen ? children :
      <Fragment>
        <div id="content" className="content is-medium">
          {children}
        </div>

        <div className="has-text-centered">
          <Link href="#">Back to top</Link>{' / '}
          <Link href="/posts/">View all posts</Link>
        </div>
      </Fragment>
    }
  </CenterLayout>
)

export const renderPost = ({
  path,
  title,
  excerpt,
  cssFileNames,
  jsFileNames,
  dateShort,
  dateLong,
  timeToRead,
  isFullscreen,
  children
}) => '<!DOCTYPE html>\n' + render(
	<HTML
    title={title}
    excerpt={excerpt}
		cssFileNames={cssFileNames}
		jsFileNames={jsFileNames}
  >
		<PostTemplate
			path={path}
			title={title}
      dateShort={dateShort}
      dateLong={dateLong}
      timeToRead={timeToRead}
      excerpt={excerpt}
      hasJavascript={jsFileNames}
      isFullscreen={isFullscreen}
		>
      {children}
		</PostTemplate>
	</HTML>)
