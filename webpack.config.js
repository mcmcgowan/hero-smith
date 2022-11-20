const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/client/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',// Required for Docker to work with dev server
        port: 8080,
        hot: true,
        historyApiFallback: true,// fallback to root for other urls
        static: {
          directory: path.resolve(__dirname, 'dist'),
          publicPath: '/'
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        // proxy is required in order to make api calls to express server while using hot-reload webpack server
        // routes api fetch requests from localhost:8080/api/* (webpack dev server) to localhost:3000/api/* (where our Express server is running)
        proxy: {
          '/api/**': {
            target: 'http://localhost:3000/',
            secure: false,
          },
        },
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,   
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,   
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            },
        ]
    },
};