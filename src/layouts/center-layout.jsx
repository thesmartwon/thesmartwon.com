import { h, Fragment } from 'preact'
import Breadcrumb from '../components/breadcrumb'

export default ({
  title,
  subtitle,
  hasJavascript,
  isFullscreen,
  path,
  children
}) => (
  <Fragment>
    <div className="container">
      <div className="column is-8 is-offset-2">
        {hasJavascript && (
          <noscript key="noscript">
            Some things might not work because Javascript is disabled, but you aren't missing out on much.
          </noscript>)}
        <Breadcrumb path={path} />
        {!isFullscreen && (
          <Fragment>
            <div className="section titles-section">
              {title}
              {subtitle}
            </div>
            {children}
          </Fragment>
        )}
      </div>
    </div>
    {isFullscreen && children}
  </Fragment>
  
)
