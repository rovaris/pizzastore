'use strict';
const path = require('path');
const configResolver = require('./config/configResolver');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const webpack = require('webpack');

const config = configResolver.loadConfig('production');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './main.jsx',
    ],
    output: {
        path: path.join(__dirname, 'release'),
        filename: 'bundle.js',
        publicPath: config.publicPath,
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc',
                    emitWarning: true,
                    failOnWarning: false,
                    failOnError: false,
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader',
                ]
            },
            {
                test: /\.scss$|\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader',
                    publicPath: 'release',
                })
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        }),
        new FaviconsWebpackPlugin('images/favicon.ico'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html|eot|svg|ttf|png|css|woff|woff2)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx'],
    }
};
