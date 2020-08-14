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
				<scroll-view scroll-y="true" class="rightScroll">
					<view class="proInfo">
						<image class="proImg" :src="cateGoryObj.imgUrl" mode=""></image>
						<view class="proItem" v-for="proItem in cateGoryObj.subCateList" :key='proItem.id'>
							<image :src="proItem.wapBannerUrl" mode=""></image>
							<view>{{proItem.name}}</view>
						</view>
					</view>
				</scroll-view>
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
		},
		computed: {
			cateGoryObj(){
				// find filter forEach
				return this.cateGoryList.find(item => item.id === this.navId)
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
			box-sizing border-box
			border-top 1rpx solid #eee
			.leftContainer
				width 20%
				height 100%
				border-right 1rpx solid #eee
				box-sizing border-box
				.leftScroll
					height 100%
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
				height 100%
				.rightScroll
					height 100%
					.proInfo
						display flex
						flex-wrap wrap
						.proImg 
							width 520rpx
							height 190rpx
							margin 20rpx auto
						.proItem
							width 33.33%
							image 
								width 90%
								height 140rpx
							view
								font-size 26rpx
								text-align center
					
		
.test
	font-size 0
</style>
