<template>
  <div>
    <div id="container">
      <img class="img" :src="active.big_image" alt="">
      <router-link class="jump" to="/b/">报名参加</router-link>
      <router-view></router-view>
    </div>

    <div class="pop" v-if="loginStatus">
      <div class="center">
        <div class="title">请先登录</div>
        <div class="button">
          <div class="left-button" @click="none">取消</div>
          <div class="left-button right" @click="toLogin()">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  // Vue.prototype.$axios = axios
  Vue.use(VueAxios, axios);
  export default {
    name: "bossActive",
    data() {
      return {
        where: 'a',
        loginStatus: localStorage.getItem("loginStatus") || false,
        webTitle: "招募合伙人",
        img: "",
        active: {},
        hid: 0,
        pid: 0
      }
    },
    created() {
      console.log(this.host.apiHost)
    },
    methods: {
      isCon_id() {
        //如果con_id存在就請求獲取用戶信息,如果沒有就提示登陸,登陸完成將con_id存進緩存
        if (localStorage.getItem("con_id")) {
          this.getUser()
        } else {
          this.loginStatus = true
        }
      },
      getLoginStatus() {
        //判断是否登录，如果登录了就填写信息，如果没有就跳转到登录
        //請求獲取信息接口
        let api = this.host.apiHost + 'user/getuser';
        Vue.axios.post(api,)
      },
      none() {
        this.loginStatus = false
      },
      toLogin() {
        this.$router.push({path: '/login'});
        this.loginStatus = false
      },
      getUser() {
        let api = this.host.apiHost + 'user/getuser';
        let that = this;
        let con_id = localStorage.getItem("con_id");
        //獲取成功就成功,如果是5000就提示登陸
        Vue.axios.post(api, {con_id: con_id}).then((res) => {
          let code = parseInt(res.data.code)
          switch (code) {
            case 5000:
              that.loginStatus = true;
              break;
            default:
              that.loginStatus = true;
              break;
          }
        }).catch((res) => {

        })
      },
      getActive() {
        let that = this;
        let api = this.host.apiHost + 'wap/getSupPromote';
        let id = this.hid;
        console.log(id)
        Vue.axios.get(api + '/?promote_id=' + id).then((res) => {
          console.log(res)
          switch (parseInt(res.data.code)) {
            case 200:
              that.active = res.data.promote;
              document.getElementById('title').innerHTML = res.data.promote.title
              break;
          }
        }, (res) => {
          console.log(res)
        })
      },
      enUrl() {
        let url = window.location.href;
        // console.log(url)
        let hid = url.split('?')[1].split('&')[0].split('=')[1];
        let pid = url.split('?')[1].split('&')[1].split('=')[1];
        this.hid = hid;
        this.pid = pid;
      }
    },
    mounted() {
      this.enUrl();
      let Host = this.host.apiHost + 'wap/getSupPromote/?hid=' + this.hid + '&pid=' + this.pid;
      this.isCon_id();
      this.getActive();
      console.log(123456);
      // this.WXConfig.wxShowMenu(Host);
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
  }

  #container {
    margin-top: 14px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .img {
    width: 730px;
    height: 973px;
  }

  .jump {
    width: 730px;
    height: 88px;
    background: #e61f18;
    border-radius: 10px;
    color: #ffffff;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
    line-height: 88px;
    text-decoration: none;
    display: inline-block;
  }

  .pop {
    width: 750px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  .center {
    width: 580px;
    /*height: 238px;*/
    overflow: hidden;
    background: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .title {
    width: 100%;
    height: 148px;
    text-align: center;
    line-height: 148px;
    color: #404040;
    font-size: 34px;
  }

  .button {
    width: 100%;
    height: 90px;
    border-top: 1px solid #e2e2e2;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    font-size: 30px;
  }

  .left-button {
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 90px;
    color: #404040;
  }

  .right {
    color: #e61f18;
    border-left: 1px solid #e2e2e2;
  }
</style>
