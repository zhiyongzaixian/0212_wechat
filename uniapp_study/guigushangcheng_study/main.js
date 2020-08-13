import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 声明App组件的小程序类型是 应用 application
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
