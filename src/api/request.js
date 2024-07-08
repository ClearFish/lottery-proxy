import axios from 'axios';
import  PATH_URL  from './config'; // 导入请求基础 URL
import { getToken } from './auth'; // 导入获取用户令牌的函数
import { ElMessage } from "element-plus";
// import { useRouter } from "vue-router";
// const router = useRouter()
import router from "../router"
const instance = axios.create({
  baseURL: PATH_URL,
  timeout: 60000,
  dataType: 'json',
  header: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken}`, // 添加用户令牌到请求头，根据需要自行处理
  },
});

const pendingRequests = new Map();

const getRequestKey = (config) => {
  const { method, url, params, data } = config;
  return `${method}${url}${JSON.stringify(params)}${JSON.stringify(data)}`;
};

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const requestKey = getRequestKey(config);
    if (pendingRequests.has(requestKey)) {
      const cancelSource = pendingRequests.get(requestKey);
      cancelSource.cancel(`Duplicate request cancelled: ${requestKey}`);
      pendingRequests.delete(requestKey);
    }

    const cancelSource = axios.CancelToken.source();
    config.cancelToken = cancelSource.token;
    pendingRequests.set(requestKey, cancelSource);
    return config;
  },
  (error) => {
    console.error(`Error in request interceptor: ${error}`);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const requestKey = getRequestKey(response.config);
    pendingRequests.delete(requestKey);
    if(response.data.code != '0'){
      if(response.data.code == '1000' || response.data.code == '1001' || response.data.code == '1002' || response.data.code == '302' || response.data.code == '-2'  ){
        ElMessage.error(response.data.msg)
        setTimeout(() => {
          router.push("/login")
        },1500)
      }else if(response.data.code == '1'){
		  return false
	  }else{
        ElMessage.error(response.data.msg)
      }
    }
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
    } else {
      console.error(`Error in response interceptor: ${error}`);
      if (error.response && error.response.status === 401) {
        // 重定向到登录页面或执行其他操作
        ElMessage.error(response.data.msg);
        setTimeout(() => {
          router.push("/login")
        },1500)
      }
    }

    return Promise.reject(error);
  }
);

const request = async ({ method, url, data = null, params = null }) => {
  try {
    const response = await instance({
        method,
        url,
        data,
        params,
       
      });
    return response.data;
  } catch (error) {
    return error
  }
};

export default request;
