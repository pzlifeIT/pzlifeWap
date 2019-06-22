<template>
  <div>
    <div id="container">
      <img class="img" :src="active.big_image" alt="">
      <div class="jump" @click="goPageB()">报名参加</div>
      <router-view></router-view>
    </div>

    <div class="pop" v-if="loginStatus">
      <div class="center">
        <div class="title">请先登录</div>
        <div class="button-login">
          <div class="left-button" @click="none">取消</div>
          <div class="left-button right" @click="toLogin()">确定</div>
        </div>
      </div>
    </div>

    <div id="pop" v-if="status">
      <div class="info">
        <img class="yuan" @click="toHome()" src="https://webimages.pzlive.vip/cha_03.jpg" alt="">
        <div class="input">
          <div class="input-write">
            <div class="input-cate">姓名</div>
            <div class="mid"></div>
            <input type="text" v-model="name" class="write-text" placeholder="请输入姓名"/>
          </div>
          <div class="input-write">
            <div class="input-cate">手机号</div>
            <div class="mid"></div>
            <input type="text" v-model="phone" class="write-text" placeholder="请输入你的手机号码"/>
          </div>
        </div>
        <div class="submit" @click="submit()">提交</div>
      </div>
    </div>

    <div class="pop-hint" v-if="know">
      <div class="pop-center">
        <div class="title-share">
          <p class="success">报名成功</p>
          <p>去分享给好友，一起成为合伙人吧</p>
        </div>
        <div class="pop-button" @click="iknow">
          我知道了
        </div>
      </div>
    </div>
    <div class="pop-hint" v-if="msg">
      <div class="pop-center">
        <div class="title">
          <p class="hint">{{title}}</p>
        </div>
        <div class="pop-button" @click="toB">
          我知道了
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
        pid: 0,
        name: '',
        phone: '',
        code: '',
        status: false,
        msg: false,
        title: "",
        isClick: true,
        text: "获取验证码",
        know: false
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
      toB() {
        this.msg = false
      },
      goPageB() {
        // this.$router.push({path:"/b/"+ this.hid})
        this.status = true
      },
      iknow() {
        this.know = false
      },
      //提交
      submit() {
        let that = this;
        let name = this.name;
        let phone = this.phone;
        if (name == '') {
          this.title = "请填写姓名";
          this.msg = true;
          return
        }
        if (phone == '' || phone.length < 11) {
          this.title = "请检查手机号";
          this.msg = true;
          return
        }
        let api = this.host.apiHost + 'wap/SupPromoteSignUp';
        let hid = this.hid;
        let con_id = localStorage.getItem('con_id');
        Vue.axios.post(api, {
          promote_id: hid,
          con_id: con_id,
          mobile: phone,
          nick_name: name
        }).then((res) => {
          let home = localStorage.getItem("home").split("?")[1];
          // that.$router.push({path: '/?'+home});
          switch (parseInt(res.data.code)) {
            case 200:
              that.know = true;
              that.status = false;
              break;
            case 3000:
              that.title = '发送失败';
              that.msg = true;
              that.know = false;
              break;
            case 3001:
            case 3002:
              that.title = "con_id错误";
              that.msg = true;
              that.know = false;
              break;
            case 3003:
              that.title = 'promote_id有误';
              that.msg = true;
              that.know = false;
              break;
            case 3004:
              that.title = '手机号错误';
              that.msg = true;
              that.know = false;
              break;
            case 3005:
              that.title = '您已经参加过了';
              that.msg = true;
              that.know = false;
              break;
            case 3006:
              that.title = '请填写姓名';
              that.msg = true;
              that.know = false;
              break;
            case 5000:
              that.loginStatus = true;
              break;
            default:
              that.title = '未知错误';
              that.msg = true;
              that.know = false;
              break;
          }
        }).catch((res) => {
          that.title = "网络错误";
          that.msg = true;
          that.know = false;
        })
        console.log(name)
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
            case 200:
              that.loginStatus = false;
              break;
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
      toHome() {
        this.status = false
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
              localStorage.setItem("active", res.data.promote)
              that.active = res.data.promote;
              document.getElementById('title').innerHTML = res.data.promote.title
              let Host = this.host.apiHost + 'wap/getJsapiTicket/?url=' + window.location.origin;
              let api = this.host.apiHost + 'wap/getPromoteShareNum/?promote_id=' + that.hid + '&con_id=' + localStorage.getItem('con_id')
              this.WXConfig.wxShowMenu(Host, res.data.promote.share_image,  res.data.promote.share_title, api);
              break;
          }
        }, (res) => {
          console.log(res)
        })
      },
      enUrl() {
        let url = window.location.href;
        // console.log(url)
        if (url.indexOf("?") != -1) {
          let hid = url.split('?')[1].split('&')[0].split('=')[1];
          let pid = url.split('?')[1].split('&')[1].split('=')[1];
          this.hid = hid;
          this.pid = pid;
        }

      }
    },
    mounted() {
      this.enUrl();
      let Host = this.host.apiHost + 'wap/getJsapiTicket/?url=' + window.location.origin;
      let api = this.host.apiHost + 'wap/getPromoteShareNum/?promote_id=' + this.hid + '&con_id=' + localStorage.getItem('con_id')
      this.isCon_id();
      this.getActive();
      console.log(123456);
      let url = window.location.href
      localStorage.setItem("home", url);

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
    z-index: 100;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  .success {
  margin-top: 20px;
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

  .button-login {
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

  #pop {
    width: 750px;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
  }

  .hint {
    line-height: 148px;
  }

  .info {
    width: 731px;
    height: 727px;
    background: #f7f7f7;
    position: absolute;
    bottom: 68px;
    left: 10px;
  }

  .input {
    margin-left: 40px;
    width: 650px;
    height: auto;
    overflow: hidden;
    margin-top: 173px;
    display: block;
  }

  .input-write {
    width: 650px;
    height: 70px;
    background: #ffffff;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 35px;
  }

  .input-cate {
    display: inline-block;
    width: 135px;
    height: 70px;
    text-align-last: justify;
    line-height: 70px;
    color: #404040;
    font-size: 30px;
    /*float: left;*/
    /*letter-spacing: 6px;*/
    padding-left: 10px;
    box-sizing: border-box;
  }

  .mid {
    width: 1px;
    height: 35px;
    border: 1px solid #666666;
    opacity: 0.43;
    display: inline-block;
    margin-left: 20px;
  }

  .write-text {
    width: 510px;
    height: 70px;
    border: none;
    outline: none;
    font-size: 30px;
    letter-spacing: 4px;
    padding-left: 30px;
    box-sizing: border-box;
  }

  .button {
    width: 267px;
    height: 60px;
    background: #009900;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
    margin-left: 12px;
    font-size: 30px;
  }

  .submit {
    width: 730px;
    height: 88px;
    background: #e61f18;
    border-radius: 10px;
    color: #ffffff;
    font-size: 34px;
    font-family: "MicrosoftYaHei-Bold";
    font-weight: bold;
    position: absolute;
    left: 0;
    bottom: 61px;
    text-align: center;
    line-height: 88px;
    letter-spacing: 30px;
  }

  .yuan {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 23px;
    right: 20px;
    z-index: 10;
  }

  .pop-hint {
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

  .pop-center {
    width: 580px;
    /*height: 238px;*/
    overflow: hidden;
    background: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .title-share {
    width: 100%;
    height: 148px;
    text-align: center;
    /*line-height: 148px;*/
    color: #404040;
    font-size: 34px;
  }

  p:nth-of-type(2) {
    font-size: 28px;
  }

  .pop-button {
    width: 100%;
    height: 90px;
    border-top: 1px solid #e2e2e2;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    font-size: 30px;
    text-align: center;
    line-height: 90px;
    color: #e61f18;
  }
</style>
