const config = require("./webpack.common");
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    ...config,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      open: true
    }
};