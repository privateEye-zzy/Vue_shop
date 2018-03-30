<template>
	<div class="toast ub-box ub-ver animated flipInX" :style="{'border-left-color': background}">
		<span class="z-font-size-15 z-font-weight-bold z-margin-h-15-rem letter-spacing-1">{{tip}}</span>
	</div>
</template>
<script>
	export default {
		data(){return {background:''}},
		mounted(){
			switch(this.type|0){
				case 1: {this.background = 'rgba(46,186,206,1)';break} // 成功
				case 2: {this.background = 'rgba(246,115,88,1)';break} // 失败
				case 3: {this.background = 'rgba(255,166,59,1)';break} // 警告
			}
			this.$el.addEventListener('animationend',(evt)=>{
				if(this.$el.classList.contains('flipInX')) {
					setTimeout(()=>{this.$el.classList.remove('flipInX'); this.$el.classList.add('flipOutX');},1000)
				}else if(this.$el.classList.contains('flipOutX')){
					document.body.removeChild(this.$el)
				}
			})
		}
		// bounceOut bounceIn
	}
</script>
<style scoped>
	.toast{position:fixed; z-index:999; top:0; left:calc(50% - 12rem - 3px); min-width:24rem; height:4.1rem; background: rgba(255,255,255,.9); color: #333; border: 1px solid rgba(255,255,255,.9); border-left: 5px solid rgba(255,255,255,0); border-radius: 4px;}
</style>