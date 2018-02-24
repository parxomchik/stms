var loaders = require("./loaders");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/app/index.ts'],
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
		new CopyWebpackPlugin([
			{ context: './src/assets/images', from: '**/*', to: './assets/images' },
			{ context: './src/assets/fonts', from: '**/*', to: './fonts' },
        ]),
        new webpack.optimize.UglifyJsPlugin({
            warning: false,
            mangle: true,
            comments: false
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: true
        })
    ],
    module: {
        loaders: loaders
    }
};
