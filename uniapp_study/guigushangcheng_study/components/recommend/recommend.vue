<template>
	<view class="recommendContianer">
		<swiper class='navSwiper' :indicator-dots="true" >
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/e6bb52dfba070e4d084f178cf52285fb.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/f6e6a6765fbae9112c76387ebb36a638.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/eaf0dc31b33ffa2460364b2c1212f1a4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	
		<!-- policyDescList 三个图标板块 -->
		<view class="policyDescList">
			<view class="policyDescItem" v-for="(item, index) in indexData.policyDescList" :key='index'>
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>`
		</view>
		
		<!-- kingKongList 10个图标 -->
		<view class="kingKongList" v-if='indexData.kingKongModule'>
			<view class="kingKongItem"  v-for="(item, index) in indexData.kingKongModule.kingKongList" :key='index'>
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		computed: {
			...mapState({
				indexData: state => state.indexModule.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.recommendContianer
		.navSwiper
			width 100%
			height 350rpx
			.swiper-item
				width 100%
				height 100%
				image
					width 100%
					height 100%
		.policyDescList
			display flex
			.policyDescItem
				text-align center
				flex 1
				image 
					width 32rpx
					height 32rpx
					vertical-align middle
					margin-right 10rpx
				text
					font-size 20rpx
					vertical-align middle
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				font-size 24rpx
				margin-top 20rpx
				image
					width 110rpx
					height 110rpx
				text
					line-height 50rpx
				
					
.test 
	font-size 0
</style>
