import axios from 'axios'
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://192.168.1.110:3003'
// 添加请求拦截器 
axios.interceptors.request.use(config => {
	return config
} , error => Promise.reject(error))
// 添加响应拦截器
axios.interceptors.response.use(async function (response){
	let data = response.data
	return data
} , error => Promise.reject(error))
export default axios