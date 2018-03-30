// 原生JS动画
class Loading {
	constructor(){
		this.shadowDiv = null
		this.parent = null
	}
	show(){
		this.shadowDiv = document.createElement('div')
		this.shadowDiv.className = 'shadowLayer'
		document.body.appendChild(this.shadowDiv)
		this.parent = document.createElement('div')
		this.parent.className = 'spinner ub-box ub-ver'
		this.parent.innerHTML = '<div class="load"></div><div class="load"></div><div class="load"></div><div class="load"></div><div class="load"></div></div><div class="load"></div>'
		document.body.appendChild(this.parent)
	}
	remove(){
		if(this.shadowDiv && this.parent){
			document.body.removeChild(this.shadowDiv)
			document.body.removeChild(this.parent)
		}
	}
}
export default new Loading()