var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');
var compiler = webpack(config);

server = new WebpackDevServer(compiler, {
    stats: { colors: true },
    publicPath: config.output.publicPath,
    contentBase: config.devServer.contentBase,
    hot: true,
    historyApiFallback: true
})
server.listen(8080);