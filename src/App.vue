<template>
 <div id="app">
 	<my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
 </div>
</template>
<script>
	import myHeader from 'layouts/header.vue'
	import myFooter from 'layouts/footer.vue'
	export default {
	 	components: {myHeader, myFooter},
	  	name: 'App',
	}
</script>
<style>
	#app{position:relative;overflow-x:hidden;}
	::-webkit-scrollbar {width:6px;}
	::-webkit-scrollbar-track {border-radius:6px;background:#eee;}
	::-webkit-scrollbar-thumb {border-radius:6px;background:#ff6700;}
</style>
