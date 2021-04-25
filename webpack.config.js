const HTMLWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

const mode = process.env.ENV || "development";

module.exports = (env = {}) => {
  console.log(`NODE_ENV=${env.ENV}`);
  return {
    mode,
    entry: join(__dirname, "index.tsx"),
    devtool: "inline-source-map",
    output: {
      path: join(__dirname, "build"),
      filename: "index.bundled.js",
    },
    devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HotModuleReplacementPlugin(),
      new HTMLWebpackPlugin({
        favicon: false,
        showErrors: true,
        cache: true,
        template: join(__dirname, "index.html"),
      }),
    ],
  };
};
