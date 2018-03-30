<template>
	<div class="z-select-none">
		<div @click.stop="close()" class="confirmShadow"></div>
		<dl ref="confirmBody" class="confirmBody ub-box ub-col">
			<dd class="confirmTitle z-font-size-16 z-color-fff ub-box ub-ver">确认提示</dd>
			<dd class="z-padding-v-20-rem z-color-666 z-font-size-15 ub-box ub-ver">{{info}}</dd>
			<div class="ub-flex-1 ub-box ub-ver z-margin-bottom-15-rem">
				<dd class="confirmBtn z-relative z-color-fff z-curPonit" @click="clickBtn(true)" style="background:#2ebace;">确认</dd>
				<dd class="confirmBtn z-relative z-color-fff z-curPonit" @click="clickBtn(false)" style="">取消</dd>
			</div>
		</dl>
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		},
		methods:{
			close(){
				document.body.removeChild(this.$el)
			},
			clickBtn(type){
				document.body.removeChild(this.$el)
				this.click(type)
			}
		}
	}
</script>
<style scoped>
	.confirmShadow{position:fixed;z-index:9900;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.7);}
	.confirmBody{position:fixed;z-index:9909;top:0;left:50%;transform:translateX(-50%);width:32rem;background:#fff;border-radius:4px;box-shadow: 0 0 10px 3px rgba(0,0,0,.2);animation:confirmAnimStart .5s forwards}
	.confirmTitle{padding:1.4rem 0;background:#2ebace; border-radius:4px;}
	.confirmBtn{padding:.5rem 1.1rem; border-radius: 2px;font-size: 13px;}
	.confirmBtn:first-child{margin-right:1.5rem; border: 1px solid #2ebace;}
	.confirmBtn:first-child:hover{ border: 1px solid #54cdd6; }
	.confirmBtn:last-child{color: #535353; border: 1px solid #cfcfcf;}
	.confirmBtn:last-child:hover{ border: 1px solid #a0a0a0; }
	@keyframes confirmAnimStart{
		from{top:5%}
		to{top:30%}
	}
</style>