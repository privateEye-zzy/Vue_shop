<template>
	<div class="header animated" style="visibility:hidden;">
		<dl class="header-container ub-between ub-box z-padding-v-15-rem">
			<div @click.stop="$router.replace('/')" class="logo ub-box ub-ver z-border-radius-3 z-curPonit">
				<span class="z-select-none z-font-size-20 z-color-fff">Logo</span>
			</div>
			<div class="ub-flex-1 ub-box ub-ver-v z-margin-left-20-rem">
				<dd @click.stop="gotoPage(idx)" v-for="(nav, idx) in navArr" :class="{'headerItemActive': curIdx==idx}" class="headerItem z-margin-right-12-rem z-select-none z-curPonit z-font-size-16 z-color-333">{{nav}}</dd>
			</div>
			<div class="ub-box ub-ver">
				<input v-model='searchTxt' placeholder="输入搜索关键词..." class="searchInput z-outline-none z-color-666 z-font-size-15"/>
				<span class="searchBtn z-curPonit ub-box ub-ver">
					<i class="iconfont icon-sousuo z-color-333 z-font-size-22"></i>
				</span>
			</div>
		</dl>
	</div>
</template>
<script>
	import {initVisibility} from 'utils/visibility.js'
	let that = null
	export default {
		data(){
			return{
				searchTxt: '',
				navArr: ['商城列表', '用户好评', '关于我们'],
				curIdx: 0,
				menusMap:{
					'/': 0,
					'/comment': 1,
					'/about': 2,
				}
			}
		},
		mounted(){
			that = this
			initVisibility(this.$el)
		},
		watch: {
			'$route': (to, from) => {
				that.searchTxt = ''
				that.curIdx = that.menusMap[to.path] 
			}
    	},
		methods:{
			gotoPage(idx){
				this.curIdx = idx
				switch (idx){
					case 0:{this.$router.push('/');break}
					case 1:{this.$router.push('comment');break}
					case 2:{this.$router.push('about');break}
					default: break
				}
			}
		}
	}
</script>
<style scoped>
	.header{background:#fff;width:100%;box-shadow:0px 5px 5px rgba(0,0,0,0.07);margin-bottom:1rem;}
	.header-container{width:1226px;position:relative;margin:auto;}
	.logo{width:55px;height:55px;background:#ff6700;}
	.headerItem {padding: 1rem;}
	.headerItemActive{color:#ff6700;}
	.headerItemActive{border-bottom:3px solid #ff6700;color:#ff6700;}
	.searchInput{border-radius:4px 0 0 4px;border:1px solid #e0e0e0;width:200px;height:40px;padding:0 .5rem;}
	.searchBtn{transition:all .2s linear;padding:0 .7rem;height:40px;border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;border-right:1px solid #e0e0e0;border-radius:0 4px 4px 0;}
	.searchBtn:hover{background:#ff6700;}
	.searchBtn:hover i{color:#fff;}
	.header-container dd{cursor:pointer;transition:all .2s linear;}
	.header-container dd:hover{color:#ff6700}
</style>