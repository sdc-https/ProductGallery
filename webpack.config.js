const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');


const config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'gallery.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './client/src/index.html'}),
    new webpack.DefinePlugin({
      'env': JSON.stringify(dotenv.parsed)
    }),
    /*new Dotenv()*/
  ]
};

module.exports = config;