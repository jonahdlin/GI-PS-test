var path = require('path');
var webpack = require('webpack');
var webpackStripLoader = require('strip-loader');
var uglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new uglifyJSPlugin({})
  ],
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.png$/,
        use: 'url-loader'
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: webpackStripLoader.loader('console.log')
      }
    ]
  }
};
