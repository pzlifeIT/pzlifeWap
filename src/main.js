// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import store from './vuex/store'
import config from '../config/config'
import WXConfig from '../static/wxapi'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(config);
Vue.config.productionTip = false;
Vue.prototype.WXConfig = WXConfig;
// router.beforeEach((to,from,next)=>{
//   if (to.meta.title){
//     document.title = to.meta.title
//   }
//   next()
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
