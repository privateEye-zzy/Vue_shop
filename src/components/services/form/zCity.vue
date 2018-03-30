<template>
	<div class="z-width-100-percent ub-box ub-ver-v">
		<div class="layer" @click.stop="$emit('close')"></div>
		<dl class="ub-box ub-col z-width-100-percent cityBody">
			<dd class="ub-box">
				<ul class="ub-flex-1 ub-box z-padding-v-12-rem cityTitle">
					<li @click="selectCode(li,idx)" v-for="(li,idx) in title" class="cityFont z-padding-h-5-rem z-font-size-15 z-select-none z-curPonit" :class="{'cityFontActive':curIdx === idx}">{{li}}</li>
				</ul>
			</dd>
			<dd class="z-padding-all-10-rem">
				<div v-for="(list,idx) in cityList" class="ub-box ub-ver-v">
					<div class="z-margin-right-10-rem z-font-size-15 z-select-none z-overflow-hidde" style="color:#2A3E50;">
						{{currFont[idx]}}
					</div>
					<ul class="ub-f1 ub-box ub-ver">
						<li class="ub-f1 ub-box ub-wrap">
							<span @click="clickCity(city.name)" v-for="city in list" class="city z-relative z-select-none z-font-size-15 z-color-999 z-curPonit z-padding-all-8-rem">
								{{city.name}}
							</span>
						</li>
					</ul>
				</div>
			</dd>
		</dl>
	</div>
</template>
<script>
	import cityData from 'utils/cityData.js'
	export default {
		data(){
			return{
				title:['热门城市','AB','CD','EFG','HI','JK','LM','NOP','QR','S','TU','VWX','Y','Z'],
				curIdx:1,
				hotCity:[{name:'全国各地'},{name:'北京'},{name:'天津'},{name:'上海'},{name:'广州'},{name:'深圳'},{name:'保定'},{name:'太原'},{name:'唐山'},{name:'秦皇岛'},{name:'张家口'},{name:'辽宁'},{name:'大连'},{name:'沈阳'}],
				currFont:[],
				cityList:[],
			}
		},
		mounted(){
			this.selectCode(this.title[0],0)
		},
		methods:{
			clickCity(city){
				this.$emit('input',city)
				this.$emit('close')
			},
			selectCode(codes, idx){
				this.cityList = []
				this.curIdx = idx
				if(codes === '热门城市'){
					this.currFont = ''
					this.cityList.push(this.hotCity)
					return
				}
				codes = codes.split('')
				this.currFont = codes
				this.reloadCityList(codes)
			},
			reloadCityList(codeArr){
				codeArr.forEach(code => {
					for(let i = 0;i<cityData.length;i++){
						if(cityData[i]['initial'] === code){
							this.cityList.push(cityData[i]['list'])
							break
						}
					}
				})
			}
		},
	}
</script>
<style scoped>
	.form-label{position:relative;width:120px;overflow:hidden;text-align:right;font-size:1.5rem;color:#999;}
	.layer{position: fixed;top: 0;right: 0;bottom: 0;left: 0; background: transparent; z-index: 2000;}
	.cityBody{border:1px solid #e0e0e0;position:relative;z-index:3000;}
	.cityTitle{background:#2A3E50;}
	.cityFont{color:#fff;transition:color .2s ease-in}
	.cityFont:hover{color:#ffff00;}
	.cityFont:first-child{margin-left:1rem;}
	.cityFontActive{color:#ffff00;}
	.city{background:transparent;overflow:hidden;transition:all .2s ease-in;}
	.city:hover{color:#fff;background:#2A3E50;border-radius:3px;}
</style>