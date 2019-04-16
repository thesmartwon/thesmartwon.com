/* eslint-disable */
import React from "react"
import ReactDOM from "react-dom"
import domReady from "./dom-ready"
// import domReady from "@mikaelkristiansson/domready"

import socketIo from "../.cache/socketIo"
import pages from "../.cache/pages.json"
import syncRequires from "../.cache/sync-requires"
import JSONStore from "../.cache/json-store"
import emitter from "../.cache/emitter"
import loader, { setApiRunnerForLoader } from "../.cache/loader"

window.___emitter = emitter
setApiRunnerForLoader(() => undefined)

loader.addPagesArray(pages);
loader.addDevRequires(syncRequires);

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

loader.getResourcesForPathname(window.location.pathname).then(pageResources => {
  domReady(() => {
    console.log('rendering baby', pages, pageResources)
    renderer(<JSONStore
      pages={pages}
      pageResources={pageResources}
      location={window.location}
    />, document.getElementById(`b`))
  })
});
