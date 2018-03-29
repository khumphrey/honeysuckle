const { resolve } = require('path')

module.exports = {
  // mode: process.env.NODE_ENV === ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index'
  ],
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$|\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   loaders: ['babel-loader', 'awesome-typescript-loader']
      // },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.jsx?$/, loader: "source-map-loader" }
    ]
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM",
  //   "react-router-dom": "ReactRouterDOM",
  //   "react-redux": "ReactRedux",
  //   "redux": "Redux"
  // },
}
