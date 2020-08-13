<template>
	<view class="indexContainer">
		123
		<p>测试内容</p>
		<div>div测试内容</div>
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
	// 常规样式
	// * {
	// 	padding: 0;
	// }
	
	/*
	stylus： 语法
		1. 省略大括号
		2. 省略冒号，封号
		3. 样式层级可以嵌套，层级同对应结构层级一致，方便查看
	
	
	*/ 
	.indexContainer
		p
			font-size 40rpx
			color red
		div
			color green
	
	
	
.test
	font-size 0
</style>
