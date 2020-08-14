import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './modules/index.js'
import cartModule from './modules/cart.js'
// 声明使用Vue的扩展库

// Vue.use都干了什么事情？？
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		indexModule,
		cartModule
	}
})

export default store