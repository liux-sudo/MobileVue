import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

// 引入懒加载组件
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    // 加载失败的图片
    error: '../static/images/moren.jpg',
    // 加载中的图片
    loading: '../static/images/1.gif',
    attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})