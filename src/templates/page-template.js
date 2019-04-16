import React from "react"
import Counter from '../components/counter';

const Tags = ({ pageContext }) => {
  return (
    <main>
      {JSON.stringify(pageContext)}
      <button onClick={() => console.log(pageContext)}>prove it</button>
      <Counter />
    </main>
  )
}

export default Tags