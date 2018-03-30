<template>
	<div class="ub-box ub-ver-v z-height-100-percent">
		<div @click.stop="showList()" v-if="isShowList" class="layer"></div>
		<div style="z-index:2001;" class="ub-box ub-ver-v z-width-100-percent z-height-100-percent">
			<label class="form-label">{{label}}</label>
			<div class="z-relative ub-flex-1 ub-box ub-col">
				<div @click.stop="showList()" class="ub-box z-margin-left-20-rem z-curPonit z-select-none">
					<div class="ub-flex-1 form-select z-font-size-15 z-color-888">{{list[selectIdx]}}</div>
					<div class="form-select-i ub-box ub-ver">
						<i :class="{'form-select-i-active':isShowList}" class="iconfont icon-jiantou2 z-font-size-20 z-color-333"></i>
					</div>
				</div>
				<ul ref="list" class="z-overflow-hidde form-select-list ub-flex-1 ub-box ub-col z-margin-left-20-rem">
					<li @click.stop="clickItem(item, idx)" v-for="(item, idx) in list" class="z-width-100-percent ub-box ub-ver z-curPonit z-lineHeight-32 z-font-size-15 z-color-888">{{item}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['label', 'list', 'value'],
		data(){
			return{
				isShowList: false, 
				selectIdx: -1,
				listHeight: 0,
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.listHeight = this.list.length * 30 + 'px'
			})
		},
		methods:{
			showList(){
				this.$refs.list.classList.toggle('active')
				this.$refs.list.style.height = this.$refs.list.classList.contains('active') ? this.listHeight : '0px' 
				this.isShowList = !this.isShowList
			},
			clickItem(item, idx){
				this.showList()
				this.selectIdx = idx
				this.$emit('input', this.list[idx])
			},
		},
		watch:{
			value(newVal, oldVal){
				this.selectIdx = this.list.findIndex(v => v === newVal)
			}
		}
	}
</script>
<style scoped>
	.layer{position: fixed;top: 0;right: 0;bottom: 0;left: 0; background: transparent; z-index: 2000;}
	.form-label{position:relative;width:200px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.form-select{padding:.6rem 1.5rem;border-top:1px solid #ddd;border-bottom:1px solid #ddd;border-left:1px solid #ddd;border-radius:3px 0 0 0;}
	.form-select-i{transition:all .2s linear;border:1px solid #ddd;border-radius:0 3px 0 0;}
	.form-select-i i{transition:all .2s linear;}
	.form-select-i:hover{background:#2A3E50;}
	.form-select-i:hover i{color:#fff;}
	.form-select-i-active{transform:rotate(-90deg);}
	.form-select-list{opacity:0;height:0px;transition:all .2s linear;border-left:1px solid #ddd;border-right:1px solid #ddd;border-bottom:1px solid #ddd;border-radius:0 3px 3px 0;}
	.form-select-list li:first-child{margin-top:15px;}
	.form-select-list li{opacity:0;transition:all .2s linear;}
	.form-select-list li:hover{background:#f5f5f5;}
	.active{opacity: 1;}
	.active li{opacity: 1;}
</style>