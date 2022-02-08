const { merge } = require("webpack-merge");
//** Merge is used so we can merge two webpack objects togeather
const HtmlWebpackPlugin = require("html-webpack-plugin");
//** It will take some HTML file from the project and Inject some script to it
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", //Just a convention not used anywhere
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

//! IMPORTANT: devConfig will overwrite anything from commonConfig
module.exports = merge(commonConfig, devConfig);
