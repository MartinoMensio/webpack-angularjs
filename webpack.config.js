var path = require('path');

module.exports = {
    context: path.resolve('src/js/'),
    entry: "./app.js",
    output: {
        path: path.resolve("dist"),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "ng-annotate-loader!babel-loader",
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    },
    node: {
        fs: "empty"
    }
};
