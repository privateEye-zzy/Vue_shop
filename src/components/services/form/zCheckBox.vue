<template>
	<div class="ub-box ub-ver-v z-height-100-percent">
		<label class="form-label">{{label}}</label>
		<ul class="form-check-list ub-flex-1 ub-box ub-wrap z-margin-left-20-rem">
			<li @click.stop="clickCheckBox(item, idx)" v-for="(item, idx) in list" :class="{'active':selectArr.includes(idx)}" class="form-check z-font-size-15 z-color-888 z-curPonit ub-box ub-ver z-margin-right-12-rem">{{item}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['label', 'list', 'value'],
		data(){
			return{
				selectArr:[]
			}
		},
		mounted(){},
		methods:{
			clickCheckBox(item, idx){
				let ret = []
				if(this.selectArr.includes(idx)){
					this.selectArr.splice(this.selectArr.findIndex((value, index) => value === idx), 1)
				}else{
					this.selectArr.push(idx)
				}
				this.selectArr.sort((a, b) => a - b)
				this.selectArr.forEach(sIdx => {ret.push(this.list[sIdx])})
				this.$emit('input', ret.join())
			}
		},
		watch:{
			value(newVal, oldVal){
				let arr = newVal.split(',')	
				this.selectArr = []
				this.list.forEach((val, idx) => {
					if(arr.includes(val)){this.selectArr.push(idx)}
				})
			}
		}
	}
</script>
<style scoped>
	.form-label{position:relative;width:200px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.form-check-list{}
	.form-check{border:1px solid #e0e0e0;border-radius:3px;padding:1rem 1.5rem;margin-bottom:1rem;transition:all .2s linear;}
	.form-check:hover{border:1px solid #2A3E50;color:#2A3E50;}
	.active{border:1px solid #2A3E50;color:#2A3E50;}
</style>