const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ShakePlugin = require('webpack-common-shake').Plugin

const common = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new WebpackNotifierPlugin({ alwaysNotify: true })
    ],
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'eslint-loader',
            enforce: 'pre'
        },{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: __dirname
        }, {
            test: /\.md$/,
            loader: 'raw-loader'
        }, {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.svg$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }]
    }
}

const dev = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index'
    ],
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '200.html'),
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist',
        hot: true,
        port: 3000,
        historyApiFallback: true
    }
}

const prod = {
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new BabiliPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '200.html'),
            filename: '200.html'
        }),
        new CopyWebpackPlugin([{
            from: 'CNAME'
        }]),
        new ShakePlugin()
    ]
}

switch (process.env.NODE_ENV) {
    case 'development':
        module.exports = merge(common, dev)
        break
    case 'production':
        module.exports = merge(common, prod)
        break
    default:
        module.exports = common
}
