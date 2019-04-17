const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
    {
      allMdx {
        nodes {
          fileAbsolutePath
          frontmatter {
            title
            date
          }
        }
      }
    }
  `).then(({data}) => {
    data.allMdx.nodes.forEach(node => {
      const match = (/.*(posts.*)\..*/).exec(node.fileAbsolutePath);
      actions.createPage({
        component: path.resolve(__dirname, "src/templates/post-template.js"),
        path: `/${match[1]}/`,
        context: {
          ...node.frontmatter
        }
      });
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig();
  // console.log("stage", stage);
  if (stage === "build-javascript") {
    console.log("optimization", config.optimization.OptimizeCssAssetsWebpackPlugin)
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
