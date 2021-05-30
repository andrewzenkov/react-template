const path = require('path');

const webpackBaseConfig = require('./config');

module.exports = {
    ...webpackBaseConfig,

    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 3333,
        disableHostCheck: true,
        hot: true,
        historyApiFallback: true
    }
};
