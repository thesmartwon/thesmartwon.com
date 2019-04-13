const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.onCreateWebpackConfig = ({ getConfig, stage, rules, loaders, plugins, actions }) => {
  const config = getConfig();
  // console.log('stage', stage);
  if (stage === 'build-javascript') {
    // Use our custom entry
    config.entry.app = './src/production-app.js';

    config.plugins.unshift(new CleanWebpackPlugin({
      // https://github.com/sindresorhus/del#patterns
      cleanOnceBeforeBuildPatterns: ['**/*', '!**/static/**']
    }));
  } else if (stage === 'develop') {
    // Use our custom entry
    const commons = config.entry.commons.filter(a => a.indexOf('.cache/app') === -1);
    commons.push('./src/app.js');
    config.entry.commons = commons;
  }

  actions.replaceWebpackConfig(config);
}
