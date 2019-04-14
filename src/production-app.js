import React from "react"
import ReactDOM from "react-dom"
import domReady from "@mikaelkristiansson/domready"
import asyncRequires from "../.cache/async-requires"

console.log('loader things', window.page, window.dataPath, asyncRequires)
const renderer = ReactDOM.hydrate

asyncRequires.components[window.page.componentChunkName]().then((m) => {
  const Component = (m && m.default) || m
  domReady(() => {
    renderer(
      <div>
        <Component
          location={location}
          key={window.page.path}/>
      </div>,
      document.getElementById(`b`)
    )
  })
})
