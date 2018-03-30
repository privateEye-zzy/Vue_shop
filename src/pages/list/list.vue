<template>
	<div class="animated list-main z-padding-bottom-10-rem" style="visibility:hidden;">
		<div class="z-bg-color-fff">
			<div class="list-container z-padding-bottom-13-rem">
				<!--轮播图-->
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide"><img src="/static/1.jpg"/></div>
				        <div class="swiper-slide"><img src="/static/2.jpg"/></div>
				        <div class="swiper-slide"><img src="/static/3.jpg"/></div>
				    </div>
				    <div class="swiper-pagination"></div>		    
				    <div class="swiper-button-prev swiper-button-white"></div>
				    <div class="swiper-button-next swiper-button-white"></div>   
				</div>
				<!--推荐产品-->
				<dl class="z-margin-bottom-15-rem">
					<dt class="classifyTitle z-relative z-margin-left-10-rem z-padding-v-10-rem z-font-size-20 z-margin-bottom-15-rem z-color-333">推荐产品</dt>
					<div class="ub-box ub-between ub-wrap z-box-sizing-border">
						<dd v-for="(good, i) in goodsData['translation']" class="ub-box ub-ver card-warp translation" :key="i">
							<img src="/static/test.jpg" />
							<p class="z-font-size-18 z-color-fff">推荐商品</p>
							<div></div>
						</dd>
					</div>
				</dl>
			</div>
		</div>	
		<div class="z-padding-v-12-rem list-container">
			<!--产品分类-->
			<dl v-for="(goodsList, idx) in Array.from(Object.values(goodsData['classify']))" class="z-margin-bottom-15-rem">
				<div class="ub-box ub-ver-v ub-between">
					<dt class="classifyTitle z-margin-left-10-rem z-relative z-padding-v-10-rem z-font-size-20 z-margin-bottom-15-rem z-color-333">{{classifyDt[idx]}}</dt>
					<div class="lookAll z-padding-v-10-rem ub-box ub-ver z-curPonit z-margin-bottom-15-rem">
						<span class="z-font-size-16 z-color-333">查看全部</span>
						<i class="iconfont icon-jiantou3 z-font-size-20 z-color-333"></i>
					</div>
				</div>
				<div class="ub-box ub-wrap ub-between z-box-sizing-border">
					<dd @click="goDetail(good)" v-for="(good, i) in goodsList" class="card-warp" :key="i"><good-card :good="good"></good-card></dd>
				</div>
			</dl>
			<!--视频列表-->
			<dl class="z-margin-bottom-15-rem">
				<div class="ub-box ub-ver-v ub-between">
					<dt class="classifyTitle z-margin-left-10-rem z-relative z-padding-v-10-rem z-font-size-20 z-margin-bottom-15-rem z-color-333">精选视频</dt>
					<div class="lookAll z-padding-v-10-rem ub-box ub-ver z-curPonit z-margin-bottom-15-rem">
						<span class="z-font-size-16 z-color-333">查看全部</span>
						<i class="iconfont icon-jiantou3 z-font-size-20 z-color-333"></i>
					</div>
				</div>
				<div class="ub-box ub-wrap ub-between z-box-sizing-border">
					<dd v-for="(good, i) in goodsData['vedioList']" class="card-warp" :key="i">
						<vedio-card :good="good" @vcService="play"></vedio-card>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import goodCard from 'services/list/goodCard.vue'
	import vedioCard from 'services/list/vedioCard.vue'
	import goodsData from 'utils/list.json'
	import {initVisibility} from 'utils/visibility.js'
	import VedioDialog from 'utils/vedioDialog.js'
	let swiper = null
	export default {
		components: {goodCard, vedioCard,},
		data(){
			return{
				classifyDt: ['种公', '种母', '预留种'],
				goodsData:goodsData,
				isVedioDialog: false,
			}
		},
		mounted(){
			this.$nextTick(()=>{
				initVisibility(this.$el)
				this.initSwiper()
			})
		},
		methods:{
			initSwiper(){
				swiper = new Swiper('.swiper-container', {
			  		loop: true,
			  		autoplay:{
			  			delay: 3000,
			  			disableOnInteraction: false,
			  		},
			      	navigation: {
			        	nextEl: '.swiper-button-next',
			        	prevEl: '.swiper-button-prev',
			      	},
			       	pagination: {
				        el: '.swiper-pagination',
				        dynamicBullets: true,
				        clickable: true,
				   	},
				   	on:{
				   		click:e => {console.log(e.target)},
				   	}
			    })
			},
			play(good){	new VedioDialog(good['src'], good['title']).show()},
			goDetail(good){this.$router.push('detail')},
		}
	}
</script>
<style scoped>
	.list-main{background: #f5f5f5;}
	.list-container{width:1226px;position:relative;margin:auto;}
	.swiper-container {width:100%;}
	.swiper-slide{width:100%;height:100%;}
	.swiper-slide img{width:100%;}
	.translation{position:relative;overflow:hidden;background:rgba(0,0,0,.9);}
	.translation img{width:100%;opacity:.9;transition:all .2s linear;}
	.translation p{position:absolute;z-index:2;top:40%;left:50%;transform:translate(-50%,-40%);}
	.translation div{width:0;height:2px;background:#fff;z-index:3;position:absolute;z-index:2;top:50%;left:10%;transition:all .2s linear;}
	.translation:hover p{font-size:20px;}
	.translation:hover div{width:80%;}
	.translation:hover img{transform:scale(1.05);}
	.card-warp{box-sizing:border-box;margin:0 0px 14px 0;width:calc(100%/4 - 14px);cursor:pointer;}
	.lookAll span, .lookAll i{transition:all .2s linear;}
	.lookAll:hover span, .lookAll:hover i{color:#ff6700;}
	.classifyTitle:before{content:'';position:absolute;top:25%;left:-14px;width:4px;height:50%;background:#ff6700;}
</style>