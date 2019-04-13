import React from "react"
import ReactDOM from "react-dom"
import domReady from "@mikaelkristiansson/domready"

import socketIo from "../.cache/socketIo"
import emitter from "../.cache/emitter"
import { apiRunner, apiRunnerAsync } from "../.cache/api-runner-browser"
import loader, { setApiRunnerForLoader, postInitialRenderWork } from "../.cache/loader"
import syncRequires from "../.cache/sync-requires"
import pages from "../.cache/pages.json"

window.___emitter = emitter
setApiRunnerForLoader(apiRunner)

// Let the site/plugins run code very early.
apiRunnerAsync(`onClientEntry`).then(() => {
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
  // eslint-disable-next-line no-restricted-globals
  if (supportsServiceWorkers(location, navigator)) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (let registration of registrations) {
        registration.unregister()
      }
    })
  }

  const rootElement = document.getElementById(`b`)

  const renderer = apiRunner(
    `replaceHydrateFunction`,
    undefined,
    ReactDOM.render
  )[0]

  loader.addPagesArray(pages)
  loader.addDevRequires(syncRequires)

  loader.getResourcesForPathname(window.location.pathname).then(() => {
    const preferDefault = m => (m && m.default) || m
    let Root = preferDefault(require(`../.cache/root`))
    domReady(() => {
      renderer(<Root />, rootElement, () => {
        postInitialRenderWork()
        apiRunner(`onInitialClientRender`)
      })
    })
  })
})

function supportsServiceWorkers(location, navigator) {
  if (location.hostname === `localhost` || location.protocol === `https:`) {
    return `serviceWorker` in navigator
  }
  return false
}
