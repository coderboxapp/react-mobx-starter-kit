'use strict'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const path = require('path')

const paths = {
  appBuild: path.resolve(__dirname, 'build'),
  appHtml: path.resolve(__dirname, 'src/index.html'),
  appSrc: path.resolve(__dirname, 'src'),
  appIndex: path.resolve(__dirname, 'src/index.js')
}

module.exports = {
  entry: [
    'babel-polyfill',
    paths.appIndex
  ],
  output: {
    path: paths.appBuild,
    filename: 'bundle-min.js',
    publicPath: '/',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [paths.appModules, paths.appSrc]
            }
          }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      paths.appSrc
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin(),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'bundle.vendors-min.js',
      minChunks (module) {
        const context = module.context
        return context && context.indexOf('node_modules') >= 0
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  ]
}
