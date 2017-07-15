const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve('src/js/'),
    entry: {
        // our code
        'main': "./app.js"
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/assets/js/',
        filename: '[name].js',
    },
    plugins: [
        // this other bundle is for vendor libraries
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource),
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: 'main'
        })
    ],
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
