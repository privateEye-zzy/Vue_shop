class VedioDialog{
	constructor(src, title){
		this.mask = null
		this.diabody = null
		this.src = src
		this.title = title
	}
	show(){
		this.createMask()
		this.createBody()
	}
	close(){
		document.body.removeChild(this.mask)
		document.body.removeChild(this.diabody)
	}
	createMask(){
		this.mask = document.createElement('div')
		this.mask.className = 'vedio-mask'
		document.body.appendChild(this.mask)
	}
	createBody(){
		this.diabody = document.createElement('div')
		this.diabody.className = 'vedio-diabody animated fadeIn ub-box ub-col'
		let titleDiv = document.createElement('div')
		titleDiv.style.background = '#f5f5f5'
		titleDiv.className = 'ub-box ub-ver ub-between z-box-sizing-border z-padding-all-15-rem'
		let p = document.createElement('p')
		p.className = 'z-font-size-17 z-color-666'
		p.innerHTML = this.title
		let i = document.createElement('i')
		i.className = 'vedio-close z-curPonit z-font-size-30 z-color-666 iconfont icon-tianjia'
		i.addEventListener('click', ()=>{this.close()})
		titleDiv.appendChild(p)
		titleDiv.appendChild(i)
		this.diabody.appendChild(titleDiv)
		let vd = document.createElement('video')
		vd.className = 'vedio-vd'
		vd.setAttribute('controls', 'controls')
		vd.setAttribute('preload', 'meta')
		vd.setAttribute('src', this.src)
		this.diabody.appendChild(vd)
		document.body.appendChild(this.diabody)
	}
}
export default VedioDialog