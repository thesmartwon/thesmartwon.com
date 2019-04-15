import React from "react"
import ReactDOM from "react-dom"
import domReady from "@mikaelkristiansson/domready"
import asyncRequires from "../.cache/async-requires"
import loader from "./loader"

console.log('loader things', window.page, window.dataPath, asyncRequires)
loader.addPagesArray([window.page])
loader.addDataPaths({ [window.page.jsonName]: window.dataPath })
loader.addProdRequires(asyncRequires)

loader.getResourcesForPathname(window.location.pathname).then(resources => {
  console.log('got resources', resources)
  const Component = resources.component;
  domReady(() => {
    ReactDOM.render(
      <div>
        <Component
          location={location}
          key={window.page.path}
          {...resources.json} />
      </div>,
      document.getElementById('b')
    )
  })
})
