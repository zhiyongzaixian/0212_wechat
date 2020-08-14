<template>
	<view class='cateListContainer'>
		<swiper :indicator-dots="true" :autoplay="true" indicator-color='green' indicator-active-color='pink'>
			<swiper-item v-for="(swiperItem, index) in cateObj.category.bannerUrlList" :key='index'>
				<image :src="swiperItem" mode=""></image>
			</swiper-item>
		</swiper>
		<text class="title">{{cateObj.category.name}}</text>
		<text class="desc">{{cateObj.category.frontDesc}}</text>
		
		<!-- 列表区 -->
		<view class="listContainer">
			<view class="listItem">
				<image src="" mode=""></image>
				<view></view>
				<view style='color: red;font-weight: bold;'>$ 666</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
	
	}
</script>

<style lang="stylus">
	.cateListContainer 
		swiper 
			width 100%
			height 370upx
			image 
				width 100%
				height 100%
		.title
			display block
			text-align center
			font-size 34upx
			color #333
			line-height 70upx
		.desc
			display block
			text-align center
			font-size 24upx
			color #999
			line-height 40upx
		.listContainer
			display flex
			flex-wrap wrap
			justify-content space-around
			/* 解决最后一行只有一个元素的时候不能靠左布局 */
			&:after
				content ''
				width 345upx
				height 0
			.listItem
				width 345upx
				display flex
				flex-direction column
				image 
					width 345upx
					height 345upx
				view
					white-space pre-wrap
					font-size 28upx
					line-height 50upx
					text-align left
		
				
</style>
