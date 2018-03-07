var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/jauge.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jauge.bundle.js',
        libraryTarget: 'var',
        library: 'Jauge'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
