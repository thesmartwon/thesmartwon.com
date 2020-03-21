import { h, Fragment } from 'preact'
import Breadcrumb from '../components/breadcrumb'

export default props => (
  <Fragment>
    <div className="container">
      <div className="column is-8 is-offset-2">
        {props.javascript && (
          <noscript key="noscript">
            Some things might not work because Javascript is disabled, but you aren't missing out on much.
          </noscript>)}
        <Breadcrumb path={props.path} />
        {!props.isFullscreen && (
          <Fragment>
            <div className="section titles-section">
              {props.title}
              {props.subtitle}
            </div>
            {props.children}
          </Fragment>
        )}
      </div>
    </div>
    {props.isFullscreen && props.children}
  </Fragment>
  
)
