<template>
	<div class="ub-box ub-ver-v z-height-100-percent">
		<label class="form-label">{{label}}</label>
		<div class="z-relative z-height-100-percent ub-flex-1 ub-box z-margin-left-20-rem">
			<textarea v-model="curValue" :placeholder="'请输入'+label+'...'" class="form-textarea"></textarea>
		</div>
	</div>
</template>
<script>
	export default {
		props:['label', 'value'],
		data(){
			return{
				curValue:''
			}
		},
		mounted(){
			this.curValue = this.value
		},
		methods:{},
		watch:{
			value(newVal, oldVal){this.curValue = this.value},
			curValue(newVal, oldVal){this.$emit('input', newVal)}
		},
	}
</script>
<style scoped>
	.form-label{position:relative;width:200px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.form-textarea{position:relative;border-radius:3px;display:inline-block;width:100%;height:100%;border:1px solid #ddd;box-sizing:border-box;padding:1rem;outline:none;font-size:1.4rem;color:#666;line-height:2.2rem;transition:all .2s linear;}
	.form-textarea:focus{border:1px solid #2A3E50;}
	::-webkit-input-placeholder{font-size:1.3rem;color:#ddd;}
</style>