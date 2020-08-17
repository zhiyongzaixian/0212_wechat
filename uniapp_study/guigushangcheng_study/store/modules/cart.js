import Vue from 'vue'
// 购物车模块

const state = {
	cartList: [
		{
				"count": 2,
				"selected": false,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1586040,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1586040,
		    "sellVolume": 4315,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/8d3d3daec71799e08c5853ce9e05b440.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539930828979,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1576200840751,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 699,
		    "categoryL2Id": 0,
		    "retailPrice": 525,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 6,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "珍贵的软滑感，女式高领纯小山羊绒衫2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/ffd34ce21098cacad33371fcff8bd9f9.png",
		    "pointsPrice": 0,
		    "simpleDesc": "亲近温暖，拥抱温柔与纯粹",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300011138,
		    "displaySkuId": 300014019,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
				"count": 3,
				"selected": true,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1593000,
		            "tagId": 128111156,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1593000,
		    "sellVolume": 3168,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/59c9d23abdfdaac58ede7b3e70934817.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539929494550,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575512503370,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 799,
		    "categoryL2Id": 0,
		    "retailPrice": 623,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 3,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "软糯似baby肌肤，男式高领纯小山羊绒衫",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/631f945255aad262ff1b9ce51662f74b.png",
		    "pointsPrice": 0,
		    "simpleDesc": "绒毛取自未满1岁的山羊羊羔",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1630007,
		    "displaySkuId": 1630008,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}

// 数据源在哪，操作数据的方法在哪

const mutations = {
	// 添加至购物车
	changeCartList(state, shopDetail){
		// 已知条件： state.cartList  shopDetail
		/* 
		 思路: 
			1. 购物车中是否已经有要添加的商品
				1) 如果已经有: 在原有的count上累加
				2) 如果没有: 将要添加的商品信息对象直接push进cartList
			2. Arrar.find()
				返回值： 1. 目标元素 2. undefined
		 */
		let shopItem = state.cartList.find(item => item.id === shopDetail.id);
		// console.log('shopItem', shopItem)
		if(shopItem){// 已经有 在原有的count上累加
			shopItem.count += 1;
			console.log(shopItem.count)
		}else { // 没有 第一次添加
			// 非响应式属性
			// shopDetail.count = 1;
			// shopDetail.selected = true;
			
			// 响应式属性设置： Vue.set( target, propertyName/index, value )
			Vue.set(shopDetail, 'count', 1);
			Vue.set(shopDetail, 'selected', true);
			state.cartList.push(shopDetail)
		}
	},
	// 修改商品数量
	changeCountMutation(state, {isAdd, index}){
		// 注意点： mutation接收两个参数，
		// 1. 第一个参数： state对象 
		// 2. 第二个参数是交给mutation的参与修改状态的数据，如果想要交给mutation的是多条数据,需要传入对象或者是数组
		// console.log('mutation: ', isAdd, index)
		if(isAdd){ // 累加
			state.cartList[index].count += 1
		}else { // 累减
			if(state.cartList[index].count > 1){
				state.cartList[index].count-= 1
			}else {
				// 移除商品 splice对数组进行增删改，会改变原数组  VS slice截取数组的片段，不会影响原数组
				uni.showModal({
					title: '确认删除该商品吗',
					success: (res) => {
						if(res.confirm){
							state.cartList.splice(index, 1)
						}
					}
				})
			}
		}
	},
	
	// 修改商品的选中状态
	changeSelectedMutation(state, {selected, index}){
		state.cartList[index].selected = selected
	},
	
	// 修改全选/全不选的状态
	changeAllSelectedMutation(state, selected){
		state.cartList.forEach(item => (item.selected = selected))
	}
}

const actions = {
	
}

const getters = {
	// 是否全选
	isAllSelected(state){
		// forEach()
		// let result = true;
		// state.cartList.forEach(item => !item.selected && (result = false))
		// state.cartList.forEach(item => {
		// 	// if(!item.selected){
		// 	// 	result = false
		// 	// }
		// 	!item.selected && result = false
		// })
		// return result;
		
		// every VS some
		return state.cartList.every(item => item.selected)
		
		
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}