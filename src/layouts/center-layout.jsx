import { h, Fragment } from 'preact'
import Breadcrumb from '../components/breadcrumb'

export default ({
  title,
  subtitle,
  hasJavascript,
  isFullscreen,
  path,
  children,
  footer
}) => (
  <Fragment>
    <header>
      <Breadcrumb path={path} />
    </header>
    <div className="page-content">
      {hasJavascript && (
        <noscript key="noscript">
          Interactive page elements might not work because Javascript is disabled
        </noscript>)}
      {!isFullscreen && (
        <Fragment>
          <div className="section titles-section">
            {title}
            {subtitle}
          </div>
          <main>
            {children}
          </main>
        </Fragment>
      )}
    </div>
    {footer &&
      <footer>
        {footer}
      </footer>
    }
    {isFullscreen && children}
  </Fragment>
  
)
