import Vue from 'vue'
import App from './App'


// 关闭Vue中的一些提示
Vue.config.productionTip = false

// 声明App 组件的类型 代表整个应用
App.mpType = 'app' // app ---application

const app = new Vue({
    ...App
})

// 挂载整个应用
app.$mount() // 等同于原生小程序中的app.js中的 App()


// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })
