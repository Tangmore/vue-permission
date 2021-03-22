// import TlConfig from "../../tl.config.js";
import axios from '@/plugins/axios'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const httpRequest = {
   
    login() {
        return axios({ method: 'get', url: '/user/login' });
    },
    getUserByToken() {
        return axios({ method: 'get', url: '/user/user-info-by-token' });
    },
    comboList () {        
        return axios({ method: 'post', url: '/system/user/combobox' });
    },
//      login (params) {        
//         return axios.post('/login', qs.stringify(params));    
//     },
//     getCompanyDisplayList () {        
//         return axios.post('/server/screenDisplay/screenDisplayList');    
//     }
};

export default httpRequest;