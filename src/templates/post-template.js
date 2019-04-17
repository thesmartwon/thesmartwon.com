import React from "react"
import Counter from '../components/counter';
import {Helmet} from "react-helmet";

const Tags = ({ pageContext }) => {
  return (
    <main>
      <Helmet title={pageContext.title} defer={false} />
      {JSON.stringify(pageContext)}
      <button onClick={() => console.log(pageContext)}>prove it</button>
      <Counter />
    </main>
  )
}

export default Tags