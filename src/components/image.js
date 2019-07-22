import { h } from 'preact'

// This image gets used in *.js files
export default function Image({height, src, alt}) {
  return (
    <div className="has-text-centered" style={{height: `${height}px`}}>
      <img src={src} alt={alt} />
    </div>
  )
}
