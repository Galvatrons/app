import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';

import 'vant/lib/index.css'
Vue.use(Vant)

import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false
// // 配置请求的跟路径
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// axios.interceptors.request.use(config => {
//   // console.log(config)
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 在最后必须 return config

//   return config
// })
function rem(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/4+"px";
}
rem();
window.onresize = rem;
// 400/4=100px  1rem = 100px
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
