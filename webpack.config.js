module.exports = {
  entry: "./lib/saviors.js",
  output: {
    filename: "bundle.js"
  },
  devtool: 'source-map',
};

module.exports = {
  context: __dirname,
  entry: "./lib/saviors.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", "*"]
  }
};
