const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                },
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node-modules/,
                use: ["babel-loader", "ts-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".jsx", ".ts", ".js"],
        alias: {
            "/@": path.resolve(__dirname, "src"),
            "/#": path.resolve(__dirname, "public"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
