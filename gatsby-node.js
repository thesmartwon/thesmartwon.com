const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.createPages = ({actions}) => {
  actions.createPage({
    component: path.resolve(__dirname, "src/pages/page-3.js"),
    path: "/custompage/",
    context: {
      thing: 2
    }
  });
}

exports.onCreateWebpackConfig = ({ getConfig, stage, rules, loaders, plugins, actions }) => {
  const config = getConfig();
  // console.log('stage', stage);
  if (stage === 'build-javascript') {
    // Use our custom entrypoint
    config.entry.app = './src/production-app.js';
    // Disable sourcemaps: https://webpack.js.org/configuration/devtool/
    // config.devtool = false;

    config.resolve.alias["react"] = "preact-compat";
    config.resolve.alias["react-dom"] = "preact-compat";
    config.resolve.alias["create-react-class"] = "preact-compat/lib/create-react-class";

    config.plugins.unshift(new CleanWebpackPlugin({
      // https://github.com/sindresorhus/del#patterns
      cleanOnceBeforeBuildPatterns: ['**/*', '!**/static/**']
    }));
  } else if (stage === 'develop') {
    // Use our custom entrypoint
    const commons = config.entry.commons.filter(a => a.indexOf('.cache/app') === -1);
    commons.push('./src/app.js');
    config.entry.commons = commons;
  } else if (stage === 'build-html') {
    // console.log('config', config);
    config.entry.main = './src/static-entry.js';
  }

  actions.replaceWebpackConfig(config);
}
