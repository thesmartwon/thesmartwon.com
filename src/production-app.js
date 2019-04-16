import React from "react"
import ReactDOM from "react-dom"
import asyncRequires from "../.cache/async-requires"
import domReady from "./dom-ready"

const jsonDataPaths = { [window.page.jsonName]: window.dataPath }
const createJsonURL = jsonName => `${__PATH_PREFIX__}/static/d/${jsonName}.json`

const fetchResource = resourceName => {
  if (resourceName.slice(0, 12) === `component---`) {
    return asyncRequires.components[resourceName]()
  }

  return new Promise((resolve, reject) => {
    const url = createJsonURL(jsonDataPaths[resourceName])
    const req = new XMLHttpRequest()
    req.open(`GET`, url, true)
    req.withCredentials = true
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        if (req.status === 200) {
          resolve(JSON.parse(req.responseText))
        } else {
          reject()
        }
      }
    }
    req.send(null)
  })
}

const preferDefault = m => (m && m.default) || m

Promise.all([
  fetchResource(window.page.componentChunkName).then(preferDefault),
  fetchResource(window.page.jsonName).then(preferDefault),
]).then(([component, json]) => {
  domReady(() => {
    ReactDOM.render(
      React.createElement(
        'div',
        {},
        React.createElement(component, json)
      ),
      document.getElementById('b')
    )
  })
})
