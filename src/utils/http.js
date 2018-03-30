import axios from '../config/ajaxConfig'
class Http {
	constructor(){}
	static async get(url){
		return axios.get(url)
	}
	static async post(url,body){
		return axios.post(url, body)
	}
	static async put(url,body){
		return axios.put(url, body)
	}
	static async delete(url){
		return axios.delete(url)
	}
	static async ajax(url,method='get',data={}){
		return axios({url:url,method:method,data:data})
	}
}
export default Http
