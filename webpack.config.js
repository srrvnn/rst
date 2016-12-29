var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "./public/js/index.js"
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
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
  ]
}
