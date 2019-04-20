const path = require("path");

const slugRegex = /(\/posts\/.*)\..*/


exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    if (node.frontmatter.draft && process.env.NODE_ENV === "production") {
      // actions.deleteNode({node}) doesn't work
      return
    }
    actions.createNodeField({
      node,
      name: "slug",
      value: slugRegex.exec(node.fileAbsolutePath)[1],
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
  {
    allMarkdownRemark(filter: {fields: {slug: {ne: null}}}) {
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
    allFile(filter: {absolutePath: {glob: "**/posts/*/*.js"}}) {
      nodes {
        absolutePath
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
          date: node.frontmatter.date,
          excerpt: node.excerpt,
          timeToRead: node.timeToRead,
          // To check in static-entry if should include scripts or not
          javascript: node.frontmatter.javascript
        }
      });
    })
    result.data.allFile.nodes.forEach(node => {
      const path = slugRegex.exec(node.absolutePath)[1]
      // TODO: find a way to make this much prettier
      const markdownRemark = require(node.absolutePath.replace('.js', '.meta')).markdownRemark
      actions.createPage({
        component: node.absolutePath,
        path: path,
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
