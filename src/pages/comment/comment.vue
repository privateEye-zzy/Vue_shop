<template>
	<div class="animated" style="visibility:hidden;">
		<div class="content ub-box ub-ver" style="height:60vh;">
			<p class="z-font-size-16">comments</p>
		</div>
	</div>
</template>
<script>
	import {initVisibility} from 'utils/visibility.js'
	export default {
		components: {},
		data(){
			return{}
		},
		mounted(){
			this.$nextTick(()=>{
				initVisibility(this.$el)
			})
		},
		methods:{}
	}
</script>
<style scoped="scoped">
</style>