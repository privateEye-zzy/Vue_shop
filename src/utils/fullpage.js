let currIdx = 0
class FullPage{
	constructor(parentDom, pageDoms, callback=function(){}){
		this.parentDom = parentDom
		this.pageDoms = pageDoms
		this.pageDoms[currIdx].style.transform = 'translateY(0)'
		this.parentDom.addEventListener('wheel', this.debounce(e => {this.wheel(e)}, 250))
		this.callback = callback
	}
	debounce(action, wait=100){
		let timer = null
		return function() {
			if(timer){
				clearTimeout(timer)
				timer = null
			}
			timer = setTimeout(() => {action.apply(this, arguments)}, wait)
		}
	}
	wheel(e){
		e.preventDefault()
		let wheelDesc = e.deltaY > 0 ? 'down':'up'
		this.slidePage(wheelDesc)
	}
	slidePage(wheelDesc){
		wheelDesc === 'down' ? currIdx += 1 : currIdx -= 1
		if(currIdx < 0) {currIdx = 0;return}
		if(currIdx > this.pageDoms.length - 1) {currIdx = this.pageDoms.length - 1;return}
		Array.from(this.pageDoms).forEach((dom, idx) => {
			if(idx < currIdx) {dom.style.transform = 'translateY(100%)'}
			else if(idx === currIdx){dom.style.transform = 'translateY(0)'}
			else if(idx > currIdx){dom.style.transform = 'translateY(-100%)'}
		})
		this.callback(currIdx)
	}
}
export default FullPage
