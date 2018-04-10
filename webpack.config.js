const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),

    entry: {
       main: "./index.js",
       vendor: ["react", "react-dom"]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "lol.[name].[chunkhash].js"
    },

    plugins: [
        new CleanWebpackPlugin(["dist"]),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",  // get everything from the vendor chunk and extract it into its own file
            filename: "custom.vendor.[chunkhash].js",
            minChunks: Infinity  // include only things from the vendor chunk
        })
    ]
}