/* eslint-disable */
import React from "react"
import ReactDOM from "react-dom"

import socketIo from "../.cache/socketIo"
import syncRequires from "../.cache/sync-requires"
import pages from "../.cache/pages.json"

function supportsServiceWorkers(location, navigator) {
  if (location.hostname === `localhost` || location.protocol === `https:`) {
    return `serviceWorker` in navigator
  }
  return false
}

// Hook up the client to socket.io on server
const socket = socketIo()
if (socket) {
  socket.on(`reload`, () => {
    window.location.reload()
  })
}

/**
 * Service Workers are persistent by nature. They stick around,
 * serving a cached version of the site if they aren't removed.
 * This is especially frustrating when you need to test the
 * production build on your local machine.
 *
 * Let's unregister the service workers in development, and tidy up a few errors.
 */
if (supportsServiceWorkers(location, navigator)) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
}

const renderer = ReactDOM.render

for (let page of pages) {
  if (page.path === window.location.pathname) {
    const Root = syncRequires.components[page.componentChunkName];
    console.log('root', Root);
    document.addEventListener('DOMContentLoaded', () => {
      renderer(<Root />, document.getElementById(`b`))
    })
    break
  }
}