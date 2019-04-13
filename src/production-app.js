import React, { createElement } from "react"
import ReactDOM from "react-dom"
import domReady from "@mikaelkristiansson/domready"
import asyncRequires from "../.cache/async-requires"
import loader from "../.cache/loader"

window.asyncRequires = asyncRequires
window.___loader = loader

loader.addPagesArray([window.page])
loader.addDataPaths({ [window.page.jsonName]: window.dataPath })
loader.addProdRequires(asyncRequires)

console.log('loader things', window.page, window.dataPath, asyncRequires)

loader.getResourcesForPathnameSync(window.location.pathname).then((pageResources) => {
  const Root = () =>
    createElement(
      'div',
      { },
      createElement(pageResources.component, {
        location,
        key: pageResources.page.path,
      })
    )

  const renderer = ReactDOM.hydrate

  domReady(() => {
    renderer(
      <Root />,
      document.getElementById(`b`)
    )
  })
})
