var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./public/js/app.js"
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + "/public/js",
        loaders: ["react-hot", "babel"]
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/js",
    publicPath: "/js"
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: "public/"
  }
}
