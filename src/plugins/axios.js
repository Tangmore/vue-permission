import axios from "axios";
import TlConfig from "../../tl.config.js";
// import router from "@/router";

// 在5s内响应
let secs = 5;  
let config = { 
  timeout: secs * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};
const instance = axios.create(config); 
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseURL = '/'        //关键代码
// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    config.headers['authorization'] = sessionStorage.token;
 
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default instance;
