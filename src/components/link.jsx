import { h } from 'preact';

export default ({ href, className, children }) => (
  <a href={href} className={className}>{children}</a>
)