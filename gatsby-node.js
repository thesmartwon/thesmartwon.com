const path = require("path")
const fileSlugRegex = /(\/posts\/.*)\..*/
const topicPages = {}

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    if (node.frontmatter.draft) {
      // actions.deleteNode({node}) doesn't work, so just don't add a slug, which we filter on
      return
    }
    actions.createNodeField({
      node,
      name: "slug",
      value: fileSlugRegex.exec(node.fileAbsolutePath)[1],
    })
  }
}

const addTopicIndex = (pagePath, actions) => {
  const topic = /\/posts\/(.*)\/.*/.exec(pagePath)[1]

  if (topic && !topicPages[topic]) {
    actions.createPage({
      component: path.resolve(__dirname, "src/templates/topic-template.js"),
        path: `/posts/${topic}`,
        context: {
          topic: topic,
          glob: `**/posts/${topic}/*`
        }
    })
    topicPages[topic] = true
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
  {
    mdPosts: allMarkdownRemark(filter: {fields: {slug: {ne: null}}}) {
      nodes {
        id
        fileAbsolutePath
        fields {
          slug
        }
        frontmatter {
          title
          date
          javascript
        }
        timeToRead
        excerpt
      }
    }
    jsPosts: allFile(filter: {absolutePath: {glob: "**/posts/*/*.js"}}) {
      nodes {
        absolutePath
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.mdPosts.nodes.forEach(node => {
      const pagePath = node.fields.slug
      actions.createPage({
        component: path.resolve(__dirname, "src/templates/post-template.js"),
        path: pagePath,
        context: {
          // To lookup more data in template
          id: node.id,
          // For nav, which queries sitePage
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          excerpt: node.excerpt,
          timeToRead: node.timeToRead,
          // To check in static-entry if should include scripts or not
          javascript: node.frontmatter.javascript
        }
      })
      addTopicIndex(pagePath, actions)
    })
    result.data.jsPosts.nodes.forEach(node => {
      // TODO: find a way to make this much prettier
      const markdownRemark = require(node.absolutePath.replace('.js', '.meta')).markdownRemark
      const pagePath = fileSlugRegex.exec(node.absolutePath)[1]
      actions.createPage({
        component: node.absolutePath,
        path: pagePath,
        context: {
          // For nav, which queries sitePage
          title: markdownRemark.frontmatter.title,
          date: markdownRemark.frontmatter.date,
          excerpt: markdownRemark.excerpt,
          timeToRead: markdownRemark.timeToRead,
          // If we put a js template in our folder, we KNOW we want javascript
          javascript: true
        }
      })
      addTopicIndex(pagePath, actions)
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()
  // console.log("stage", stage)
  if (stage === "build-javascript") {
    // Use our custom entrypoint
    config.entry.app = "./src/production-app.js"
    // Disable sourcemaps: https://webpack.js.org/configuration/devtool/
    // config.devtool = false

    // https://preactjs.com/guide/switching-to-preact
    config.resolve.alias["react"] = "preact-compat"
    config.resolve.alias["react-dom"] = "preact-compat"
    config.resolve.alias["create-react-class"] = "preact-compat/lib/create-react-class"
    config.module.rules.push({
      test: /.*react\-helmet.*/,
      use: "null-loader"
    })
    config.module.rules.push({
      test: /.*core\-js.*/,
      use: "null-loader"
    })
  } else if (stage === "develop") {
    // Use our custom entrypoint
    const commons = config.entry.commons.filter(a => a.indexOf(".cache") === -1)
    commons.push("./src/app.js")
    config.entry.commons = commons
  } else if (stage === "build-html") {
    // console.log("plugins", config.plugins)
    config.entry.main = "./src/static-entry.js"
  }
  // config.optimization = {}

  actions.replaceWebpackConfig(config)
}
