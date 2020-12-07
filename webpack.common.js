/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const path = require("path");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozpeg = require("imagemin-mozjpeg");
const ImageminPngquant = require("imagemin-pngquant");
const { ProgressPlugin } = require('webpack');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DevMode = process.env.NODE_ENV !== 'production';

const handler = (percentage, message, ...args) => {
  console.info(`${(percentage * 100).toFixed()}% ${message}`);
};


module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader?url=false",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|eot|ttf|woff)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
          globOptions: {
            ignore: ["**/images/**"], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          },
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, "src/scripts/sw.js"),
    }),
    new ProgressPlugin(handler),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozpeg({
          quality: 50,
          progressive: true,
        }),
        ImageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
    new MiniCssExtractPlugin({
      filename: DevMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: DevMode ? "[id].css" : "[id].[hash].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({})
    ],
  },
};
