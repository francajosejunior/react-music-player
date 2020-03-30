const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const environment = process.env.REACT_APP_ENV
const production = environment === 'production'

const optimization = {
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    })
  ]
}

const devServer = {
  inline: true,
  port: 8000
}

module.exports = {
  devServer: production ? {} : devServer,
  devtool: production ? '' : 'source-map',
  mode: production ? 'production' : 'development',
  entry: ['@babel/polyfill', path.join(__dirname, 'src', 'index')],

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js'
    // publicPath: '/'
  },
  resolve: {
    alias: {
      styles: path.join(__dirname, 'src', 'styles', 'scss', '_main.scss')
    }
  },
  optimization: production ? optimization : {},
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new WebpackNotifierPlugin({
      title: 'react-music-player',
      skipFirstNotification: true,
      alwaysNotify: false
    }),
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(environment)
    }),
    new CopyWebpackPlugin(['src/assets'])
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(scss|css|woff2)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]--[name].[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[name].[hash].[ext]' }
          }
        ]
      }
    ]
  }
}
