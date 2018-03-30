<template>
	<div class="z-height-100-percent z-width-100-percent ub-box ub-ver-v">
		<label class="form-label">{{label}}</label>
		<dl class="z-margin-left-20-rem ub-flex-1 ub-box z-width-100-percent z-height-100-percent">
			<input @change="fileChange($event)" class="z-display-none" type="file" :id="'file'+fileId" />
			<dd class="z-relative" style="border:1px solid #eee;">
				<canvas :id="'myCanvas'+fileId"></canvas>
			</dd>
			<ul class="z-select-none z-margin-left-10-rem thumb-list ub-align-content-start ub-box ub-wrap">
				<li @click.stop="clickThumb(idx)" class="thumb" v-for="(base64, idx) in uploadImgs">
					<div :class="{'active':showIdx===idx}" class="thumbActive"></div>
					<div @click.stop="deleteFile(idx)" class="thumb-btn ub-box ub-ver">
						<icon style="color:#fff;" name="archive" scale='1'></icon>
					</div>
					<img :src="base64"/>
				</li>
			</ul>
			<label :for="'file'+fileId" class="upload z-box-sizing z-margin-left-10-rem z-padding-all-10-rem ub-box ub-ver ub-col z-curPonit">
				<icon style="color:#ddd;" name="cloud-upload" scale="3"></icon>
				<div style="background:#2A3E50;" class="z-margin-top-10-rem z-padding-all-5-rem ub-box ub-ver z-box-sizing z-border-radius-4 z-font-size-14 z-color-fff z-select-none">点击上传</div>
			</label>
		</dl>
	</div>
</template>
<script>
	export default {
		props:['label', 'value'],
		data(){
			return{
				canvas:null,
				ctx: null,
				showIdx: 0, // 当前展示的图片索引
				uploadImgs:[],
				fileId: Math.ceil(Math.random() * 1000)
			}
		},
		mounted(){
			this.canvas = this.$el.querySelector('#myCanvas' + this.fileId)
			this.canvas.width = this.$el.offsetWidth - 150 - 220 - 250
			this.canvas.height = this.$el.offsetHeight
			this.ctx = this.canvas.getContext('2d')
			this.ctx.font = '14px microsoft yahei'
		},
		methods:{
			fileChange(e){
				let fileDom = e.target
				let file = fileDom.files[0]
				if(file){
					if(/image\/\w+/.test(file.type)){this.uploadFile(file)}
					else{this.$toast({tip:'图片格式不正确', type:2})}	
				}
			},
			uploadFile(file){
				let reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => {
					this.uploadImgs.push(reader.result)
					this.showIdx = this.uploadImgs.length - 1
					this.drawCanvas(reader.result)
					this.$emit('input', this.uploadImgs)
				}
			},
			clickThumb(idx){
				if(idx === this.showIdx){return}
				this.showIdx = idx
				this.drawCanvas(this.uploadImgs[this.showIdx])
			},
			deleteFile(idx){
				this.uploadImgs.splice(idx, 1)
				this.showIdx = this.uploadImgs.length - 1 < 0 ? 0 : this.uploadImgs.length - 1 
				this.drawCanvas(this.uploadImgs[this.showIdx])
				this.$emit('input', this.uploadImgs)
			},
			drawCanvas(base64, type='addCode'){
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
				if(base64){
					let img = new Image()
					img.src = base64
					img.onload = () => {
						this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
						if(type === 'addCode'){
							this.ctx.fillStyle = 'rgba(255,255,255,0.8)'
							this.ctx.fillText('这是水印', this.canvas.width - 60, this.canvas.height - 10)	
						}
					}
				}
			},
		},
		watch:{
			value(newVal, oldVal){
				this.uploadImgs = newVal
				this.drawCanvas(this.uploadImgs[0])
			},
		},
	}
</script>
<style scoped>
	.form-label{position:relative;width:200px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.upload{width:100px;height:80px;border:1px dashed #ddd;}
	.thumb-list{width:250px;height:100%;overflow-y:auto;background:#eee;}
	.thumb{position:relative;transition:all .2s linear;cursor:pointer;overflow:hidden;width:50%;height:100px;padding:0 .4rem .4rem 0;box-sizing: border-box;}
	.thumbActive{z-index:-1;position:absolute;width:calc(100% - 0.4rem);height:calc(100% - 0.4rem);top:0;left:0;background:rgba(0,0,0,.3);}
	.thumb-btn{position:absolute;right:0.4rem;top:0;width:25px;height:20px;background:rgba(0,0,0,.8);z-index:2;cursor:pointer;}
	.thumb img{transition:all .2s linear;opacity:1;width:100%;height:100%;object-fit:cover;}
	.thumb:hover img{transform:scale(1.03);}
	.thumb:hover .thumbActive{z-index:1;}
	.active{z-index:1;}
</style>