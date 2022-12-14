import Vue from 'vue'
import App from './App.vue'
//配置element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入router
import router from '@/router'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
