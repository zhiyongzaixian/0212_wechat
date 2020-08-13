<template>
	<view class="indexContainer">
		<!-- 头部区域  -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button class="userName">志勇在线</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

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
				height 60rpx
				width 420rpx
				background #ededed
				margin 0 10rpx
				border-radius 10rpx
				input
					height 60rpx
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
			
	
	
	
.test
	font-size 0
</style>
