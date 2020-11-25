// const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/BBS/" : "/",
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       src: path.join(__dirname, "/src"), //这些路径改改看看
  //       components: path.join(__dirname, "./src/components"),
  //       router: path.join(__dirname, "./src/router"),
  //       assets: path.join(__dirname, "./src/assets"),
  //       views: path.join(__dirname, "./src/views")
  //     }
  //   }
  // }
};
