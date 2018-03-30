export const initVisibility = dom => {
	setTimeout(()=>{
		dom.style.visibility = 'visible'
		dom.classList.toggle('fadeIn')
	},500)
}