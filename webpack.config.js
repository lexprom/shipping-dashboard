const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require('dotenv').config()

const env = process.env.NODE_ENV;
const isProduction = env === "production";


module.exports = {
  mode: isProduction ? "production" : "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      src: path.resolve(process.cwd(), "src"),
    },
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  devtool: isProduction ? false : "source-map",
  devServer: {
    port: 3000,
    hot: true,
  },
};
