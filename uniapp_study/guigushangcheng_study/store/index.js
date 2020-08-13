import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './modules/index.js'
// 声明使用Vue的扩展库

// Vue.use都干了什么事情？？
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		indexModule
	}
})

export default store