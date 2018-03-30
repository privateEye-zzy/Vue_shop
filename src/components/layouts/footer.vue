<template>
	<div class="footer ub-box ub-col animated" style="visibility:hidden;">
 		<div class="footer-container ub-box ub-col">
 			<dl class="ub-box ub-between">
 				<div class="footItem ub-flex-1 ub-box ub-col ub-ver">
 					<dt class="z-font-size-15 z-margin-bottom-25-rem">帮助中心</dt>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">操作指南</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">购物指南</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">相关下载</dd>
 				</div>
 				<div class="footItem ub-flex-1 ub-box ub-col ub-ver">
 					<dt class="z-font-size-15 z-margin-bottom-25-rem">服务支持</dt>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">售后政策</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">售后政策</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">相关下载</dd>
 				</div>
 				<div class="footItem ub-flex-1  ub-box ub-col ub-ver">
 					<dt class="z-font-size-15 z-margin-bottom-25-rem">线下门店</dt>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">昆明门店</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">服务门店</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">零售门店</dd>
 				</div>
 				<div class="footItem ub-flex-1 ub-box ub-col ub-ver">
 					<dt class="z-font-size-15 z-margin-bottom-25-rem">关于我们</dt>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">新浪微博</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">官方微信</dd>
 					<dd class="z-font-size-13 z-color-888 z-select-none z-margin-bottom-10-rem">官方QQ</dd>
 				</div>
 				<div class="z-margin-left-20-rem ub-box ub-col ub-ver">
 					<dt style="color:#ff6700;" class="z-select-none z-font-size-30 z-margin-bottom-15-rem">400-100-123</dt>
 					<span class="z-select-none z-font-size-12 z-color-666">周一至周日8:00-18:00</span>
 				</div>
 			</dl>
 			<div class="ub-box ub-ver z-margin-top-25-rem">
 				<span class="z-select-none z-color-888 z-font-size-12">Copyright © 2004-2018   京ICP备14027692号    京ICP证151131号    京公网安备 11010802020063号 </span>
 			</div>
 		</div>
 		<!--侧边导航-->
 		<dl class="navBody ub-box ub-col">
 			<dd @click.stop="back" class="navItem ub-box ub-ver">
 				<i class="iconfont icon-jiantou1 z-curPonit z-font-size-20" style="transform:rotate(-90deg);"></i>
 			</dd>
 			<dd class="navItem ub-box ub-ver">
 				<i class="iconfont icon-shouyexinxi z-curPonit z-font-size-20"></i>
 			</dd>
 			<dd class="navItem ub-box ub-ver">
 				<i class="iconfont icon-bianji z-curPonit z-font-size-20"></i>
 			</dd>
 		</dl>
 	</div> 
</template>
<script>
	import {initVisibility} from 'utils/visibility.js'
	export default {
		data(){
			return{}
		},
		mounted(){initVisibility(this.$el)},
		methods:{
			back(){window.scrollTo(0,0)},
		}
	}
</script>
<style scoped>
	.footer{border-top:3px solid #ff6700;background:#fff;width:100%;padding:3rem 0;}
	.footer-container{width:1226px;position:relative;margin:auto;}
	.footItem {border-right:1px solid #ddd;}
	.footer-container dd{cursor:pointer;transition:all .2s linear;}
	.footer-container dd:hover{color:#ff6700}
	.navBody{z-index:100;position:fixed;bottom:1rem;right:0;}
	.navItem{position:relative;transition:all .2s linear;width:35px;height:35px;margin-bottom:2px;background:#fff;}
	.navItem:hover{background:#ff6700;}
	.navItem:hover i{color:#fff;}
	.navItem:nth-child(1):before, .navItem:nth-child(3):before{transition:all .2s linear;z-index:-1;color:#fff;font-size:1.1rem;border-radius:3px 0 0 3px;position:absolute;top:0;left:0px;width:35px;height:35px;background:#ff6700;display:flex;justify-content:center;align-items:center;}
	.navItem:nth-child(1):before{content:'顶部';}
	.navItem:nth-child(3):before{content:'反馈';}
	.navItem:nth-child(1):hover:before, .navItem:nth-child(3):hover:before{left:-35px;}
	.navItem:nth-child(2):before{content:'';background-image:url(/static/qr.png);background-size:cover;opacity:0;width:100px;height:100px;position:absolute;top:0px;left:0px;}
	.navItem:nth-child(2):hover:before{top:-65px;left:-105px;opacity:1;}
</style>