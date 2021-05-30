const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const WebpackBaseConfig = require("./config");

module.exports = {
    ...WebpackBaseConfig,

    mode: "production",
    plugins: [
        ...WebpackBaseConfig.plugins,
        new MiniCssExtractPlugin({
            filename: "styles.[hash].css"
        })
    ]
};
