<template>
	<div class="box z-width-100-percent ub-box">
		<div class="layer" @click="$emit('close')"></div>
		<div class="x-years z-width-100-percent" style="height: 100%;" ref="xYears">
			<div class="header ub-box ub-ver-v ub-between">
				<span><i class="arrow icon iconfont icon-jiantou" @click.stop="reduce"></i> <i v-if="type==='day' && ulType==='day'" class="arrow icon iconfont icon-jiantou2" @click.stop="reduceMonth"></i></span>
				<span v-show=" ulType === 'month'" class="year z-font-size-16 z-curPonit z-color-666" @click="switchYear">{{year}} 年</span>
				<span v-show=" ulType === 'year'" class="year z-font-size-16 z-curPonit z-color-666">{{curYears[0]}} 年 - {{curYears[curYears.length -1 ]}} 年</span>
				<span v-show=" ulType === 'day'"><span class="year z-font-size-16 z-curPonit z-color-666" @click="switchYear">{{year}} 年</span>&nbsp;&nbsp;&nbsp;<span class="year z-font-size-16 z-curPonit z-color-666" @click="switchMonth">{{month}} 月</span></span>
				<span><i v-if="type==='day' && ulType==='day'" class="arrow icon iconfont icon-jiantou1" @click.stop="addMonth"></i> <i class="arrow icon iconfont icon-jiantou3" @click.stop="add"></i></span> 
			</div>
			<div class="content">	
				<ul class="month ub-box ub-wrap" v-show=" ulType === 'month'">
					<li class="ub-box ub-ver" v-for="(item, index) in months"><span class="z-font-size-12 z-curPonit z-color-666" :class="{'active': index == month -1}" @click="selectMonth(index)">{{ item }}</span></li>
				</ul>
				<ul class="year ub-box ub-wrap" v-show=" ulType === 'year'">
					<li class="ub-box ub-ver" v-for="(item, index) in curYears"><span class="z-font-size-12 z-curPonit z-color-666" :class="{'active': year == item}" @click="selectYear(item)">{{ item }}年</span></li>
				</ul>
				<ul class="day ub-box ub-wrap" v-show=" ulType === 'day'">
					<li class="ub-box ub-ver " v-for="week in weeks">{{ week }}</li>
					<li class="ub-box ub-ver " v-for="bday in beforeDays" @click.stop="selectDay('before', bday)">{{ bday }}</li>
					<li class="ub-box ub-ver z-color-666 z-font-size-12 theDay z-curPonit z-relative" v-for="cday in days" @click.stop="selectDay('current', cday)" :class="{'active': cday-0 == day}">{{ cday }}<span class="bg z-absolute"></span></li>
					<li class="ub-box ub-ver " v-for="aday in afterDays" @click.stop="selectDay('after', aday)">{{ aday }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			default: 'day'
		}
	},
	data() {
		return {
			ulType: 'month',
			pingDays: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			runDays: [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			beforeDays: [],
			days: [],
			afterDays: [],
			weeks: [ '一', '二', '三', '四', '五', '六', '日'],
			months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			curYears: [],
			year: 2017,
			month: 0,
			day: 1,
		}
	},
	mounted() {
		if( this.type === 'month' ) this.ulType = 'month'
		if( this.type === 'day' ) this.ulType = 'day'
		this.year = new Date().getFullYear()
		this.month = new Date().getMonth() + 1
		this.creatYears()
		if( this.type === 'day' ) {
			this.day = new Date().getDate()
			this.creatDays()
		}
	},
	methods: {
		switchYear() { this.ulType = 'year' },
		switchMonth() { this.ulType = 'month' },
		creatYears() {
			let i = this.year - 5
			while( this.curYears.length < 12 ) {this.curYears.push(i++)}
		},
		creatbeforeDays(days) {
			this.beforeDays = []
			let dayLength = this.month == 1? 31: days[this.month - 1]
			let time = new Date(this.year, this.month -1, 1).getDay() == 0? 7:new Date(this.year, this.month -1, 1).getDay()
			while( this.beforeDays.length < (time - 1) ){ this.beforeDays.unshift(dayLength.toString());dayLength--}
		},
		creatDays() {
			this.days = []
			let days = this.isRunNian(this.year)? [...this.runDays]: [...this.pingDays]
			this.days = Array.from({length: days[this.month]}, (item, index) => (index + 1).toString().length > 1? (index + 1).toString(): '0' + (index + 1))
			this.creatbeforeDays(days)
			this.creatAfterDays(days)
		},
		creatAfterDays(days) {
			this.afterDays = []
			let time = new Date(this.year, this.month -1, days[this.month]).getDay()
			let i = 1
			let len = 42 - this.days.length - this.beforeDays.length
			while( this.afterDays.length < len ){ this.afterDays.push(i.toString().length>1?i.toString():'0'+i);i++}
		},
		isRunNian(year) {
			return year % 400 == 0 || year % 4 == 0 && year % 100 != 0
		},
		reduce() {
			if( this.ulType === 'month' || this.type === 'day') {
				this.year--
				if( this.type === 'day' ) this.creatDays()
			}
			if( this.ulType === 'year' ) this.curYears = this.curYears.map( item=> { return item - 12 })
		},
		reduceMonth() { 
			if( (this.month - 1) < 1 ) {
				this.month = 12
				this.year--
			}else {
				this.month-- 
			}
			if( this.type === 'day' ) this.creatDays()
		},
		add() {
			if( this.ulType === 'month' || this.type === 'day') {
				this.year++
				if( this.type === 'day' ) this.creatDays()
			}
			if( this.ulType === 'year' ) this.curYears = this.curYears.map( item=> { return item + 12 })
		},
		addMonth() {
			if( (this.month + 1) > 12 ) {
				this.month = 1
				this.year++
			}else {
				this.month++
			}
			if( this.type === 'day' ) this.creatDays()
		},
		selectYear(item) {
			this.year = item
			this.ulType = 'month'
		},
		selectMonth(item){
			this.month = item - 0 + 1
			if( this.type === 'day' ) { this.creatDays(); return this.ulType = 'day' }
			let date = this.year + '-' + (this.month.toString().length == 1? '0' + this.month: this.month)
			this.$emit('input', date)
			this.$emit('close')
		},
		selectDay(type, item) {
			this.day = item - 0
			switch (type) {
				case 'before' :
					this.month--
					if( this.month < 1 ) { this.month = 12; this.year-- }
					break
				case 'after' :
					this.month++
					if( this.month > 12 ) { this.month = 1; this.year++ }
					break
			}
			let date = this.year + '-' + (this.month.toString().length == 1? '0' + this.month: this.month) + '-' + item
			this.$emit('input', date)
			this.$emit('close')
		}
	}
}
</script>
<style scoped>
	.box { height: 100% }
	.layer { position: fixed;top: 0;right: 0;bottom: 0;left: 0; background: transparent; z-index: 2000;}
	.x-years {
		padding: 0.7rem 1.5rem .5rem;
		border: 1px solid #d1dbe5;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: 0 2px 6px #ccc;
		z-index: 3000;
		box-sizing: border-box;
	}
	.header { height: 15%;}
	.arrow { font-size: 2.3rem; cursor: pointer; color: #bbb; }jiantou3
	.year:hover, .arrow:hover { color: #2A3E50; }
	.content { height: 85%;}
	.content>ul { height: 100%;}
	.content>ul>li { width: 25%; height: 33% }
	.content>ul>li>span {padding: .8rem .9rem; border-radius: 3px;}
	.content ul.day>li.theDay{border-radius: 3px;transition:all .2s linear;}
	.content ul.day>li.theDay span{padding: 0;border-radius: 100%;}
	.content ul.day>li.theDay:hover {color: #fff;font-size:1.4rem;}
	.content ul.day>li.theDay.active{color: #fff;font-size:1.4rem;}
	.content ul.day>li .bg {width: 0;height: 0; transition: all .3s;left: 50%;top: 50%;transform: translate(-50%,-50%);}
	.content ul.day>li.theDay:hover span { z-index: -1; width: 2.5rem; height: 2.5rem; background: #2A3E50;}
	.content ul.day>li.theDay.active span {z-index: -1; width: 2.5rem; height: 2.5rem; background: #2A3E50;}
	.content>ul>li>span.active { background: #2A3E50; color: #fff; }
	.content>ul>li>span.active:hover { background: #2A3E50; color: #fff; }
	.content>ul>li>span:hover { background: #f4f4f4;}
	.content ul.day>li { width: 14.285%; height: 14.285%; color: #aaa;}
	.content ul.day>li.theDay{color: #666}
</style>