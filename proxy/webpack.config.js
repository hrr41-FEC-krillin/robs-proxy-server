const path = require("path");
const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");
const webpack = require("webpack");

module.exports = {
  entry: {
    ar: "../cast-photos/client/styled.js",
    // cp: `${path.join(__dirname, "/")}`,
    // cr: `${path.join(__dirname, "/")}`,
    // mp: `${path.join(__dirname, "/")}`,
    pc: "../photo-carousel/client/components/stylesheet.jsx"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        runtimeChunk: {
          name: "vendor"
        }
      }
    })
  ]
  // output: {
  //   filename: "vendor",
  //   path: `${path.join(__dirname, "/public/lib")}`
  // }
  // resolve: {
  //   resolve: {
  //     extensions: [".js", ".jsx", ".tsx", ".ts"],
  //     modules: [
  //       path.resolve(__dirname, "src"),
  //       path.resolve(__dirname, "public"),
  //       "node_modules"
  //     ],
  //     alias: {
  //       react: path.resolve("./node_modules/react"),
  //       "react-dom": path.resolve("./node_modules/react-dom")
  //     }
  //   }
  // },
  // optimization: {
  //   noEmitOnErrors: true,
  //   concatenateModules: true,
  //   namedModules: true,
  //   splitChunks: {
  //     chunks: "async",
  //     minSize: 30000,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: "~",
  //     name: true,
  //     cacheGroups: {
  //       vendor: {
  //         chunks: "initial",
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: 10,
  //         name: "vendor",
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  // runtimeChunk: {
  //   name: "vendor"
  // }
};
