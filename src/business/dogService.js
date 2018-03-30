import Http from 'utils/http.js'
class DogService {
	constructor(){}
	static async transformToVue(urlType, method, data){
		let response = await Http.ajax(urlType, method, data)
		let vueData = []
		switch (urlType){
			case '/dog/list':{vueData = getList(response);break}
			default:{vueData = response;break}
		}
		return vueData
	}
	static async transformToService(urlType, method, data) {
		let response = await Http.ajax(urlType, method, data)
		return response
	}
}
/********离散函数**********/
function getList(data){
	let ret = []
	data.forEach(item => {
		ret.push({
			id: item['_id'],
			goodId: item['goodId'],
			name: item['name'],
			age: item['age'],
			sex: item['sex'],
			varieties: item['varieties'],
			price: item['price'],
			sell_state: item['sell_state'],
		})
	})
	return ret
}
export default DogService