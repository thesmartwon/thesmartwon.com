const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    actions.createNodeField({
      node,
      name: "slug",
      value: `/posts${slug}`,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            title
            javascript
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.nodes.forEach(node => {
      actions.createPage({
        component: path.resolve(__dirname, "src/templates/post-template.js"),
        path: node.fields.slug,
        context: {
          // To lookup more data in template
          id: node.id,
          // For nav, which queries sitePage
          title: node.frontmatter.title,
          // To check in static-entry if should include scripts or not
          javascript: node.frontmatter.javascript ? node.frontmatter.javascript : false
        }
      });
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig();
  // console.log("stage", stage);
  if (stage === "build-javascript") {
    // Use our custom entrypoint
    config.entry.app = "./src/production-app.js";
    // Disable sourcemaps: https://webpack.js.org/configuration/devtool/
    // config.devtool = false;

    // https://preactjs.com/guide/switching-to-preact
    config.resolve.alias["react"] = "preact-compat";
    config.resolve.alias["react-dom"] = "preact-compat";
    config.resolve.alias["create-react-class"] = "preact-compat/lib/create-react-class";
    config.module.rules.push({
      test: /.*react\-helmet.*/,
      use: "null-loader"
    });
  } else if (stage === "develop") {
    // Use our custom entrypoint
    const commons = config.entry.commons.filter(a => a.indexOf(".cache/app") === -1);
    commons.push("./src/app.js");
    config.entry.commons = commons;
  } else if (stage === "build-html") {
    // console.log("plugins", config.plugins);
    config.entry.main = "./src/static-entry.js";
  }
  // config.optimization = {};

  actions.replaceWebpackConfig(config);
}
