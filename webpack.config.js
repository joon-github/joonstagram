const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
      {
        test: /\.png$/,
        use: ["file-loader"],
      },
      {
        test: /\.jpg$/,
        use: ["file-loader"],
      },
      {
        test: /\.jpeg$/,
        use: ["file-loader"],
      },
      {
        test: /\.webp$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", //파일경로
    }),
    new MiniCssExtractPlugin(),
    // new CleanWebpackPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, "doce"),
    filename: "[name].js",
  },
};
