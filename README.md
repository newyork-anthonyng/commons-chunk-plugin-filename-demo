# Getting started
``` shell
npm install
# Install dependencies

npm run build
# Run webpack
```

# Demo showing how CommonsChunkPlugin.filename works
The `CommonsChunkPlugin` takes a `filename` option.

``` javascript
// webpack.config.js

module.exports = {
    // ...

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "lol.[name].[chunkhash].js"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "custom.vendor.[chunkhash].js"
        })
    ]

    // ...
}

// 👉 custom.vendor.abc123.js
```

However, if you do not provide the `filename` option, it defaults to the filename given in your `output.filename` configuration.

``` diff
// webpack.config.js

module.exports = {
    // ...

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "lol.[name].[chunkhash].js"  // 👈
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
-           filename: "custom.vendor.[chunkhash].js"
        })
    ]

    // ...
}

// 👉 lol.vendor.abc123.js
```