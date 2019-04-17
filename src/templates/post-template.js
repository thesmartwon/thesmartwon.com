import React from 'react'
import Counter from '../components/counter'
import { Helmet } from 'react-helmet'
import '../pages/index.scss'

export default ({ pageContext }) => {
  return (
    <main>
      <Helmet title={pageContext.title} defer={false} />
      {JSON.stringify(pageContext)}
      <button onClick={() => console.log(pageContext)}>prove it</button>
      <Counter />
    </main>
  )
}
