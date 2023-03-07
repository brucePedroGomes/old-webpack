const path = require("path");

const prod = process.env.NODE_ENV === "production";

module.exports = {
   mode: prod ? "production" : "development",
   entry: path.resolve(__dirname, "src", "index.js"),
   output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
   },
   devServer: {
      static: path.resolve(__dirname, "public"),
   },
   resolve: {
      extensions: [".js", ".jsx", ".json"],
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/, //kind of file extension this rule should look for and apply in test
            exclude: /node_modules/, //folder to be excluded
            use: "babel-loader", //loader which we are going to use
         },
      ],
   },
};
