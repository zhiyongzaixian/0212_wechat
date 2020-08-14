<template>
	<view class="indexContainer">
		<!-- 头部区域  -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button class="userName">志勇在线</button>
		</view>
	
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" class="navScroll" >
			<view class="navItem" :class="{activeClass: navIndex === 0}" @click="changeNav(0)">
				推荐
			</view>
			<view @click="changeNav((index + 1))"  class="navItem" :class="{activeClass: navIndex === (index + 1)}" v-for='(navItem, index) in indexData.kingKongModule.kingKongList' :key='index'>
				{{navItem.text}}
			</view>
		</scroll-view>
	
		<!-- 内容区 -->
		<scroll-view scroll-y="true" class="contentScroll">
			<Recommend ></Recommend>
		</scroll-view>
		<!-- isYellow = true navIndex = 0-->
		<!-- <button @click='isYellow = !isYellow;navIndex=index' :class='{yellowClass: isYellow && navIndex === index, grayClass: !isYellow && navIndex === index} v-for='(item, index) in [1,2,3]'>按钮</button> -->
	</view>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	import Recommend from '../../components/recommend/recommend.vue'
	export default {
		components: {
			Recommend
		},
		data() {
			return {
				navIndex: 0, // 导航下标
			}
		},
		
		/* uniApp即支持Vue的生命周期函数，同时也支持原生小程序的生命周期函数，但是官网建议： 原生小程序的生命周期函数能不用就不用 */
		// onLoad() {
		// 	console.log('onLoad()');
		// },
		mounted(){
			// console.log(this.$store.state.indexModule.initData);
			// this.$store.dispatch('getIndexData')
			// 分发action
			this.getIndexData();
		},
		methods: {
			...mapActions({
				getIndexData: 'getIndexData'
			}),
			changeNav(navIndex){
				this.navIndex = navIndex
			}
		},
		computed: {
			...mapState({
				indexData: state => state.indexModule.indexData
			})
		}
	}
</script>
<style lang="stylus">
	.indexContainer
		.header
			display flex
			height 60rpx
			padding 10rpx
			.logo
				width 140rpx
				height 40rpx
				margin 10rpx 30rpx
			.search
				position relative
				height 60rpx
				width 420rpx
				background #ededed
				margin 0 10rpx
				border-radius 10rpx
				.iconfont 
					position absolute
					top 25%
					left 10rpx
					font-size 30rpx
				input
					height 60rpx
					width 370rpx
					margin-left 50rpx
				.placeholder
					font-size 24rpx
			button
				width 144rpx
				height 60rpx
				font-size 22rpx
				color #BB2C08
				text-align center
				line-height 60rpx
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
				padding 0 10rpx
		.navScroll
			white-space nowrap
			height 80rpx
			.navItem
				display inline-block
				height 79rpx
				width 140rpx
				text-align center
				line-height 79rpx
				margin 0 10rpx
				font-size 28rpx
				/*父级引用: 在子元素的位置通过  & 可以找到当前子元素的父级元素 */
				&.activeClass
					border-bottom 1rpx solid #BB2C08
		.contentScroll
			height calc(100vh - 160rpx)
		
.test
	font-size 0
</style>
