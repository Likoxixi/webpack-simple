const path = require("path");

console.log("--------------打印配置---------------");
console.log(path);
console.log(__dirname);
console.log(__filename);
console.log("------------打印完成---------");
module.exports = {
    // entry: './src/index.js',
    entry:{
        app:"./src/index.js",
        print:"./src/print.js"

    },
    output: {
        // filename: 'bundle.js',
        filename:"[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
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
                test:/\.(png|svg|jpg|gif|jpeg)$/,
                use:[
                    'file-loader'
                ]
            }

        ]
    }
   
};