
// 项目启动入口

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './style/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 