let Toast = {}
Toast.install = function (Vue, options) {
    Vue.prototype.$toast = (options) => {
    	let flag = document.querySelector('.toast') !== null ? false : true
    	if(!flag) {return}
     	let toastVue = Vue.extend(require('./Toast.vue').default)
     	let tpl = new toastVue({data:options}).$mount().$el
     	document.body.appendChild(tpl)
    }
}
module.exports = Toast