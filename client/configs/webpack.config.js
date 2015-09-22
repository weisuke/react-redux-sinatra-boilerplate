var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var forProduction = process.env.NODE_ENV === "production";

var plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new ExtractTextPlugin('style.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        __DEVTOOL__: process.env.DEV_TOOL === "enabled"
    })
]

var jsxLoaders = [
    'babel'
    //+ (forProduction ? '?optional=optimisation.react.inlineElements&optional=optimisation.react.constantElements' : '')
]

if (forProduction) {
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console : true
            },
            output: {
                comments: false
            }
        })
    )
} else {
    jsxLoaders.unshift('react-hot')
}

var config = {
    entry: {
        app: [
            //'webpack-dev-server/client?http://0.0.0.0:9090',
            //'webpack/hot/only-dev-server',
            'bootstrap-sass!./configs/bootstrap-sass.config.js',
            './app/main.jsx'
        ],
        vendors: [
            'react',
            'react-router',
            'react-dom',
            'history',
            'react-loader',
            'react-redux',
            'redux',
            'redux-thunk',
            'whatwg-fetch',
            'react-bootstrap/lib/Modal',
            'react-bootstrap/lib/OverlayTrigger',
            'react-bootstrap/lib/Popover',
            'react-bootstrap/lib/Tooltip'
        ]
    },
    output: {
        path: forProduction ? './dist/' : './build',
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:9090/assets/'
    },
    resolve: {
        alias: {},
        extensions : ["", ".js", ".jsx"]
    },
    module: {
        noParse: [],
        loaders: [
            { test: /\.jsx?$/, loaders: jsxLoaders, exclude: /node_modules|configs|build|dist/ },
            { test: /\.scss$/, loader: forProduction ? ExtractTextPlugin.extract("style-loader", "css!sass") : "style!css!sass?outputStyle=expanded" },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
        ]
    },
    plugins: plugins
};

module.exports = config;