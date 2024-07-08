// 封装通用的请求函数
import  PATH_URL  from './config'; // 导入请求基础 URL
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter()
function request({ method, url, data,hd,type }) {
    const token = localStorage.getItem('token')
    return new Promise((resolve, reject) => {
      uni.request({
        url: hd ? `${hd}${url}` : `${PATH_URL}${url}`, // 拼接完整的请求路径
        method,
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Token': localStorage.getItem('token'), // 添加用户令牌到请求头，根据需要自行处理
            'Lang': 'zh_CN', // 添加用户令牌到请求头，根据需要自行处理
          },
        data,
        sslVerify: false,
        success: (response) => {
          if (response.statusCode === 200) {
            if(response.data.code != '0' && !type){
              if(response.data.code == '-2'  ){
                // uni.$u.toast(response.data.msg)
                ElMessage.error(response.data.msg)
                setTimeout(() => {
                  // uni.reLaunch({
                  //   url: '/pages/login/login',
                  // })
                  router.push('/login')
                },1500)
              }else if(response.data.code == '1' && url == '/gs-api/lottery/result'){
                }else{
                  // uni.$u.toast(response.data.msg)
                  ElMessage.error(response.data.msg)
                }
              }
            resolve(response.data);
          } else {
            reject(new Error('请求失败'));
          }
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }
export default request;
