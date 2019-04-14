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
      Data: {JSON.stringify(data)}
      <button onClick={() => console.log(data)}>Click to log data</button>
    </div>
  )
}