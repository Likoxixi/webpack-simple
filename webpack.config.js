const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    // entry: './src/index.js',
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"

    },

    output: {
        // filename: 'bundle.js',
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool:"inline-source-map",
    devServer:{
        contentBase:"./dist"
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //   title:"测试实验"
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            }

        ]
    }

};