/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const path = require("path");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozpeg = require("imagemin-mozjpeg");
const ImageminPngquant = require("imagemin-pngquant");
const { ProgressPlugin } = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DevMode = process.env.NODE_ENV !== "production";
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
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
      {
        urlPattern: new RegExp('/'),
        handler: 'StaleWhileRevalidate'
      },
      {
        urlPattern: new RegExp('https://restaurant-api.dicoding.dev'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'restaurants-cache',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: ({ request }) => request.destination === 'image',
        handler: 'CacheFirst',
        options: {
          cacheName: 'images-cache',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: new RegExp('https://image.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg'),
        handler: 'CacheFirst'
      },
      {
        urlPattern: new RegExp('https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg'),
        handler: 'CacheFirst'
      },
      {
        urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-stylesheets',
        }
      },
      {
        urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          cacheableResponse: {
            statuses: [0, 200],
          },
          expiration: {
            maxEntries: 30,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
        }
      }],
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
