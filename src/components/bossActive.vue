<template>
  <div ref="outer" class="outer">
    <div id="container">
      <img class="img" :src="big_image" alt="">
      <img v-for="(v,index) in detail" :src="v.image_path" alt="" class="detail-img">
      <div class="bottom"></div>
      <div class="jump-wai">
        <div class="jump" @click="goPageB()">报名参加</div>
      </div>

      <router-view></router-view>
    </div>

    <div class="pop" v-if="loginStatus">
      <div class="center">
        <div class="title">报名联系人信息</div>
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
            <div class="input-cate">学员姓名</div>
            <div class="mid"></div>
            <input type="text" id="name" @blur="inpBlur()" @focus="inpFocus()" v-model="name" class="write-text"
                   placeholder="请输入姓名"/>
          </div>
          <div class="input-write">
            <div class="input-cate">学员电话</div>
            <div class="mid"></div>
            <input @blur="inpBlur()" @focus="inpFocus()" type="text" v-model="phone" class="write-text"
                   placeholder="请输入电话号码"/>
          </div>
          <div class="input-write">
            <div class="input-cate select-cate">性别</div>
            <div class="mid"></div>
            <div class="se-jt">
              <select name="sex" id="" class="select" v-model="sex">
                <option value="0" class="p-select">请选择性别</option>
                <option value="1">男</option>
                <option value="2">女</option>
              </select>
              <span class="jt"></span>
            </div>
            <div class="middle"></div>
            <div class="input-cate select-cate">年龄</div>
            <div class="mid"></div>
            <input @blur="inpBlur()" @focus="inpFocus()" type="number" v-model="age" class="write-text select-text"
                   placeholder="请输入年龄"/>
          </div>
          <div class="input-write textarea">
            <div class="input-cate textcate">报名内容</div>
            <div class="mid area-mid"></div>
            <textarea @blur="inpBlur()" @focus="inpFocus()" class="write-text area" v-model="content" placeholder="请输入报名项目内容"></textarea>
          </div>
        </div>
        <div class="submit" @click="submit()">提交</div>
      </div>
    </div>

    <div class="pop-hint" v-if="know">
      <div class="pop-center">
        <div class="title-share">
          <div class="pop-title">报名成功</div>
          <img src="https://webimages.pzlive.vip/bao_03.jpg" alt="">
          <p class="success-hint">点击右上角分享给好友</p>
          <p class="success-hint">获得奖品</p>
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
    <div class="pop-hint" v-if="qrcode">
      <div class="qrcode">
        <div class="ok">
          <img class="icon" src="https://webimages.pzlive.vip/cg.png"/>
          <span class="qr-success">转发成功</span>
        </div>
        <img class="line" src="https://webimages.pzlive.vip/xuxian.png" alt="">
        <img class="qr" src="https://webimages.pzlive.vip/gh_3a8652c886d6_344.jpg" alt="">
        <p class="more">长按识别二维码享受更多惊喜</p>
        <img class="cha" src="https://webimages.pzlive.vip/cha.png" alt="" @click="cha()">
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
        loginStatus: false,
        img: "",
        big_image: '',
        hid: 0,
        pid: 0,
        qrcode: false,
        detail: [],
        banner: [],
        qr_img: "",
        name: '',
        vercode: '',
        phone: '',
        sex: 0,
        age: '',
        content: '',
        code: '',
        status: false,
        msg: false,
        title: "",
        isClick: true,
        text: "获取验证码",
        know: false,
        image: '',
        isCanScroll: false,
        clickStatus: true,
        uid: '',
        share_title: '',
        share_image: '',
        login: false
      }
    },
    created() {
      console.log(apiHost)
    },
    methods: {
      inpFocus() {
        // document.body.style.height = window.innerHeight
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          this.isCanScroll = false
        } else {
          this.isCanScroll = false
        }

      },
      inpBlur() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          this.isCanScroll = true
        } else {
          this.isCanScroll = false
        }

      },
      isCon_id() {
        //如果con_id存在就請求獲取用戶信息,如果沒有就提示登陸,登陸完成將con_id存進緩存
        if (localStorage.getItem("con_id")) {
          // this.getUser()
        } else {
          this.loginStatus = true
        }
      },
      change() {
        document.body.scrollTop = document.body.scrollIntoView();
      },
      //获取验证码
      getCode() {
        if (!this.isClick) {
          return false
        }
        if (this.phone == '' || this.phone.length < 11) {
          this.title = "请检查手机号";
          this.msg = true;
          return
        }
        let phone = this.phone;
        let api = apiHost + '/user/sendvercode'
        Vue.axios.post(api, {mobile: phone, stype: 5}).then((res) => {
          if (res.data.code == 200) {
            this.timeOut()
          } else if (res.data.code == 3001) {
            this.title = '手机格式有误';
            this.msg = true
          } else if (res.data.code == 3002) {
            this.title = '发送类型有误';
            this.msg = true
          } else if (res.data.code == 3003) {
            this.title = '一分钟内不能再次发送';
            this.msg = true
          } else if (res.data.code == 3004) {
            this.title = '短信发送失败';
            this.msg = true
          }
        }).catch((res) => {
          this.network(res.response.status)
        })
      },
      timeOut: function () {
        let time = 60;
        let that = this;
        let i = setInterval(function () {
          time--;
          if (time < 1) {
            that.text = '获取验证码';
            that.isClick = true;
            clearInterval(i);
            return
          }
          that.text = time + ' 秒后重发';
          that.isClick = false
        }, 1000)
      },
      toB() {
        this.msg = false
      },
      goPageB() {
        this.getUser(true)
        // this.status = true
      },
      iknow() {
        this.know = false
      },
      cha() {
        this.qrcode = false
      },
      //提交
      submit() {
        document.body.scrollTop = document.body.scrollIntoView();
        if (!this.clickStatus) return
        let that = this;
        let name = this.name;
        let phone = this.phone;
        let vercode = this.vercode;
        let age = Math.floor(this.age);
        let content = this.content;
        let pname = this.pname;
        let sex = this.sex;
        let pphone = this.pphone
        console.log(age)
        console.log(content)
        console.log(pname)
        if (name == '') {
          this.title = "请填写学员姓名";
          this.msg = true;
          return
        }
        if (phone == '') {
          this.title = "请检查电话号码";
          this.msg = true;
          return
        }
        if (sex == 0) {
          this.title = '请选择性别';
          this.msg = true;
          return
        }
        if (age == '' || age < 0 || age > 100) {
          this.title = '请检查年龄';
          this.msg = true;
          return
        }
        if (content == '') {
          this.title = '请填写报名内容';
          this.msg = true;
          return
        }
        let api = apiHost + 'wap/SupPromoteSignUp';
        let hid = this.hid;
        let con_id = localStorage.getItem('con_id');
        Vue.axios.post(api, {
          promote_id: hid,
          con_id: con_id,
          study_mobile: phone,
          study_name: name,
          sex: sex,
          age: age,
          signinfo: content
        }).then((res) => {
          that.clickStatus = true
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
              that.title = '该参与人已参加过';
              that.msg = true;
              that.know = false;
              break;
            case 3006:
              that.title = '请填写姓名';
              that.msg = true;
              that.know = false;
              break;
            case 3007:
            case 3008:
              that.title = '验证码错误';
              that.msg = true;
              that.know = false;
              break;
            case 3009:
              that.title = '性别格式不对';
              that.msg = true;
              that.know = false;
              break;
            case 3010:
              that.title = '年龄格式错误';
              that.msg = true;
              that.know = false;
              break;
            case 3011:
              that.title = '报名内容不能为空';
              that.msg = true;
              that.know = false;
              break;
            case 3012:
              that.title = '学员姓名不能为空';
              that.msg = true;
              that.know = false;
              break;
            case 3013:
              that.title = '请检查电话号码';
              that.msg = true;
              that.know = false;
              break;
            case 5000:
              that.loginStatus = true;
              that.know = false;
              break;
            default:
              that.title = '意料之外的错误';
              that.msg = true;
              that.know = false;
              break;
          }
        }).catch((res) => {
          that.clickStatus = true
          this.network(res.response.status)
          that.know = false;
        })
        console.log(name)
      },
      none() {
        this.loginStatus = false
        window.scrollTo(0, 0)
      },
      toLogin() {
        this.$router.push({path: '/login'});
        this.loginStatus = false
      },
      //獲取用戶信息
      getUser(status) {
        let api = apiHost + 'user/getuser';
        let that = this;
        let con_id = localStorage.getItem("con_id");
        //獲取成功就成功,如果是5000就提示登陸
        Vue.axios.post(api, {con_id: con_id}).then((res) => {
          let code = parseInt(res.data.code)
          console.log(res.data.data)
          switch (code) {
            case 200:
              that.uid = res.data.data.uid
              that.loginStatus = false;
              that.login = true;
              that.status = status;
              let pid = res.data.data.uid || that.pid;
              let locaUrl = window.location.origin + '/?hid=' + that.hid + "&pid=" + pid;
              let urlArray = locaUrl.split("?")[1].split("&")[1].split("=")[1];
              let newUrl = res.data.data.uid ? locaUrl.toString().replace(urlArray, res.data.data.uid) : locaUrl
              console.log(newUrl);
              let Host = apiHost + 'wap/getJsapiTicket/?url=' + encodeURIComponent(window.location.href.split('#')[0]);
              let api = apiHost + 'wap/getPromoteShareNum/?promote_id=' + that.hid + '&con_id=' + localStorage.getItem('con_id')

              this.WXConfig.wxShowMenu(Host, that.share_image, that.share_title,newUrl, function () {
                that.qrcode = true
                Vue.axios.get(api).then((res) => {

                })
              });
              break;
            case 5000:
              that.loginStatus = status;
              that.login = false
              break;
            default:
              that.loginStatus = status;
              that.login = false
              break;
          }
        }).catch((res) => {
          this.network(res.response.status)
        })
      },
      toHome() {
        this.status = false
      },
      getActive() {
        let that = this;
        let api = apiHost + 'wap/getSupPromote';
        let id = this.hid;
        // alert('get'+id)
        console.log(id)
        Vue.axios.get(api + '/?promote_id=' + id).then((res) => {
          console.log(res)
          switch (parseInt(res.data.code)) {
            case 200:

              that.big_image = res.data.promote.big_image;
              that.detail = res.data.detail;
              that.banner = res.data.banner;
              that.share_title = res.data.promote.share_title;
              that.share_image = res.data.promote.share_image;

              document.title = res.data.promote.title

              if (window.location.href.indexOf("ls") != -1) {
                this.getUser(true)
              } else {
                this.getUser(false)
              }
              let bg = localStorage.getItem('bg');
              if (bg) {
                this.active.big_image = bg
              }
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
          // alert(hid)
          this.pid = pid;
          localStorage.setItem('pid', pid)
        }

      },
      bodyHeight() {
        let h = document.body.clientHeight
        window.onload = function () {
          document.getElementById('app').style.height = h + 'px'
        }
      },
      network(code) {
        let text = ""
        switch (parseInt(code)) {
          case 201:
          case 202:
          case 203:
          case 204:
          case 205:
          case 206:
            text = "服务器无响应"
            break;
          case 400:
            text = "错误请求"
            break;
          case 401:
            text = "身份验证错误"
            break;
          case 403:
            text = "服务器拒绝请求"
            break;
          case 404:
          case 410:
            text = "404错误"
            break;
          case 405:
            text = "方法禁用"
            break;
          case 406:
            text = "不接受请求"
            break;
          case 407:
            text = "需要代理授权"
            break;
          case 408:
            text = "请求超时"
            break;
          case 409:
          case 411:
          case 412:
          case 415:
          case 416:
          case 417:
            text = "请求格式出错"
            break;
          case 413:
            text = "请求实体过大"
            break;
          case 414:
            text = "请求的URI过长"
            break;
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 505:
            text = "服务器错误"
            break;
          default:
            text = "网络错误"
        }
        this.title = text;
        this.msg = true
      }
    },
    watch: {
      'isCanScroll'(value) {
        if (value) {
          // setTimeout(function () {
          //   this.$refs.outer.scrollIntoView()
          // }, 100)
          setTimeout(() => {
            window.scrollTo(0, document.body.scrollTop + 1);
            document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1);
          }, 10);
        }
      }
    },
    mounted() {
      this.enUrl();
      this.getActive();
      // alert(this.big_image)
      let Host = apiHost + 'wap/getJsapiTicket/?url=' + window.location.href.split('#')[0];
      let api = apiHost + 'wap/getPromoteShareNum/?promote_id=' + this.hid + '&con_id=' + localStorage.getItem('con_id')
      console.log(window.location.href.split('#')[0])
      console.log(123456);
      let url = window.location.href
      localStorage.setItem("home", url);
      console.log(localStorage.getItem("home"))
      this.bodyHeight()

    }
  }
