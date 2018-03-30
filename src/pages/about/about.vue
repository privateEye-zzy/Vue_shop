<template>
	<div class="animated" style="visibility:hidden;">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="/static/f1.jpg"/></div>
		        <div class="swiper-slide"><img src="/static/f2.jpg"/></div>
		        <div class="swiper-slide"><img src="/static/f3.jpg"/></div>
		    	<div class="swiper-slide"><img src="/static/f4.jpg"/></div>
		    </div>
		    <div class="swiper-pagination"></div>		    
		    <div class="swiper-button-prev swiper-button-white"></div>
		    <div class="swiper-button-next swiper-button-white"></div>   
		</div>
	</div>
</template>
<script>
	import {initVisibility} from 'utils/visibility.js'
	import Swiper from 'swiper'
	export default {
		data(){
			return{}
		},
		mounted(){
			initVisibility(this.$el)
			var swiper = new Swiper('.swiper-container', {
		      loop: true,
		      pagination: {
		        el: '.swiper-pagination',
		        type: 'progressbar',
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    })
		},
		methods:{
			pageChangeEnd(curIdx){
				console.log(curIdx)
			}
		},
	}
</script>
<style scoped>
	.swiper-container {width:100%;height:90vh;}
	.swiper-slide{width:100%;height:100%;}
	.swiper-slide img{width:100%;object-fit: cover;}
</style>