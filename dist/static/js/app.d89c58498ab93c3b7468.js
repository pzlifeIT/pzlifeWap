webpackJsonp([1],{"1qq4":function(t,e){},"4tbX":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App",data:function(){return{webTitle:"招募合伙人"}}},o,!1,function(t){i("1qq4")},null,null).exports,n=i("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){i("d1Vo")},"data-v-63e0701f",null).exports;var r=i("Muz9"),l=i.n(r),u=i("3khs"),v=i.n(u);s.a.use(v.a,l.a);var d={name:"bossActive",data:function(){return{where:"a",loginStatus:localStorage.getItem("loginStatus")||!1,webTitle:"招募合伙人",img:"https://webimages.pzlive.vip/zhaos.png"}},created:function(){console.log(this.host.apiHost)},methods:{isCon_id:function(){localStorage.getItem("con_id")?this.getUser():this.loginStatus=!0},getLoginStatus:function(){var t=this.host.apiHost+"user/getuser";s.a.axios.post(t)},none:function(){this.loginStatus=!1},toLogin:function(){this.$router.push({path:"/login"}),this.loginStatus=!1},getUser:function(){var t=this.host.apiHost+"user/getuser",e=this,i=localStorage.getItem("con_id");s.a.axios.post(t,{con_id:i}).then(function(t){}).catch(function(t){switch(parseInt(t.code)||parseInt(t.data.code)){case 5e3:default:e.loginStatus=!0}})}},mounted:function(){this.isCon_id()}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"container"}},[i("img",{staticClass:"img",attrs:{src:t.img,alt:""}}),t._v(" "),i("router-link",{staticClass:"jump",attrs:{to:"/b"}},[t._v("报名参加")]),t._v(" "),i("router-view")],1),t._v(" "),t.loginStatus?i("div",{staticClass:"pop"},[i("div",{staticClass:"center"},[i("div",{staticClass:"title"},[t._v("请先登录")]),t._v(" "),i("div",{staticClass:"button"},[i("div",{staticClass:"left-button",on:{click:t.none}},[t._v("取消")]),t._v(" "),i("div",{staticClass:"left-button right",on:{click:function(e){return t.toLogin()}}},[t._v("确定")])])])]):t._e()])},staticRenderFns:[]};var h=i("VU/8")(d,p,!1,function(t){i("4tbX")},"data-v-257eb3e0",null).exports;s.a.use(v.a,l.a);var m={name:"B",data:function(){return{name:"",phone:"",code:"",status:!0,msg:!1,title:"",isClick:!0,text:"获取验证码",webTitle:"招募合伙人"}},methods:{submit:function(){var t=this.name,e=this.phone,i=this.code;return""==t?(this.title="请填写姓名",void(this.msg=!0)):""==e||e.length<11?(this.title="请检查手机号",void(this.msg=!0)):""==i?(this.title="请填写验证码",void(this.msg=!0)):(console.log(t),void(this.status=!1))},toB:function(){this.msg=!1},getCode:function(){var t=this;if(!this.isClick)return!1;if(""==this.phone||this.phone.length<11)return this.title="请检查手机号",void(this.msg=!0);var e=this.phone;s.a.axios.post("https://wwwapi.pzlive.vip/index/user/sendvercode",{mobile:e,stype:3}).then(function(e){t.timeOut()}).catch(function(t){})},timeOut:function(){var t=60,e=this,i=setInterval(function(){if(--t<1)return e.text="获取验证码",e.isClick=!0,void clearInterval(i);e.text=t+"秒后重发",e.isClick=!1},1e3)},toHome:function(){this.$router.push({path:"/"})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.status?i("div",{attrs:{id:"pop"}},[i("div",{staticClass:"info"},[i("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),i("div",{staticClass:"input"},[i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("姓名")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-write code"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"write-code",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),i("div",{staticClass:"button",on:{click:function(e){return t.getCode()}}},[t._v(t._s(t.text))])])]),t._v(" "),i("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("提交")])])]):i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[t._m(0),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.toHome}},[t._v("\n        我知道了\n      ")])])]),t._v(" "),t.msg?i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[i("div",{staticClass:"title"},[i("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.toB}},[t._v("\n        我知道了\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("p",[this._v("报名成功")]),this._v(" "),e("p",[this._v("去分享给好友，一起成为合伙人吧")])])}]};var f=i("VU/8")(m,g,!1,function(t){i("xbP9")},"data-v-21a2baa0",null).exports;s.a.use(v.a,l.a);var _={name:"login",data:function(){return{pop:!1,phone:"",vercode:"",text:"获取验证码",isClick:!0,msg:!1,title:"",webTitle:"登录",loginState:0}},methods:{toHome:function(){this.pop=!1},codeLogin:function(){this.pop=!0},know:function(){this.msg=!1},getCode:function(){var t=this;if(!this.isClick)return!1;if(""==this.phone||this.phone.length<11)return this.title="请检查手机号",void(this.msg=!0);var e=this.phone,i=this.host.apiHost+"/user/sendvercode";s.a.axios.post(i,{mobile:e,stype:3}).then(function(e){t.timeOut()})},timeOut:function(){var t=60,e=this,i=setInterval(function(){if(--t<1)return e.text="获取验证码",e.isClick=!0,void clearInterval(i);e.text=t+"秒后重发",e.isClick=!1},1e3)},submit:function(){return""==this.phone||this.phone.length<11?(this.title="请检查手机号",void(this.msg=!0)):""==this.vercode?(this.title="验证码不能为空",void(this.msg=!0)):(this.loginState=1,void this.wxLogin(1))},isWx:function(){var t=window.navigator.userAgent.toLowerCase();return console.log(t),"micromessenger"==t.match(/MicroMessenger/i)||(this.title="请使用微信打开",this.msg=!0,!1)},WX:function(){this.loginState=2,this.wxLogin(2)},verCode:function(){var t=localStorage.getItem("code"),e=this.phone,i=this.vercode,o=this.host.apiHost+"user/wxregister",a=this;s.a.axios.post(o,{code:t,mobile:e,vercode:i}).then(function(t){switch(console.log(t),parseInt(t.code)){case 200:localStorage.setItem("con_id",t.con_id),a.$router.push({path:"/"});break;case 3001:a.title="手机号码错误",a.msg=!0;break;case 3002:localStorage.setItem("code",""),a.title="code已失效，请再次点击登录重新获取",a.msg=!0;break;case 3004:case 3006:a.title="验证码错误",a.msg=!0;break;case 3007:a.title="注册失败",a.msg=!0;break;case 3008:a.title="手机号已注册",a.msg=!0;break;case 3009:a.title="新用户需授权",a.msg=!0;break;default:a.title="意料之外的错误",a.msg=!0}}).catch(function(t){a.title="网络错误",a.msg=!0})},wxLogin:function(t){if(this.isWx())if(1==t&&localStorage.getItem("code"))this.verCode();else if(2==t&&localStorage.getItem("code"))this.wxregister();else{var e=this.host.apiHost+"user/wxaccredit",i=this;console.log(e);var o=window.location.href;console.log(o),s.a.axios.post(e,{redirect_uri:o}).then(function(t){switch(console.log(t.data.requestUrl),parseInt(t.data.code)){case 200:s.a.axios.get(t.data.requestUrl).then(function(t){i.isCode()},function(t){console.log("456"+t)});break;case 3e3:case 3001:case 3002:i.title="错误码:"+t.data.code,i.msg=!0;break;default:i.title="预料之外的错误",i.msg=!0}}).catch(function(t){i.title="接口请求失败",i.msg=!0})}},isCode:function(){var t=window.location.href;if(console.log(t),-1!=t.indexOf("code")){localStorage.setItem("loginStatus",!1);var e=t.split("?")[1].split("&")[0].split("=")[1];localStorage.setItem("code",e),1==this.loginState?this.verCode():2==this.loginState&&this.wxregister()}else this.wxLogin()},wxregister:function(){var t=localStorage.getItem("code"),e=this.host.apiHost+"user/loginuserbywx",i=this;s.a.axios.post(e,{code:t,platform:2}).then(function(t){switch(parseInt(t.code)){case 200:localStorage.setItem("con_id",t.con_id),i.$router.push({path:"/"});break;case 3e3:case 3002:i.title="请使用手机号登录",i.msg=!0;break;case 3001:localStorage.setItem("code",""),i.title="code已失效，请再次点击登录重新获取",i.msg=!0;break;case 3003:i.title="登录失败",i.msg=!0;break;default:i.title="意料之外的错误",i.msg=!0}}).catch(function(t){console.log(t)})}},mounted:function(){this.isCode()}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"mask"},[i("div",{staticClass:"center"},[t._m(0),t._v(" "),i("div",{staticClass:"wx-login",on:{click:t.wxLogin}},[t._v("微信登录")]),t._v(" "),i("div",{staticClass:"wx-login phone",on:{click:t.codeLogin}},[t._v("手机号登录")])])]),t._v(" "),t.pop?i("div",{attrs:{id:"pop"}},[i("div",{staticClass:"info"},[i("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),i("div",{staticClass:"input"},[i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-write code"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.vercode,expression:"vercode"}],staticClass:"write-code",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.vercode},on:{input:function(e){e.target.composing||(t.vercode=e.target.value)}}}),t._v(" "),i("div",{staticClass:"button",on:{click:function(e){return t.getCode()}}},[t._v(t._s(t.text))])])]),t._v(" "),i("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("登录")])]),t._v(" "),t.msg?i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[i("div",{staticClass:"title"},[i("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.know}},[t._v("\n          我知道了\n        ")])])]):t._e()]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://webimages.pzlive.vip/logo1.png",alt:""}})])}]};var w=i("VU/8")(_,C,!1,function(t){i("iwuF")},"data-v-354505c5",null).exports;s.a.use(n.a);var x=new n.a({routes:[{path:"/",name:"A",component:h,meta:{title:"招募合伙人"}},{path:"/b",name:"B",component:f,meta:{title:"招募合伙人"}},{path:"/login",name:"Login",component:w,meta:{title:"登录"}}]}),b=(i("D0oh"),i("2bvH"));s.a.use(b.a);var k=new b.a.Store,S={install(t,e){t.prototype.host={apiHost:"https://wwwapi.pzlive.vip/index/"}}};s.a.use(S),s.a.config.productionTip=!1,x.beforeEach(function(t,e,i){t.meta.title&&(document.title=t.meta.title),i()}),new s.a({el:"#app",router:x,store:k,components:{App:a},template:"<App/>"})},d1Vo:function(t,e){},iwuF:function(t,e){},xbP9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d89c58498ab93c3b7468.js.map