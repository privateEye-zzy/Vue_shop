<template>
	<div class="ub-box ub-ver-v">
		<label class="z-display-inlineBlock form-label">{{label}}</label>
		<div class="z-relative ub-flex-1 ub-box z-margin-left-20-rem">
			<input v-model="curValue" :readonly="readonly" :placeholder="'请输入'+label+'...'" @focus="$emit('focus')" :type="type" class="ub-flex-1 form-input"/>
			<div class="form-input-div"></div>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			type: {
				type: String,
				default: 'text'
			},
			value:'',
			label: '',
			readonly: {
				type: Boolean,
				default: false
			},
		},
		data(){
			return{
				curValue:''
			}
		},
		mounted(){
			this.curValue = this.value
		},
		watch:{
			value(newVal, oldVal){this.curValue = this.value},
			curValue(newVal, oldVal){this.$emit('input', newVal)}
		},
		methods:{},
	}
</script>
<style scoped>
	.form-label{position:relative;width:200px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.form-input{background:transparent;position:relative;padding:.3rem .5rem;font-size:1.5rem;color:#666;border:0;border-bottom:1px solid #ddd;outline:none;}
	.form-input-div{position:absolute;top:100%;left:0;opacity:0;width:0%;height:2px;background:transparent;border-radius:3px;transition:all .2s linear;}
	.form-input:focus+.form-input-div{background:#2A3E50;width:100%;opacity:1;}
	.form-input:focus{border:1px solid transparent;}
	::-webkit-input-placeholder{font-size:1.3rem;color:#ccc;}
</style>