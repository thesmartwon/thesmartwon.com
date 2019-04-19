import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Link from '../components/link'
// import './debug.css';
import './index.scss'
import 'bulma'

export default () => (
  <section className="section is-paddingless-horizontal" style={{paddingTop: 0}}>
    <div className="container grid" style={{maxWidth: '1024px'}}>
      <Breadcrumb />
      <h1 className="title is-2">
        About
      </h1>
      <div className="content is-medium">
        <p>
          The Smart Won started as a place for me to share topics with friends without having to repeat myself (plus they get to keep these notes).
          Now it's just a place for me to share my experiences with those who want a little more wisdom. 
        </p>
        <h4>Who am I?</h4>
        <p>
          I'm an early college grad who's been programming since elementary school. I plan to rush to financial independence in less than 10 years
          so I can work on what I want instead of what my employers want. Some things I think are cool are
          {' '}<Link href="https://polygon.io">automated trading</Link>
          , <Link href="http://wiki.sc2ai.net/Main_Page">Starcraft 2 AI</Link>
          , <Link href="https://www.hex-rays.com/products/ida/index.shtml">reverse engineering</Link>
          , and on the less technical side I love God, cooking, and kids! I'm sure as I get older I'll post about those things instead...
        </p>
        <p>
          It's safe to say the following blogs changed my life and inspired me to make this won. You should read them.
          <ul>
            <li><Link href="https://zachholman.com">Zach Holman</Link> on tech and its culture from California</li>
            <li><Link href="https://www.mrmoneymustache.com">Mr. Money Mustache</Link> on how to be frugal</li>
          </ul>
        </p>
      </div>
    </div>
  </section>
)