</script>

<style scoped>
  select {
    -webkit-appearance: none;
    background-color: transparent;
    border-color: transparent;
    /*text-indent: 4px;*/
  }

  * {
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
  }

  .outer {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  #container {
    margin-top: 14px;
    padding-left: 10px;
    box-sizing: border-box;
    overflow-x: hidden;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: -1;*/
  }

  .img {
    width: 730px;
    /*height: 973px;*/
    height: auto;
  }

  .jump-wai {
    width: 750px;
    height: 110px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    background: #ffffff;
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

  .bottom {
    width: 750px;
    height: 120px;
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
    margin-top: 30px;
    margin-bottom: 25px;
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
    height: 797px;
    background: #f7f7f7;
    position: absolute;
    bottom: 0px;
    left: 10px;
  }

  .input {
    margin-left: 40px;
    width: 650px;
    height: auto;
    overflow: hidden;
    margin-top: 90px;
    display: block;
  }

  .detail-img {
    width: 730px;
    height: auto;
    /*height: 750px;*/
    /*object-fit: contain;*/
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
    margin-bottom: 20px;
  }

  .textarea {
    height: 201px;
  }

  .input-cate {
    display: inline-block;
    width: 185px;
    height: 100%;
    text-align-last: justify;
    line-height: 70px;
    color: #404040;
    font-size: 30px;
    /*float: left;*/
    /*letter-spacing: 6px;*/
    padding-left: 10px;
    box-sizing: border-box;
  }

  .textcate {
    height: 101px;
    line-height: 101px;
  }

  .mid {
    width: 0px;
    height: 35px;
    border: 2px solid #666666;
    opacity: 0.43;
    display: inline-block;
    margin-left: 20px;
  }

  .area-mid {
    height: 145px;
  }

  .write-text {
    width: 510px;
    height: 100%;
    border: none;
    outline: none;
    font-size: 30px;
    letter-spacing: 4px;
    padding-left: 30px;
    box-sizing: border-box;
  }

  .area {
    height: 145px;
    /*padding-top: 10px;*/
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 30px;
  }

  .code {
    background: #f7f7f7;
  }

  .write-code {
    width: 370px;
    height: 60px;
    background: #ffffff;
    font-size: 30px;
    letter-spacing: 4px;
    padding-left: 30px;
    box-sizing: border-box;
    border: none;
    outline: none;
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
    bottom: 51px;
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
    width: 530px;
    /*height: 238px;*/
    overflow: hidden;
    background: #f7f7f7;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 63px 0 36px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-share {
    width: 100%;
    /*height: 148px;*/
    text-align: center;
    /*line-height: 148px;*/
    color: #404040;
    font-size: 34px;
  }

  .title-share img {
    width: 262px;
    height: 262px;
    margin-top: 16px;
  }

  .success-hint {
    font-size: 30px;
    margin-top: 26px;
  }

  .pop-title {
    width: 100%;
    text-align: center;
    font-size: 40px;
    color: #565251;
    font-weight: bold;
  }

  .pop-button {
    width: 408px;
    height: 71px;
    background: #e61f18;
    color: #ffffff;
    /*border-top: 1px solid #e2e2e2;*/
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    font-size: 30px;
    text-align: center;
    line-height: 71px;
    margin-top: 26px;
    border-radius: 5px;
  }

  .qrcode {
    width: 700px;
    height: 828px;
    padding: 67px 49px 81px;
    box-sizing: border-box;
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
    position: relative;
  }

  .ok {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 53px;
    height: 53px;
  }

  .qr-success {
    color: #e61f18;
    font-size: 38px;
    display: inline-block;
    margin-left: 25px;
  }

  .line {
    width: 608px;
    height: 4px;
    margin-top: 69px;
  }

  .qr {
    width: 370px;
    /*height: 370px;*/
    margin-top: 59px;
    object-fit: cover;
  }

  .more {
    color: #121212;
    font-size: 36px;
    text-align: center;
    margin-top: 70px;
  }

  .cha {
    position: absolute;
    bottom: -120px;
    width: 100px;
    height: 100px;
    left: 300px;
  }

  .select-cate {
    width: 95px;
    height: 100%;
  }

  .select {
    width: 223px;
    height: 100%;
    outline: none;
    border: none;
    text-align: center;
    padding-left: 16px;
    box-sizing: border-box;
    font-size: 30px;
  }

  .select option {
    text-align: center;
    font-size: 30px;
  }

  .select-text {
    width: 224px;
  }

  .middle {
    width: 10px;
    height: 100%;
    background: #f7f7f7;
  }

  .se-jt {
    position: relative;
  }

  .p-select {
    color: #ccc;
  }

  .jt {
    display: inline-block;
    height: 20px;
    width: 20px;
    position: absolute;
    right: 12px;
    top: 0;
    transform: rotate(135deg);
    border-top: 1px solid #404040;
    border-right: 1px solid #404040;
  }
</style>
