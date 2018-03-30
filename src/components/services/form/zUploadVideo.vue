<template>
	<div class="z-height-100-percent z-width-100-percent ub-box ub-ver-v">
		<label class="form-label">{{label}}</label>
		<dl class="upload-body ub-flex-1 ub-box z-margin-left-20-rem">
			<input class="z-display-none" type="file" id="vdFile" />
			<video class="video" controls="controls" preload="meta" :src="value"></video>
			<label for="vdFile" class="upload-btn z-box-sizing z-margin-left-10-rem z-padding-all-10-rem ub-box ub-ver ub-col z-curPonit">
				<icon style="color:#ddd;" name="cloud-upload" scale="3"></icon>
				<div style="background:#2A3E50;" class="z-margin-top-10-rem z-padding-all-5-rem ub-box ub-ver z-box-sizing z-border-radius-4 z-font-size-14 z-color-fff z-select-none">点击上传</div>
			</label>
		</dl>
	</div>
</template>
<script>
	import FileVedioLoader from 'utils/FileVedioLoader.js'
	export default {
		props:['label', 'value'],
		data(){
			return{
				videoSrc: 'https://v.mifile.cn/b2c-mimall-media/079803c78170eaf692d936eba3978cc1.mp4',
				uploadBinaryArr: [],
			}
		},
		mounted(){
			const fileDom = document.querySelector('#vdFile')
			fileDom.addEventListener('change', () => {
				let file = fileDom.files[0]
				if(/video\/\w+/.test(file.type)){
					new FileVedioLoader(file, {
						upload: data => {this.$emit('getVideoBinaryService', data)}
					})
				}
				else{this.$toast({tip:'不是mp4格式', type:2})}
			})
		},
		methods: {},
	}
</script>
<style scoped>
	.form-label{position:relative;width:200px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.video{height:650px;width:800px;background:#000;}
	.video[src='']{background:#eee;}
	.upload-btn{width:100px;height:80px;border:1px dashed #ddd;}
</style>