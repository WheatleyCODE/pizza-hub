const { alias } = require('react-app-rewire-alias');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent');

const production = process.env.REACT_APP_ENV === 'production';

module.exports = function override(config) {
  alias({
    /**
     * SCSS usage
     */
    fonts: 'src/assets/fonts',
    styles: 'src/styles',

    /**
     * JavaScript usage
     */
    '@t': 'src/types',
    // '@constants': 'src/constants',
    '@utils': 'src/utils',
    // '@helpers': 'src/helpers',
    // '@selectors': 'src/redux/selectors',
    '@actions': 'src/redux/actions',
    '@hooks': 'src/hooks',
    // '@pages': 'src/pages',
    '@components': 'src/components',
    '@ui': 'src/components/UI',
    '@hoc': 'src/hoc',
    '@images': 'src/images',
    '@styles': 'src/styles',
  })(config);

  if (production) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        generateStatsFile: true,
        statsFilename: '../webpack-stats.json',
        analyzerMode: 'static',
        openAnalyzer: false
      }),
      new RelativeCiAgentWebpackPlugin()
    );
  }

  return config;
}
