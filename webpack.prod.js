const config = require("./webpack.common");

module.exports = {
    mode: "production",
    devtool: "source-map",
    ...config
};