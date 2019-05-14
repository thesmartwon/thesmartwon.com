import React from 'react'
import PropTypes from 'prop-types'

// This image gets used in *.js files
export default function Image({height, src, alt}) {
  return (
    <div className="has-text-centered" style={{height: `${height}px`}}>
      <img src={src} alt={alt} />
    </div>
  )
} 

Image.propTypes = {
  height: PropTypes.number.isRequired,
  src: PropTypes.isRequired,
  alt: PropTypes.string.isRequired,
}
