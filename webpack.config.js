const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
 
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new NodemonPlugin()
    ]
};
