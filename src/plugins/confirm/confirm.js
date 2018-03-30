let Confirm = {}
Confirm.install = function (Vue, options) {
    Vue.prototype.$confirm = (options) => {
     	let confirmVue = Vue.extend(require('./confirm.vue').default)
     	let tpl = new confirmVue({data:options}).$mount().$el
     	document.body.appendChild(tpl)
    }
}
module.exports = Confirm