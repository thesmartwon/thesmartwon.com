import React from 'react';

export default ({ href, className, children }) => (
  <a href={href} className={className}>{children}</a>
)