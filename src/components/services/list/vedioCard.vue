<template>
	<div @click.stop="$emit('vcService', good)" class="card z-overflow-hidden ub-box ub-col ub-ver">
		<div class="z-relative ub-flex-1">
			<img src="/static/test1.jpg"/>
			<span class="play ub-box ub-ver">
				<i class="z-font-weight-bold iconfont icon-jiantou1 z-font-size-20 z-color-fff"></i>
			</span>
		</div>
		<div class="ub-box ub-col z-padding-v-10-rem">
			<span class="z-font-size-18 z-margin-bottom-10-rem z-color-666">{{good.title}}</span>
			<span class="z-font-size-14 z-margin-bottom-10-rem z-color-999">{{good.subTitle}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		props:['good'],
		data(){
			return{}
		},
		mounted(){
		},
		methods:{},
	}
</script>
<style scoped>
	.card{box-sizing:border-box;position:relative;width:100%;height:100%;background:#fff;cursor:pointer;transition: all .2s linear}
	.card:hover{box-shadow:0 15px 30px rgba(0,0,0,0.1);transform:translate3d(0, -2px, 0)}
	.card:hover .play{background:#ff6700;border:2px solid transparent}
	.card img{width:100%;background:#ccc;}
	.play{transition: all .2s linear;position:absolute;left:1rem;bottom:1rem;width:32px;height:20px;border-radius:12px;border:2px solid #fff;background:rgba(0,0,0,.6);}
</style>