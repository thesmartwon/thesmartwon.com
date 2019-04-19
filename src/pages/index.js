import React from 'react'
import { Helmet } from 'react-helmet'
import Mug from './cup-of-hot-chocolate.svg'
import CenterLayout from '../layouts/center-layout'
import Link from '../components/link'

export default () => (
  <CenterLayout
    title={(
      <h1 className="title is-2">
        You've found my blog
      </h1>
    )}
    subtitle={(
      <div className="container">
        <h2 className="subtitle is-4 has-text-grey-light">
          Relax and have a good read!<img src={Mug} style={{paddingLeft: '.8rem'}}></img>
        </h2>
      </div>
    )}
    path={'/'}
  >
    <Helmet title="The Smart Won's Blog" defer={false} />
    <div className="content is-medium">
      <Link href="posts">View all posts</Link>
    </div>
  </CenterLayout>
)
