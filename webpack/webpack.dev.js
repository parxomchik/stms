var webpack = require('webpack');
var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/app/index.ts']
    },
    output: {
        filename: 'build.js',
        path: 'app'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    // devtool: "source-map",
    plugins: [
		new CopyWebpackPlugin([
			{ context: './src/assets/images', from: '**/*', to: './assets/images' },
            { from: 'src/assets/fonts/glyphicons-halflings-regular.woff', to: 'fonts' },
            { from: 'src/assets/fonts/glyphicons-halflings-regular.ttf', to: 'fonts' },
            { from: 'src/assets/fonts/glyphicons-halflings-regular.eot', to: 'fonts' },
        ]),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: 'app'
            },
            ui: false,
            online: false,
            notify: false
        })
    ],
    module: {
        loaders: loaders
    }
};
