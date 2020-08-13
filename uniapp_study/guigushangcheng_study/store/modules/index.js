import request from '../../utils/request.js'
// 主页的模块
const state = {
	initData: '初始化的测试数据',
	indexData: {}, 
}


const mutations = {
	changeIndexDataMutation(state, indexData){
		// 同步修改数据
		state.indexData = indexData
	}
}


const actions = {
	async getIndexData({commit}){
		// 执行异步任务，发请求获取数据
		// let indexData = await request('/api/getIndexData'); // H5
		let indexData = await request('/getIndexData');
		// 触发mutation，同时将数据交给mutation
		commit('changeIndexDataMutation', indexData)
		
	}
}

const getters = {
	
}

export default {
	state,
	actions,
	mutations,
	getters
}