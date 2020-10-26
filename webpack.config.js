// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @param {WebpackEnvFlags} envFlags
 * @param {Argv} argv
 * @returns {import('webpack').Configuration}
 */
const webpackFactory = (envFlags, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      wishlist: __dirname + '/src/wishlist.tsx',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].js',
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'wishlist.html',
        template: __dirname + '/src/template.html',
        chunks: ['wishlist'],
      }),
    ],
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
            options: {},
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
  production?: boolean;
  development?: boolean;
  local?: boolean;
}} WebpackEnvFlags
 */

/**
 * @typedef {{
 * color: boolean,
 * mode: 'production' | 'development'
 * }} Argv
 */
