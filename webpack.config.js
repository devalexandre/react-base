'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  devtool: "source-map",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: /src/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          }
        }
      }, {
        test: /\.(ttf|eot|svg)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.min.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true
    })
  ]
}