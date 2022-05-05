const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource'
                // loader: 'file-loader',
                // options: {
                //     name: 'public/Assets/images/[name].[ext]'
                // }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
};