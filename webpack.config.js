var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  mode: 'development',
  watch: true,
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
              // eslint options (if necessary)
            }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
}