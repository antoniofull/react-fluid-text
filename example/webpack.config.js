const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
