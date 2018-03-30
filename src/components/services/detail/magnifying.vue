<template>
	<div style="width:450px;" class="z-width-100-percent z-relative ub-box ub-col ub-ver z-box-sizing-border">
		<div ref="clipwrap" @mouseenter="magnifyingStart" @mouseleave="magnifyingEnd" @mousemove="magnifyingMove($event)" class="z-relative">
			<img class="showImg" ref="showImg" :src="showImg"/>
			<div ref="clip" class="clip animated fadeIn"></div>
		</div>
		<dl class="z-margin-top-10-rem ub-box ub-between z-width-100-percent">
			<dd @mouseenter="changeShowImg(idx)" v-for="(img, idx) in showImgArr" class="thumbItem" :class="{thumbItemActive:showIdx===idx}">
				<img :src="img" />
			</dd>
		</dl>
		<canvas class="magnifying" id="canvas"></canvas>
	</div>
</template>
<script>
	let self, currMagnifyingImg = '', clipDom = null, canvas = null, ctx = null, scale = 1
	export default {
		data(){
			return{
				isMagnifyingFlag: false,
				showIdx: 0,
				showImg: '',
				showImgArr: ['/static/test3.jpg', '/static/test2.jpg', '/static/test1.jpg', '/static/test.jpg'],
			}
		},
		mounted(){
			self = this
			this.showImg = this.showImgArr[0]
			canvas = this.$el.querySelector("#canvas")
	    	ctx = canvas.getContext("2d")
	    	clipDom = this.$el.querySelector(".clip")
		},
		methods:{
			changeShowImg(idx){
				this.showIdx = idx
				this.showImg = this.showImgArr[idx]
			},
			initCanvas(){
				return new Promise(resolve => {
					currMagnifyingImg = new Image()
					currMagnifyingImg.src = this.showImg
					currMagnifyingImg.onload = function(){
						canvas.width = this.width
						canvas.height = this.height
						scale = canvas.width / self.$refs.showImg.offsetWidth
						resolve()
					}
				})
			},
			toXY(x, y, dom){
				return {dx:x - dom.getBoundingClientRect().left, dy:y - dom.getBoundingClientRect().top}
			},
			clipMove(e){
				let {dx, dy} = this.toXY(e.pageX, e.pageY, this.$refs.clipwrap)
				dx = dx - clipDom.offsetWidth*0.5 < 0 ? 0 : dx - clipDom.offsetWidth*0.5
				dy = dy - clipDom.offsetHeight*0.5 < 0 ? 0 : dy - clipDom.offsetHeight*0.5
				if(dx + clipDom.offsetWidth > this.$refs.clipwrap.offsetWidth){
					dx = this.$refs.clipwrap.offsetWidth - clipDom.offsetWidth 
				}
				if(dy+clipDom.offsetHeight > this.$refs.clipwrap.offsetHeight){
					dy = this.$refs.clipwrap.offsetHeight - clipDom.offsetHeight
				}
				clipDom.style.transform = 'translate('+dx+'px,'+dy+'px)'
			},
			canvasMove(e){
				let {dx, dy} = this.toXY(e.pageX, e.pageY, this.$refs.clipwrap)
				dx *= scale
				dy *= scale
				let sWidth = clipDom.offsetWidth, sHeight = clipDom.offsetHeight
				if(dx + sWidth > canvas.width){
					dx = canvas.width - sWidth
				}
				if(dy + sHeight > canvas.height){
					dy = canvas.height - sHeight
				}
				ctx.clearRect(0, 0, canvas.width, canvas.height)
				ctx.drawImage(currMagnifyingImg, dx, dy, sWidth , sHeight, 0, 0, canvas.width, canvas.height)
			},
			async magnifyingStart(){
				await this.initCanvas()
				canvas.style.zIndex = 1
				clipDom.style.zIndex = 1
				this.isMagnifyingFlag = true
			},
			magnifyingEnd(){
				canvas.style.zIndex = -1
				clipDom.style.zIndex = -1
				this.isMagnifyingFlag = false
			},
			magnifyingMove(e){
				if(this.isMagnifyingFlag){
					this.clipMove(e)
					this.canvasMove(e)
				}
			}
		}
	}
</script>
<style scoped>
	.showImg{width:100%;height:350px;}
	.thumbItem{border:2px solid transparent;width:23%;overflow:hidden;cursor:pointer;}
	.thumbItemActive{border:2px solid #ff6700}
	.thumbItem img {width:100%;}
	.magnifying{position:absolute;top:0;left:106%;z-index:-1;border:1px solid #ddd;}
	.clip{position:absolute;top:0;left:0;z-index:-1;background:rgba(0,0,0,.5);width:200px;height:200px;cursor:move;}
</style>