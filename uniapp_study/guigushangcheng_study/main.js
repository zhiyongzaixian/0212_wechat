import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

// 声明App组件的小程序类型是 应用 application
App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
