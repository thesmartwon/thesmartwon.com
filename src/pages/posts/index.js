import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../../components/nav'
import CenterLayout from '../../layouts/center-layout';


export default () => (
  <CenterLayout
    title={<h1 className="title is-2">All Posts</h1>}
    subtitle={(
      <h2 className="subtitle is-4 has-text-grey-light">
        I hope something tickles your fancy
      </h2>
    )}
    path={'/posts'}
  >
    <Helmet title="The Smart Won's Posts" defer={false} />
    <div className="content is-medium">
      <Nav />
    </div>
  </CenterLayout>
)
