import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import config from '../config/config'

Vue.use(VueAxios, axios);
export default {
  wxShowMenu: function (host, share_img, share_title, jump_url, callback) {
    // let api = this.host;
    console.log(host)
    // alert(jump_url);
    Vue.axios.get(host).then(function (res) {
      var getMsg = res.data.signPackage;
      console.log(getMsg.url)
      console.log(getMsg)
      wx.config({
        debug: false, //生产环境需要关闭debug模式
        appId: getMsg.appId, //appId通过微信服务号后台查看
        timestamp: parseInt(getMsg.timestamp), //生成签名的时间戳
        nonceStr: getMsg.nonceStr, //生成签名的随机字符串
        signature: getMsg.signature, //签名
        jsApiList: [ //需要调用的JS接口列表
          'onMenuShareAppMessage', //分享给好友
          'onMenuShareTimeline', //分享到朋友圈
          'showMenuItems'
        ]
      });
      wx.error(function (res) {
        console.log(res)
      });

      wx.ready(function () {
        // wx.checkJsApi({
        //   jsApiList: ["onMenuShareAppMessage","onMenuShareTimeline"],
        // success: function (res) {
        //   wx.showMenuItems({
        //     menuList: [
        //       'menuItem:share:appMessage', //发送给朋友
        //       'menuItem:share:timeline' //分享到朋友圈
        //     ]
        //   });
        // }
        // });

        //分享到朋友圈
        wx.onMenuShareTimeline({
          title: share_title, // 分享标题
          desc: "", //分享描述
          link: jump_url, // 分享链接
          imgUrl: share_img, // 分享图标
          success: function () {
            callback()
          }
        });

        //分享给朋友
        wx.onMenuShareAppMessage({
          title: share_title, // 分享标题
          desc: "", // 分享描述
          link: jump_url, // 分享链接
          imgUrl: share_img, // 分享图标
          success: function () {
            callback()
          }
        });
      });
    })
  }
}
