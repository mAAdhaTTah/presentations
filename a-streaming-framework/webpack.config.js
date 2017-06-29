const path = require('path');

module.exports = {
    entry: './app/index.js',
    devtool: 'sourcemap',
    debug: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.md$/,
                loader: 'html'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars'
            },
            {
                test: /\.json/,
                loader: 'json'
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};
