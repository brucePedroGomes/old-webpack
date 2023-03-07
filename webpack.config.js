const path = require("path");

const prod = process.env.NODE_ENV === "production";

module.exports = {
   mode: prod ? "production" : "development",
   entry: path.resolve(__dirname, "src", "index.tsx"),
   output: {
      path: path.resolve(__dirname, prod ? "build" : "public"),
      filename: "bundle.js",
   },
   devtool: prod ? undefined : "source-map",
   devServer: {
      static: path.resolve(__dirname, "public"),
   },
   resolve: {
      extensions: [".ts", ".tsx", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/, //kind of file extension this rule should look for and apply in test
            loader: "ts-loader",
            exclude: /node_modules/, //folder to be excluded
         },
      ],
   },
};
