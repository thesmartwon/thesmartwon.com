import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(
    graphql`
    {
      allSitePage {
        nodes {
          path
        }
      }
    }
    `
  )
  return (
    <div>
      Paths: {JSON.stringify(data)}
    </div>
  )
}