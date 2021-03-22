import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import store from "@/store/index";   
import api from '@/api' // 导入api接口
import '@/api/mock.js';
import ElementUI from 'element-ui' //element-ui的全部组件
import echarts from "echarts";

import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import '@/assets/css/normalize.css';
import '@/assets/css/common.scss';

Vue.config.productionTip = false;
 
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);//使用elementUI 


new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount("#app");
