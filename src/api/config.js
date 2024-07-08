const PATH_URL =
  process.env.NODE_ENV === "development"
    //  ? "http://10.13.101.4:9544/gs-dev" //理查德ip
    //  ? "http://10.13.101.5:9544/gs-dev" //汤米本地ip
    ? "http://8.222.255.108/gs-test" 
    // :  "/sd-qtapi-test/"; 
    // :  "https://h5.gs-club.win/api";//app打包
    :  "/api";//h5打包
// const BASE_URL = 'http://8.222.255.108/gs-test'
// // const BASE_URL = 'https://cptest.wans.run' //测试
// // const BASE_URL = 'http://10.13.121.2:9544/gs-dev' //本地测试
// // const BASE_URL = '/' //线上环境
export default PATH_URL