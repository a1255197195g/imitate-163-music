/*
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-13 10:02:42
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-18 19:45:58
 */
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

//axios携带cookie
axios.defaults.withCredentials=true;
//判断是不是web环境， 如果不是，那么就引入electron
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
