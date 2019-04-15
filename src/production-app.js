import React from "react"
import ReactDOM from "react-dom"
import domReady from "@mikaelkristiansson/domready"
import getResourceModule from "./loader"

Promise.all([
  getResourceModule(window.page.componentChunkName),
  getResourceModule(window.page.jsonName),
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
