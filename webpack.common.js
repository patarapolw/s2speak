const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },
  module: {
    rules: [
    {
      test: /\.ts$/,
      loader: "ts-loader",
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    extensions: [
      ".ts",
      ".js"
    ]
  },
  plugins: [
    new CopyPlugin([
      "README.md",
      "public/index.html"
    ])
  ]
};