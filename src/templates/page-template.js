import React from "react"
import Stateful from '../pages/page-3';

const Tags = ({ pageContext }) => {
  return (
    <div>
      {JSON.stringify(pageContext)}
      <button onClick={() => console.log(pageContext)}>prove it</button>
      <Stateful />
    </div>
  )
}

export default Tags