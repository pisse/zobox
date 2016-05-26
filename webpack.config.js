var _path = require('path');
var _rucksackCss = require("rucksack-css");
var _autoprefixer = require("autoprefixer");
var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');
var _webpack = require('webpack');
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


var pkg = require('./package.json');

var babelQuery = {
    cacheDirectory: true,
    presets: [require.resolve('babel-preset-es2015'), require.resolve('babel-preset-react'), require.resolve('babel-preset-stage-0')],
    plugins: [require.resolve('babel-plugin-add-module-exports'), require.resolve('babel-plugin-typecheck'), require.resolve('babel-plugin-transform-decorators-legacy')]
};

var jsFileName = '[name].js';
var cssFileName = '[name].css';
var commonName =  'common.js';

var browser = pkg.browser || {};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var emptyBuildins = ['child_process', 'cluster', 'dgram', 'dns', 'fs', 'module', 'net', 'readline', 'repl', 'tls'];
var node = emptyBuildins.reduce(function (obj, name) {
    if (!(name in browser)) {
        return _extends({}, obj, _defineProperty({}, name, 'empty'));
    }
    return obj;
}, {});

var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({
    //path: _path.join(__dirname, 'app', 'views')
});

module.exports = {//function(webpackConfig) {
    /* webpackConfig.babel.plugins.push('antd');

     // Fix ie8 compatibility
     webpackConfig.module.loaders.unshift({
     test: /\.jsx?$/,
     loader: 'es3ify-loader',
     });
     */

    babel: babelQuery,

    output: {
        path: _path.resolve(__dirname, "www/assets/"),
        filename: jsFileName,
        publicPath: "/assets/", //webpack构建的文件是存在内存中，publicPath指定发布的路径
        chunkFilename: jsFileName
    },

    //devtool: args.devtool,

    resolve: {
        modulesDirectories: ['node_modules', (0, _path.join)(__dirname, '../node_modules')],
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules', (0, _path.join)(__dirname, '../node_modules')]
    },

    entry: pkg.entry,

    node: node,

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: babelQuery
        }, {
            test: /\.jsx$/,
            loader: 'babel',
            query: babelQuery
        }, {
            test: function test(filePath) {
                return (/\.css$/.test(filePath) && !/\.module\.css$/.test(filePath)
                );
            },

            loader: _extractTextWebpackPlugin.extract('css?sourceMap&-restructuring!' + 'postcss')
        }, {
            test: /\.module\.css$/,
            loader: _extractTextWebpackPlugin.extract('css?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base64:5]!' + 'postcss')
        }, {
            test: function test(filePath) {
                return (/\.less$/.test(filePath) && !/\.module\.less$/.test(filePath)
                );
            },

            loader: _extractTextWebpackPlugin.extract('css?sourceMap!' + 'postcss!' + ('less-loader?{"sourceMap":true,"modifyVars":' + JSON.stringify(pkg.theme || {}) + '}'))
        }, {
            test: /\.module\.less$/,
            loader: _extractTextWebpackPlugin.extract('css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' + 'postcss!' + ('less-loader?{"sourceMap":true,"modifyVars":' + JSON.stringify(pkg.theme || {}) + '}'))
        }, {
            test: function test(filePath) {
                return (/\.scss/.test(filePath) && !/\.module\.scss/.test(filePath)
                );
            },

            loader: _extractTextWebpackPlugin.extract('css?sourceMap!' + 'postcss!sass-loader')
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/octet-stream'
        }, {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=image/svg+xml'
        }, {test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i, loader: 'url?limit=10000'}, {
            test: /\.json$/,
            loader: 'json'
        }, {test: /\.html?$/, loader: 'file?name=[name].[ext]'}]
    },

    postcss: [(0, _rucksackCss)(), (0, _autoprefixer)({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']
    })],

    sassLoader: {
        includePaths: ['src/bower_components/bourbon/app/assets/stylesheets']
    },

    plugins: [new _webpack.optimize.CommonsChunkPlugin('common', commonName), new _extractTextWebpackPlugin(cssFileName, {
        disable: false,
        allChunks: true
    }), new _webpack.optimize.OccurenceOrderPlugin()]
};

/* return webpackConfig;
 };*/
