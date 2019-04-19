import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Nav from '../components/nav'
// import './debug.css';
import './index.scss'
import 'bulma'
import Mug from './cup-of-hot-chocolate.svg'

export default () => (
  <section className="section is-paddingless-horizontal" style={{paddingTop: 0}}>
    <div className="container grid" style={{maxWidth: '1024px'}}>
      <Breadcrumb />
      <div className="section is-paddingless-horizontal">
        <h1 className="title is-2">
          You've found my blog
        </h1>
        <div className="container">
          <h2 className="subtitle is-4 has-text-grey-light">
            Relax and have a good read!<img src={Mug} style={{paddingLeft: '.8rem'}}></img>
          </h2>
        </div>
      </div>
      <div className="content is-medium">
        <Nav />
      </div>
    </div>
  </section>
)
