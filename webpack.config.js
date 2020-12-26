/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-check
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/**
 * @type {import('./package.json')}
 */
const packageJson = require('./package.json');

/**
 * @param {WebpackEnvFlags} envFlags
 * @param {Argv} argv
 * @returns {import('webpack').Configuration}
 */
const webpackFactory = (envFlags, argv) => {
  const isProduction = argv.mode === 'production';
  const isAnalyseMode = argv.analyze === true;

  const styledComponentsTransformer = createStyledComponentsTransformer({
    minify: isProduction,
  });

  return {
    entry: {
      background: __dirname + '/src/App/background.ts',
      wishlist: __dirname + '/src/App/wishlist_page.tsx',
      popup: __dirname + '/src/App/popup_page.tsx',
      options: __dirname + '/src/App/options_page.tsx',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].js',
    },
    devtool: isAnalyseMode ? false : 'inline-source-map',
    plugins: [
      new EnvironmentPlugin({
        APP_VERSION: packageJson.version,
        BUILD_DATE: formatDate(),
      }),
      new HtmlWebpackPlugin({
        title: 'Wishlist Page',
        filename: 'wishlist.html',
        template: __dirname + '/src/template.html',
        chunks: ['wishlist'],
      }),
      new HtmlWebpackPlugin({
        title: 'Popup',
        filename: 'popup.html',
        template: __dirname + '/src/template.html',
        chunks: ['popup'],
      }),
      new HtmlWebpackPlugin({
        title: 'My PlayStation Wishlist',
        filename: 'options.html',
        template: __dirname + '/src/template.html',
        chunks: ['options'],
      }),
      new CopyPlugin({
        patterns: [{ from: 'manifest.json' }, { from: 'images/', to: 'images/' }],
      }),
      isAnalyseMode &&
        new BundleAnalyzerPlugin({
          analyzerPort: 9088,
        }),
    ].filter(Boolean),
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.m?[jt]sx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
              configFile: isProduction ? 'tsconfig.prod.json' : 'tsconfig.json',
            },
          },
        },
      ],
    },
    devServer: {
      contentBase: __dirname + 'src',
      historyApiFallback: {
        index: '/',
      },
    },
    watchOptions: {
      ignored: ['node_modules/**', 'dist/**'],
    },
  };
};

module.exports = webpackFactory;

/**
 * @typedef {{
 * production?: boolean;
 * development?: boolean;
 * local?: boolean;
 * }} WebpackEnvFlags
 */

/**
 * @typedef {{
 * color: boolean,
 * mode: 'production' | 'development',
 * analyze: boolean,
 * }} Argv
 */

/**
 * @param {Date} date
 * @returns {string} Format: YYYY.mm.dd
 */
function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const month2Digits = `0${month}`.slice(-2);
  const day2Digits = `0${day}`.slice(-2);

  return `${year}.${month2Digits}.${day2Digits}`;
}
