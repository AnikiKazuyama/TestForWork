const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/components/index.js', 
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }, 

  module: { 

    loaders: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },

      {
        test: /\.js?$/, 
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ],

  },

  plugins: [

    new HtmlWebpackPlugin({
      title: 'Output Management', 
      template: './src/templates/index.html'
    }), 
    new CleanWebpackPlugin(['dist'])
  ]

 }
