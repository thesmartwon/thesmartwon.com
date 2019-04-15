import React from "react"
import Stateful from '../pages/page-3';

const Tags = ({ pageContext }) => {
  return (
    <div>
      {JSON.stringify(pageContext)}
      <Stateful />
    </div>
  )
}

export default Tags