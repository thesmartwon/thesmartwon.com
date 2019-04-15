import asyncRequires from "../.cache/async-requires"

const jsonDataPaths = { [window.page.jsonName]: window.dataPath }
const preferDefault = m => (m && m.default) || m
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

const getResourceModule = resourceName =>
  fetchResource(resourceName).then(preferDefault)

export default getResourceModule
