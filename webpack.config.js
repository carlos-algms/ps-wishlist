// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @param {WebpackEnvFlags} envFlags
 * @returns {import('webpack').Configuration}
 */
const webpackFactory = (envFlags) => {
  return {
    entry: {
      wishlist: __dirname + '/src/index.tsx',
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
    module: {
      rules: [
        {
          test: /\.m?[jt]sx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'ts-loader',
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
