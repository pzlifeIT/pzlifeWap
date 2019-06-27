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
router.beforeEach((to, from, next) => {
  next();
  // 重定向功能，为解决ios微信上复制链接功能不能复制到动态路由问题
  // 获取地址前段部分，不算参数
  var replaceUrl = window.location.href.split('#')[0] + '#' + to.path;
  var index = 0; // 索引初始化
  // 给replaceUrl拼接参数
  for (var i in to.query) {
    // 判断是否等于第一个参数
    if (index == 0) {
      // 拼接地址第一个参数，添加“?”号
      replaceUrl += '?' + i + '=' + to.query[i]
    } else {
      // 拼接地址非第一个参数，添加“&”号
      replaceUrl += '&' + i + '=' + to.query[i]
    }
    index++; // 索引++
  }
  // console.log('test20190117：' + to.meta.title, replaceUrl);
  window.location.replace(replaceUrl); // 重定向跳转
  // 重定向功能------end
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
