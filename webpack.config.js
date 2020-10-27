// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const CopyPlugin = require('copy-webpack-plugin');

/**
 * @param {WebpackEnvFlags} envFlags
 * @param {Argv} argv
 * @returns {import('webpack').Configuration}
 */
const webpackFactory = (envFlags, argv) => {
  const isProduction = argv.mode === 'production';
  const styledComponentsTransformer = createStyledComponentsTransformer({
    minify: isProduction,
  });

  return {
    entry: {
      background: __dirname + '/src/App/background.ts',
      content_script: __dirname + '/src/App/content_script.ts',
      wishlist: __dirname + '/src/App/wishlist_page.tsx',
      popup: __dirname + '/src/App/popup_page.tsx',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].js',
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'wishlist.html',
        template: __dirname + '/src/template.html',
        chunks: ['wishlist'],
      }),
      new HtmlWebpackPlugin({
        filename: 'popup.html',
        template: __dirname + '/src/template.html',
        chunks: ['popup'],
      }),
      new CopyPlugin({
        patterns: [{ from: 'manifest.json' }, { from: 'images/', to: 'images/' }],
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
            options: {
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
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
