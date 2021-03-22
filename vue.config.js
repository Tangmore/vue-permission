// 传入端口，默认50013, 3是测试服务器，233是dsc的ip地址，11是hlj的ip地址
const target = (url) => { 
    //你要跨域的域名(包含host、端口号,切记：一定要带上http头);
    //同一个域名只能设置一次跨域，否则重复报错！
    return {
      target: `${url}`,
      ws: true,
      changeOrigin: true, //是否跨域，设置为true;(必须) 
      pathRewrite: {//重写路径
        "^/login": '/login',//代理路径
        "^/server": '/server', 
      }
    };
};

module.exports = {
    publicPath: "./",
    lintOnSave:false,//这里禁止使用eslint-loader
    configureWebpack: config => {
        // vue-cli3生产环境去掉console.log 参考：
        // https://blog.csdn.net/u010007013/article/details/93661737
        // if (process.env.NODE_ENV === "production") {
        //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        // } 
    },
    devServer: { 
        host: 'localhost',
        port: 8088,
        // open: true, //配置自动启动浏览器
        disableHostCheck: true, // 取消Host检查，在内网穿透时使用
        // 特别注意匹配原则，多的在前少的在后
        // proxy: {
        //   "/login": target("http://192.168.2.252:8081/central"),   
        //   "/server": target("http://192.168.2.252:8081/central"),   
        // }
    }
}