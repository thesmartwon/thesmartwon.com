const React = require(`react`)
const fs = require(`fs`)
const { join } = require(`path`)
const { renderToString, renderToStaticMarkup } = require(`react-dom/server`)
const { get, merge, isObject, flatten, uniqBy } = require(`lodash`)

const apiRunner = require(`../.cache/api-runner-ssr`)
const syncRequires = require(`../.cache/sync-requires`)
const { dataPaths, pages } = require(`../.cache/data.json`)
const { version: gatsbyVersion } = require(`gatsby/package.json`)

// Speed up looking up pages.
const pagesObjectMap = new Map()
pages.forEach(p => pagesObjectMap.set(p.path, p))

const stats = JSON.parse(
  fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`, `utf-8`)
)

const chunkMapping = JSON.parse(
  fs.readFileSync(`${process.cwd()}/public/chunk-map.json`, `utf-8`)
)

let Html = require(`./html`)
Html = Html && Html.__esModule ? Html.default : Html

const getPage = path => pagesObjectMap.get(path)

const sanitizeComponents = components => {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(val => (Array.isArray(val) ? val.length > 0 : val))
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : []
  }
}

export default (pagePath, callback) => {
  let bodyHtml = ``
  let headComponents = []
  let htmlAttributes = {}
  let bodyAttributes = {}
  let preBodyComponents = []
  let postBodyComponents = []
  let bodyProps = {}

  const getHeadComponents = () => headComponents

  const replaceHeadComponents = components => {
    headComponents = sanitizeComponents(components)
  }

  const getPreBodyComponents = () => preBodyComponents

  const replacePreBodyComponents = components => {
    preBodyComponents = sanitizeComponents(components)
  }

  const getPostBodyComponents = () => postBodyComponents

  const replacePostBodyComponents = components => {
    postBodyComponents = sanitizeComponents(components)
  }

  const page = getPage(pagePath)

  let dataAndContext = {}
  if (page.jsonName in dataPaths) {
    const pathToJsonData = join(
      process.cwd(),
      `/public/static/d`,
      `${dataPaths[page.jsonName]}.json`
    )
    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData))
    } catch (e) {
      console.log(`error`, pathToJsonData, e)
      process.exit()
    }
  }

  const pageElement = React.createElement(
    syncRequires.components[page.componentChunkName],
    {
      ...dataAndContext,
      pageContext: dataAndContext.pageContext,
    }
  )
  bodyHtml = renderToString(pageElement)

  // Create paths to scripts
  let scriptsAndStyles = flatten(
    [`app`, page.componentChunkName].map(s => {
      const fetchKey = `assetsByChunkName[${s}]`

      let chunks = get(stats, fetchKey)
      let namedChunkGroups = get(stats, `namedChunkGroups`)

      if (!chunks) {
        return null
      }

      chunks = chunks.map(chunk => {
        if (chunk === `/`) {
          return null
        }
        return { rel: `preload`, name: chunk }
      })

      namedChunkGroups[s].assets.forEach(asset =>
        chunks.push({ rel: `preload`, name: asset })
      )

      const childAssets = namedChunkGroups[s].childAssets
      for (const rel in childAssets) {
        chunks = merge(
          chunks,
          childAssets[rel].map(chunk => {
            return { rel, name: chunk }
          })
        )
      }

      return chunks
    })
  )
    .filter(s => isObject(s))
    .sort((s1, s2) => (s1.rel == `preload` ? -1 : 1)) // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, item => item.name)

  const scripts = scriptsAndStyles.filter(
    script => script.name && script.name.endsWith(`.js`)
  )
  const styles = scriptsAndStyles.filter(
    style => style.name && style.name.endsWith(`.css`)
  )

  scripts
    .slice(0)
    .reverse()
    .forEach(script => {
      // Add preload/prefetch <link>s for scripts.
      headComponents.push(
        <link
          as="script"
          rel={script.rel}
          key={script.name}
          href={`${__PATH_PREFIX__}/${script.name}`}
        />
      )
    })

  // if (page.jsonName in dataPaths) {
  //   const dataPath = `${__PATH_PREFIX__}/static/d/${
  //     dataPaths[page.jsonName]
  //   }.json`
  //   headComponents.push(
  //     <link
  //       as="fetch"
  //       rel="preload"
  //       key={dataPath}
  //       href={dataPath}
  //       crossOrigin="use-credentials"
  //     />
  //   )
  // }

  styles
    .slice(0)
    .reverse()
    .forEach(style => {
      // Add <link>s for styles that should be prefetched
      // otherwise, inline as a <style> tag

      if (style.rel === `prefetch`) {
        headComponents.push(
          <link
            as="style"
            rel={style.rel}
            key={style.name}
            href={`${__PATH_PREFIX__}/${style.name}`}
          />
        )
      } else {
        headComponents.unshift(
          <style
            data-href={`${__PATH_PREFIX__}/${style.name}`}
            dangerouslySetInnerHTML={{
              __html: fs.readFileSync(
                join(process.cwd(), `public`, style.name),
                `utf-8`
              ),
            }}
          />
        )
      }
    })

  // Add page metadata for the current page
  const windowData = `/*<![CDATA[*/window.page=${JSON.stringify(page)};${
    // page.jsonName in dataPaths
    //   ? `window.dataPath="${dataPaths[page.jsonName]}";`
    //   : ``
    ''
  }/*]]>*/`

  postBodyComponents.push(
    <script
      key={`script-loader`}
      id={`gatsby-script-loader`}
      dangerouslySetInnerHTML={{
        __html: windowData,
      }}
    />
  )

  // Add chunk mapping metadata
  if (process.env.NODE_ENV !== `production`) {
    const scriptChunkMapping = `/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(
      chunkMapping
    )};/*]]>*/`
  
    postBodyComponents.push(
      <script
        key={`chunk-mapping`}
        id={`gatsby-chunk-mapping`}
        dangerouslySetInnerHTML={{
          __html: scriptChunkMapping,
        }}
      />
    )
  }

  // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.
  const bodyScripts = scripts
    .filter(s => s.rel !== `prefetch`)
    .map(s => {
      const scriptPath = `${__PATH_PREFIX__}/${JSON.stringify(s.name).slice(
        1,
        -1
      )}`
      return <script key={scriptPath} src={scriptPath} async />
    })

  postBodyComponents.push(...bodyScripts)

  apiRunner(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: __PATH_PREFIX__,
  })

  const html = `<!DOCTYPE html>${renderToStaticMarkup(
    <Html
      {...bodyProps}
      headComponents={headComponents}
      htmlAttributes={htmlAttributes}
      bodyAttributes={bodyAttributes}
      preBodyComponents={preBodyComponents}
      postBodyComponents={postBodyComponents}
      body={bodyHtml}
      path={pagePath}
    />
  )}`

  callback(null, html)
}
