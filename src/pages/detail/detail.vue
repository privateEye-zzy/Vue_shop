<template>
	<div class="list-main animated" style="visibility:hidden;">
		<!--上半部-->
		<div style="background:#fff;">
			<div class="list-container">
				<div class="z-padding-v-25-rem ub-box">
					<div>
						<magnifying></magnifying>
					</div>
					<div class="ub-flex-1 z-padding-all-30-rem ub-box ub-col">
						<h3 class="z-font-size-20 z-margin-bottom-15-rem z-color-333">商品名称</h3>
						<p class="z-font-size-14 z-margin-bottom-15-rem z-lineHeight-24 z-color-666">商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述商品简要描述</p>
						<p class="z-font-size-14 z-margin-bottom-15-rem z-lineHeight-24 z-color-666">商品属性1</p>
						<p class="z-font-size-14 z-margin-bottom-15-rem z-lineHeight-24 z-color-666">商品属性2</p>
						<p class="z-font-size-14 z-margin-bottom-15-rem z-lineHeight-24 z-color-666">商品属性3</p>
						<div class="z-padding-all-15-rem ub-box ub-col" style="background:#fafafa;border:1px solid #e0e0e0;">
							<dd class="ub-box ub-ver-v z-margin-bottom-15-rem">
								<i class="iconfont icon-ditu z-font-size-23 z-color-333"></i>
								<span class="z-font-size-15 z-color-666">商品地址：北京</span>
							</dd>
							<dd class="ub-box ub-end ub-ver-v">
								<span class="z-font-size-20" style="color:#ff6700;">总计：100元</span>
							</dd>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--下半部-->
		<div class="list-container ub-box">
			<!--左边-->
			<dl class="z-padding-v-20-rem z-margin-right-19-rem">
				<dt class="z-font-size-16 z-color-666 z-padding-all-15-rem" style="background:#fff;">人气推荐</dt>
				<dd v-for="i in 4" class="translation ub-box ub-col">
					<div class="translationImg"></div>
					<p class="z-padding-all-15-rem z-font-size-13 z-color-666">推荐产品名称</p>
				</dd>
			</dl>
			<!--右边-->
			<dl class="z-padding-v-20-rem ub-flex-1 ub-box ub-col">
				<div class="z-margin-bottom-15-rem ub-box ub-ver-v" style="border-bottom:2px solid #ff6700;">
					<div @click.stop="changeMenu(idx)" v-for="(tab, idx) in menusTab" :class="{'menutab-active': menusCurIdx == idx}" class="z-padding-v-15-rem z-select-none z-curPonit">
						<span class="z-font-size-16 z-padding-h-11-rem">{{tab}}</span>
					</div>
				</div>
				<!--商品介绍1-->
				<div v-if="menusCurIdx==0" class="panel1 animated fadeIn ub-box ub-col">
					<dt class="title">
						<span class="z-font-size-15 z-color-666">拍摄视频</span>
					</dt>
					<dd class="detailItem z-padding-v-20-rem ub-box ub-col ub-ver">
						<span class="z-font-size-14 z-color-666 z-margin-bottom-10-rem">视频介绍</span>
						<video controls="controls" preload="meta" src="https://v.mifile.cn/b2c-mimall-media/079803c78170eaf692d936eba3978cc1.mp4" class="z-width-90-percent"></video>
					</dd>
					<dt class="title">
						<span class="z-font-size-15 z-color-666">头部展示</span>
					</dt>
					<dd v-for="i in 1" class="detailItem"></dd>
					<dt class="title">
						<span class="z-font-size-15 z-color-666">身段展示</span>
					</dt>
					<dd v-for="i in 1" class="detailItem"></dd>
					<dt class="title">
						<span class="z-font-size-15 z-color-666">运动展示</span>
					</dt>
					<dd v-for="i in 1" class="detailItem"></dd>
					<dt class="title">
						<span class="z-font-size-15 z-color-666">售后服务</span>
					</dt>
					<dd class="detailItem"></dd>
					<dt class="title">
						<span class="z-font-size-15 z-color-666">购买咨询</span>
					</dt>
					<dd class="detailItem"></dd>
				</div>
				<!--商品参数2-->
				<div v-if="menusCurIdx==1" class="animated fadeIn panel2 ub-box ub-col">
					<dt class="title">
						<span class="z-font-size-15 z-color-666">参数列表</span>
					</dt>
					<ul class="detailItem ub-box ub-col">
						<li class="ub-box ub-ver-v z-padding-all-20-rem" style="border-bottom:1px solid #ff6700;">
							<div class="z-padding-all-20-rem z-color-888 z-font-size-15">基础属性</div>
							<div class="ub-flex-1 ub-box ub-col">
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">姓名</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">性别</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">出身日期</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">出生地</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">芯片号</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">犬种</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">品种</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">是否参赛</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">是否获奖</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">获奖名次</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">主办单位</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
							</div>
						</li>
						<li class="ub-box ub-ver-v z-padding-all-20-rem" style="border-bottom:1px solid #ff6700;">
							<div class="z-padding-all-20-rem z-color-888 z-font-size-15">物理属性</div>
							<div class="ub-flex-1 ub-box ub-col">
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">毛色</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">体表</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">被毛</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">眼睛</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">体型</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">胆量</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">攻击性</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">衔取</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">运动气质</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
							</div>
						</li>
						<li class="ub-box ub-ver-v z-padding-all-20-rem">
							<div class="z-padding-all-20-rem z-color-888 z-font-size-15">疫苗记录</div>
							<div class="ub-flex-1 ub-box ub-col">
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">第一次注射</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">疫苗名称</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">疫苗</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">第二次注射</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">疫苗名称</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">疫苗</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">第三次注射</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">疫苗名称</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
								<div class="ub-box ub-ver-v z-margin-bottom-15-rem">
									<span class="prop z-textAlign-right z-color-888 z-font-size-15 z-margin-right-25-rem">疫苗</span>
									<span class="z-color-888 z-font-size-15">123</span>
								</div>
							</div>
						</li>
						
					</ul>
				</div>	
			</dl>
		</div>
	</div>
</template>
<script>
	import magnifying from 'services/detail/magnifying.vue'
	import {initVisibility} from 'utils/visibility.js'
	export default {
		components: {magnifying},
		data(){
			return{
				menusCurIdx: 0,
				menusTab: ['商品介绍', '商品参数'],
			}
		},
		mounted(){
			initVisibility(this.$el)
		},
		methods:{
			changeMenu(idx){
				if (idx === this.menusCurIdx){return}
				this.menusCurIdx = idx
			}
		},
	}
</script>
<style scoped>
	.list-main{background:#f5f5f5;}
	.list-container{width:1226px;position:relative;margin:auto;}
	.title{background:#fff;}
	.title span{background:#eee;border-bottom:3px solid #ff6700;padding:1rem;box-sizing:border-box;display:inline-block;}
	.menutab{}
	.menutab-active{background:#ff6700;color:#fff;}
	.detailItem{margin:0 0 2rem 0;width:100%;min-height:40vh;background:#eee;border-radius:4px;}
	.translation{width:220px;background:#eee;}
	.translation .translationImg{width:100%;height:20vh;}
	.prop{width:7rem;}
</style>