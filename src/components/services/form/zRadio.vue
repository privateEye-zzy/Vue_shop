<template>
	<div class="ub-box ub-ver-v z-height-100-percent">
		<label class="form-label">{{label}}</label>
		<ul class="form-radio-list ub-flex-1 ub-box z-margin-left-20-rem">
			<li @click.stop="clickRedio(idx)" v-for="(item, idx) in list" class="ub-box ub-ver z-curPonit z-select-none z-margin-right-12-rem">
				<div :class="{'active': selectIdx===idx}" class="form-radio ub-box ub-ver">
					<span class="dot"></span>
				</div>
				<span class="z-margin-left-5-rem z-font-size-16 z-color-888">{{item}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['label', 'list', 'value'],
		data(){
			return{
				selectIdx: -1,
			}
		},
		mounted(){},
		methods:{
			clickRedio(idx){
				this.selectIdx = idx
				this.$emit('input', this.list[idx])
			}
		},
		watch:{
			value(newVal, oldVal){
				this.selectIdx = this.list.findIndex(v => v === newVal)
			}
		}
	}
</script>
<style scoped>
	.form-label{position:relative;width:200px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.form-radio-list{}
	.form-radio{background:#fff;border:1px solid #e0e0e0;width:15px;height:15px;border-radius:100%;transition:all .2s linear}
	.dot{transition:all .2s linear;transform:scale(0);width:7px;height:7px;background:#fff;border-radius:100%;}
	.active{background:#2A3E50;border:1px solid transparent;}
	.active .dot{transform:scale(1);}
</style>