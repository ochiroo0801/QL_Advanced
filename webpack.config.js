const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundled.js",
  },
  devServer: {
    before: function (app, server) {
      server._watch("./src/**/*.html");
    },
    contentBase: path.join(__dirname, "src"),
    hot: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",

          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-import"),
                require("postcss-mixins"),
                require("postcss-simple-vars"),
                require("postcss-nested"),
                require("autoprefixer"),
                require("cssnano"),
              ],
            },
          },
        ],
      },
    ],
  },
};
