<template>
	<view class="cateGoryContainer">
		<view class="header">
			<view class="headerContent">
				搜索商品
			</view>
		</view>
		
		<!-- 内容区 -->
		<view class="contentContainer">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class='leftScroll'>
					<view class="navItem " :class="{activeClass: navId === navItem.id}" @click="changeNavId(navItem.id)" v-for="navItem in cateGoryList" :key='navItem.id'>
						{{navItem.name}}
					</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				右侧
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				cateGoryList: [],
				navId: ''
			};
		},
		mounted(){
			this.getCateGoryData();
		},
		methods: {
			async getCateGoryData(){
				let cateGoryData = await request('/getCateGoryData')
				this.cateGoryList = cateGoryData
				this.navId = this.cateGoryList[0].id
			},
			changeNavId(navId){
				this.navId = navId
			}
		}
	}
</script>

<style lang="stylus">
	.cateGoryContainer
		.header
			padding 10rpx
			.headerContent
				width 94%
				height 60rpx
				text-align center
				line-height 60rpx
				background #eee
				margin 0 auto
				font-size 26rpx
				border-radius 10rpx
		.contentContainer		
			height calc(100vh - 80rpx)
			display flex
			.leftContainer
				width 20%
				.leftScroll
					height calc(100vh - 80rpx)
					.navItem
						position relative
						font-size 24rpx
						height 80rpx
						line-height 80rpx
						text-align center
						&.activeClass:after
							position absolute
							top 10rpx
							left 10rpx
							content ''
							width 2rpx
							height 60rpx
							background #BB2C08
							
			.rightContainer
				width 80%
				background #41A863
		
.test
	font-size 0
</style>
