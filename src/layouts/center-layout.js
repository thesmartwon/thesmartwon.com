import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from '../components/breadcrumb'
import './center-layout.scss'

export default function CenterLayout(props) {
  return (
    <div className="container">
      <div className="column is-8 is-offset-2">
        {props.javascript && (
          <noscript key="noscript">
            Some things might not work because Javascript is disabled, but you aren't missing out on much.
          </noscript>)}
        <Breadcrumb path={props.path} />
        <div className="section titles-section">
          {props.title}
          {props.subtitle}
        </div>
        {props.children}
      </div>
    </div>
  )
}

CenterLayout.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  javascript: PropTypes.bool,
  children: PropTypes.node,
  path: PropTypes.string
}

CenterLayout.defaultProps = {
  javascript: false
}
