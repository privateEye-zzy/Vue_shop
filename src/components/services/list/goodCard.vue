<template>
	<div class="card z-overflow-hidden ub-box ub-col ub-ver">
		<div v-if="good.type.length > 0" :class="{'tip-new':good.type==='新品', 'tip-hot':good.type==='火热', 'tip-zhe':good.type==='打折'}" class="tip ub-box ub-ver z-font-size-14 z-color-fff">{{good.type}}</div>
		<img class="ub-flex-1" src="/static/test1.jpg"/>
		<div class="ub-box ub-col z-padding-v-10-rem">
			<span class="z-font-size-18 z-margin-bottom-10-rem z-color-666">{{good.title}}</span>
			<span class="z-font-size-14 z-margin-bottom-10-rem z-color-999">{{good.subTitle}}</span>
			<span class="z-font-size-14" style="color:#ff6700;font-weight:700;">{{good.price}}元</span>
		</div>
		<div class="review-wrapper ub-box ub-ver">
			<p class="z-color-fff z-font-size-16">{{good.desc}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		props:['good'],
		data(){
			return{}
		},
		mounted(){},
	}
</script>
<style scoped>
	.card{box-sizing:border-box;position:relative;width:100%;height:100%;background:#fff;cursor:pointer;transition: all .2s linear}
	.card:hover{box-shadow:0 15px 30px rgba(0,0,0,0.1);transform:translate3d(0, -2px, 0)}
	.card img{width:100%;}
	.review-wrapper{position:absolute;left:0;bottom:0;width:100%;height:0px;overflow:hidden;background:#ff6700;transition: all .2s linear}
	.card:hover .review-wrapper{height:88px;}
	.tip{position:absolute;top:0%;left:50%;transform:translateX(-50%);width:64px;height:20px;}
	.tip-new{background: #83c44e;}
	.tip-zhe{background: #ff6700;}
	.tip-hot{background: #e53935;}
</style>
