'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:path.join(__dirname,'src','index'),
  devtool: "source-map",
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/'
  },
  module: {
    rules:[{
      test: /\.js$/,
      exclude: /node_modules/,
      include:/src/,
      loader: 'babel-loader'
    },
    {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },
          {
  test: /\.(woff|woff2)$/,
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
  new ExtractTextPlugin('styles.min.css'),
  new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}),
   new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true})
]
}
