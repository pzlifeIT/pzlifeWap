webpackJsonp([1],{"+6E+":function(t,e){},"/yKW":function(t,e){},DtcB:function(t,e){},MOGy:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"App",methods:{},mounted:function(){}},s,!1,function(t){o("MOGy")},null,null).exports,n=o("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){o("d1Vo")},"data-v-63e0701f",null).exports;var l=o("Muz9"),r=o.n(l),u=o("3khs"),d=o.n(u);i.a.use(d.a,r.a);var m={name:"bossActive",data:function(){return{where:"a",loginStatus:localStorage.getItem("loginStatus")||!1,webTitle:"招募合伙人",img:"",big_image:"",hid:0,pid:0,name:"",phone:"",code:"",status:!1,msg:!1,title:"",isClick:!0,text:"获取验证码",know:!1,image:"",twoFocus:!1,oneFocus:!1}},created:function(){console.log(this.host.apiHost)},methods:{oneBlur:function(){this.twoFocus||(document.body.scrollTop=document.documentElement.clientHeight)},oneFocus:function(){this.oneFocus=!0,this.twoBlur()},twoFocus:function(){this.twoFocus=!0,this.oneBlur()},twoBlur:function(){this.oneFocus||(document.body.scrollTop=document.documentElement.clientHeight)},isCon_id:function(){localStorage.getItem("con_id")?this.getUser():this.loginStatus=!0},change:function(){document.body.scrollTop=document.documentElement.clientHeight},toB:function(){this.msg=!1},goPageB:function(){this.status=!0},iknow:function(){this.know=!1},submit:function(){var t=this;this.oneBlur(),this.twoBlur();var e=this,o=this.name,s=this.phone;if(""==o)return this.title="请填写姓名",void(this.msg=!0);if(""==s||s.length<11)return this.title="请检查手机号",void(this.msg=!0);var a=this.host.apiHost+"wap/SupPromoteSignUp",n=this.hid,c=localStorage.getItem("con_id");i.a.axios.post(a,{promote_id:n,con_id:c,mobile:s,nick_name:o}).then(function(t){localStorage.getItem("home").split("?")[1];switch(parseInt(t.data.code)){case 200:e.know=!0,e.status=!1;break;case 3e3:e.title="发送失败",e.msg=!0,e.know=!1;break;case 3001:case 3002:e.title="con_id错误",e.msg=!0,e.know=!1;break;case 3003:e.title="promote_id有误",e.msg=!0,e.know=!1;break;case 3004:e.title="手机号错误",e.msg=!0,e.know=!1;break;case 3005:e.title="您已经参加过了",e.msg=!0,e.know=!1;break;case 3006:e.title="请填写姓名",e.msg=!0,e.know=!1;break;case 5e3:e.loginStatus=!0;break;default:e.title="未知错误",e.msg=!0,e.know=!1}}).catch(function(o){t.network(o.response.status),e.know=!1}),console.log(o)},none:function(){this.loginStatus=!1},toLogin:function(){this.$router.push({path:"/login"}),this.loginStatus=!1},getUser:function(){var t=this,e=this.host.apiHost+"user/getuser",o=this,s=localStorage.getItem("con_id");i.a.axios.post(e,{con_id:s}).then(function(t){switch(parseInt(t.data.code)){case 200:o.loginStatus=!1;break;case 5e3:default:o.loginStatus=!0}}).catch(function(e){t.network(e.response.status)})},toHome:function(){this.status=!1},getActive:function(){var t=this,e=this,o=this.host.apiHost+"wap/getSupPromote",s=this.hid;console.log(s),i.a.axios.get(o+"/?promote_id="+s).then(function(o){switch(console.log(o),parseInt(o.data.code)){case 200:e.big_image=o.data.promote.big_image,document.title=o.data.promote.title;var s=t.host.apiHost+"wap/getJsapiTicket/?url="+encodeURIComponent(window.location.href.split("#")[0]),a=t.host.apiHost+"wap/getPromoteShareNum/?promote_id="+e.hid+"&con_id="+localStorage.getItem("con_id");t.WXConfig.wxShowMenu(s,o.data.promote.share_image,o.data.promote.share_title,function(){e.big_image=o.data.promote.bg_image,i.a.axios.get(a).then(function(t){})});var n=localStorage.getItem("bg");n&&(t.active.big_image=n)}},function(t){console.log(t)})},enUrl:function(){var t=window.location.href;if(-1!=t.indexOf("?")){var e=t.split("?")[1].split("&")[0].split("=")[1],o=t.split("?")[1].split("&")[1].split("=")[1];this.hid=e,this.pid=o,localStorage.setItem("pid",o)}},bodyHeight:function(){var t=document.body.clientHeight;window.onload=function(){document.getElementById("app").style.height=t+"px"}},network:function(t){var e="";switch(parseInt(t)){case 201:case 202:case 203:case 204:case 205:case 206:e="服务器无响应";break;case 400:e="错误请求";break;case 401:e="身份验证错误";break;case 403:e="服务器拒绝请求";break;case 404:case 410:e="404错误";break;case 405:e="方法禁用";break;case 406:e="不接受请求";break;case 407:e="需要代理授权";break;case 408:e="请求超时";break;case 409:case 411:case 412:case 415:case 416:case 417:e="请求格式出错";break;case 413:e="请求实体过大";break;case 414:e="请求的URI过长";break;case 500:case 501:case 502:case 503:case 504:case 505:e="服务器错误";break;default:e="网络错误"}this.title=e,this.msg=!0}},mounted:function(){this.enUrl();this.host.apiHost,window.location.href.split("#")[0],this.host.apiHost,this.hid,localStorage.getItem("con_id");console.log(window.location.href.split("#")[0]),this.isCon_id(),this.getActive(),console.log(123456);var t=window.location.href;localStorage.setItem("home",t),this.bodyHeight()}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"container"}},[o("img",{staticClass:"img",attrs:{src:t.big_image,alt:"ss"}}),t._v(" "),o("div",{staticClass:"jump",on:{click:function(e){return t.goPageB()}}},[t._v("报名参加")]),t._v(" "),o("router-view")],1),t._v(" "),t.loginStatus?o("div",{staticClass:"pop"},[o("div",{staticClass:"center"},[o("div",{staticClass:"title"},[t._v("请先登录")]),t._v(" "),o("div",{staticClass:"button-login"},[o("div",{staticClass:"left-button",on:{click:t.none}},[t._v("取消")]),t._v(" "),o("div",{staticClass:"left-button right",on:{click:function(e){return t.toLogin()}}},[t._v("确定")])])])]):t._e(),t._v(" "),t.status?o("div",{attrs:{id:"pop"}},[o("div",{staticClass:"info"},[o("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),o("div",{staticClass:"input"},[o("div",{staticClass:"input-write"},[o("div",{staticClass:"input-cate"},[t._v("姓名")]),t._v(" "),o("div",{staticClass:"mid"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.name},on:{blur:function(e){return t.oneBlur()},focus:function(e){return t.oneFocus()},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"input-write"},[o("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),o("div",{staticClass:"mid"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{blur:function(e){return t.twoBlur()},focus:function(e){return t.twoFocus()},input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("提交")])])]):t._e(),t._v(" "),t.know?o("div",{staticClass:"pop-hint"},[o("div",{staticClass:"pop-center"},[t._m(0),t._v(" "),o("div",{staticClass:"pop-button",on:{click:t.iknow}},[t._v("\n        我知道了\n      ")])])]):t._e(),t._v(" "),t.msg?o("div",{staticClass:"pop-hint"},[o("div",{staticClass:"pop-center"},[o("div",{staticClass:"title"},[o("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),o("div",{staticClass:"pop-button",on:{click:t.toB}},[t._v("\n        我知道了\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-share"},[e("p",{staticClass:"success"},[this._v("报名成功")]),this._v(" "),e("p",[this._v("去分享给好友，一起成为合伙人吧")])])}]};var h=o("VU/8")(m,p,!1,function(t){o("+6E+")},"data-v-390933a8",null).exports;i.a.use(d.a,r.a);var g={name:"B",data:function(){return{name:"",phone:"",code:"",status:!0,msg:!1,title:"",isClick:!0,text:"获取验证码",webTitle:"招募合伙人",hid:0}},methods:{submit:function(){var t=this,e=this.name,o=this.phone;if(""==e)return this.title="请填写姓名",void(this.msg=!0);if(""==o||o.length<11)return this.title="请检查手机号",void(this.msg=!0);var s=this.host.apiHost+"wap/SupPromoteSignUp",a=this.hid,n=localStorage.getItem("con_id");i.a.axios.post(s,{promote_id:a,con_id:n,mobile:o,nick_name:e}).then(function(e){localStorage.getItem("home").split("?")[1];switch(parseInt(e.data.code)){case 200:t.status=!1;break;case 3e3:t.title="发送失败",t.msg=!0,t.status=!0;break;case 3001:case 3002:t.title="con_id错误",t.msg=!0,t.status=!0;break;case 3003:t.title="promote_id有误",t.msg=!0,t.status=!0;break;case 3004:t.title="手机号错误",t.msg=!0,t.status=!0;break;case 3005:t.title="已经参加过了",t.msg=!0,t.status=!0;break;case 3006:t.title="请填写姓名",t.msg=!0,t.status=!0;break;default:t.title="未知错误",t.msg=!0,t.status=!0}}).catch(function(e){t.title="网络错误",t.msg=!0,t.status=!0}),console.log(e),this.status=!1},toB:function(){this.msg=!1},toHome:function(){this.$router.push({path:"/"})}},mounted:function(){var t=this.$route.params.hid;this.hid=t}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var f=o("VU/8")(g,v,!1,function(t){o("/yKW")},"data-v-0b36fd22",null).exports;i.a.use(d.a,r.a);var w={name:"login",data:function(){return{pop:!1,phone:"",vercode:"",text:"获取验证码",isClick:!0,msg:!1,title:"",webTitle:"登录",loginState:0}},methods:{toHome:function(){this.pop=!1},codeLogin:function(){this.isWx(),this.pop=!0},setScroll:function(){/iphone|ipod|ipad/i.test(navigator.appVersion)&&document.addEventListener("blur",function(t){document.documentElement.offsetHeight<=document.documentElement.clientHeight&&["input","textarea"].includes(t.target.localName)&&document.body.scrollIntoView()},!0)},know:function(){this.msg=!1},change:function(){document.body.scrollTop=document.documentElement.clientHeight},getCode:function(){var t=this;if(!this.isClick)return!1;if(""==this.phone||this.phone.length<11)return this.title="请检查手机号",void(this.msg=!0);var e=this.phone,o=this.host.apiHost+"/user/sendvercode";i.a.axios.post(o,{mobile:e,stype:1}).then(function(e){200==e.data.code?t.timeOut():3001==e.data.code?(t.title="手机格式有误",t.msg=!0):3002==e.data.code?(t.title="发送类型有误",t.msg=!0):3003==e.data.code?(t.title="一分钟内不能再次发送",t.msg=!0):3004==e.data.code&&(t.title="短信发送失败",t.msg=!0)}).catch(function(e){t.network(e.response.status)})},timeOut:function(){var t=60,e=this,o=setInterval(function(){if(--t<1)return e.text="获取验证码",e.isClick=!0,void clearInterval(o);e.text=t+" 秒后重发",e.isClick=!1},1e3)},submit:function(){return""==this.phone||this.phone.length<11?(this.title="请检查手机号",void(this.msg=!0)):""==this.vercode?(this.title="验证码不能为空",void(this.msg=!0)):(localStorage.setItem("loginStatus",1),localStorage.setItem("mobile",this.phone),localStorage.setItem("vercode",this.vercode),void this.wxLogin())},isWx:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)||(this.title="请使用微信打开",this.msg=!0,!1)},WX:function(){localStorage.setItem("loginStatus",2),this.wxLogin()},verCode:function(t){var e=this,o=localStorage.getItem("mobile"),s=localStorage.getItem("vercode"),a=this.host.apiHost+"user/wxregister",n=this,c=localStorage.getItem("pid");i.a.axios.post(a,{code:t,mobile:o,vercode:s,buid:c}).then(function(t){switch(console.log(t),parseInt(t.data.code)){case 200:localStorage.setItem("con_id",t.data.con_id);var e=localStorage.getItem("home").split("?")[1];n.$router.replace({path:"/?"+e});break;case 3001:n.title="手机号码错误",n.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;case 3002:n.title="code失效，请登录重新获取",n.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;case 3004:case 3006:n.title="验证码错误",n.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;case 3007:n.title="注册失败",n.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;case 3008:n.title="手机号已注册",n.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;case 3009:n.title="新用户需授权",n.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;default:n.title="意料之外的错误",n.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500)}}).catch(function(t){e.network(t.response.status)})},network:function(t){var e="";switch(parseInt(t)){case 201:case 202:case 203:case 204:case 205:case 206:e="服务器无响应";break;case 400:e="错误请求";break;case 401:e="身份验证错误";break;case 403:e="服务器拒绝请求";break;case 404:case 410:e="404错误";break;case 405:e="方法禁用";break;case 406:e="不接受请求";break;case 407:e="需要代理授权";break;case 408:e="请求超时";break;case 409:case 411:case 412:case 415:case 416:case 417:e="请求格式出错";break;case 413:e="请求实体过大";break;case 414:e="请求的URI过长";break;case 500:case 501:case 502:case 503:case 504:case 505:e="服务器错误";break;default:e="网络错误"}this.title=e,this.msg=!0},wxLogin:function(){var t=this;if(this.isWx()){var e=this.host.apiHost+"user/wxaccredit",o=this;console.log(e);var s=window.location.href;localStorage.setItem("local",s),console.log(s),i.a.axios.post(e,{redirect_uri:s}).then(function(t){switch(console.log(t.data.requestUrl),parseInt(t.data.code)){case 200:window.location.href=t.data.requestUrl;break;case 3e3:case 3001:case 3002:o.title="错误码:"+t.data.code,o.msg=!0;break;default:o.title="预料之外的错误",o.msg=!0}}).catch(function(e){t.network(e.response.status)})}},isCode:function(){var t=window.location.href,e=localStorage.getItem("loginStatus");if(console.log(t),-1!=t.indexOf("code")){var o=t.split("?")[1].split("&")[0].split("=")[1];console.log(o),1==e?this.verCode(o):2==e?this.wxregister(o):alert("loginState为空")}else console.log("未获取到code")},wxregister:function(t){var e=this,o=(this.phone,this.vercode,this.host.apiHost+"user/loginuserbywx"),s=this,a=localStorage.getItem("pid");i.a.axios.post(o,{code:t,platform:2,buid:a}).then(function(t){switch(parseInt(t.data.code)){case 200:localStorage.setItem("con_id",t.data.con_id);var e=localStorage.getItem("home").split("?")[1];s.$router.replace({path:"/?"+e});break;case 3e3:case 3002:s.title="请使用手机号登录",s.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;case 3001:s.title="code已失效，请登录重新获取",s.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;case 3003:s.title="登录失败",s.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500);break;default:s.title="意料之外的错误",s.msg=!0,setTimeout(function(){window.location.replace(localStorage.getItem("local"))},1500)}}).catch(function(t){e.network(t.response.status)})}},mounted:function(){this.isWx(),this.isCode(),this.setScroll()},beforeUpdate:function(){}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"mask"},[o("div",{staticClass:"center"},[t._m(0),t._v(" "),o("div",{staticClass:"wx-login",on:{click:t.WX}},[t._v("微信登录")]),t._v(" "),o("div",{staticClass:"wx-login phone",on:{click:t.codeLogin}},[t._v("手机号注册")])])]),t._v(" "),t.pop?o("div",{attrs:{id:"pop"}},[o("div",{staticClass:"info"},[o("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),o("div",{staticClass:"input"},[o("div",{staticClass:"input-write"},[o("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),o("div",{staticClass:"mid"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{blur:function(e){return t.change()},input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"input-write code"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.vercode,expression:"vercode"}],staticClass:"write-code",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.vercode},on:{blur:function(e){return t.change()},input:function(e){e.target.composing||(t.vercode=e.target.value)}}}),t._v(" "),o("div",{staticClass:"button",on:{click:function(e){return t.getCode()}}},[t._v(t._s(t.text))])])]),t._v(" "),o("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("登录")])])]):t._e(),t._v(" "),t.msg?o("div",{staticClass:"pop-hint"},[o("div",{staticClass:"pop-center"},[o("div",{staticClass:"title"},[o("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),o("div",{staticClass:"pop-button",on:{click:t.know}},[t._v("\n        我知道了\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://webimages.pzlive.vip/logo1.png",alt:""}})])}]};var _=o("VU/8")(w,b,!1,function(t){o("DtcB")},"data-v-59b2129a",null).exports;i.a.use(n.a);var k=new n.a({mode:"history",routes:[{path:"/",name:"A",component:h,meta:{title:"招募合伙人"}},{path:"/b/:hid",name:"B",component:f,meta:{title:"招募合伙人"}},{path:"/login",name:"Login",component:_,meta:{title:"登录"}}]}),C=(o("D0oh"),o("2bvH"));i.a.use(C.a);var S=new C.a.Store,x={install(t,e){t.prototype.host={apiHost:"https://wwwapi.pzlive.vip/index/"}}};i.a.use(d.a,r.a);var I={wxShowMenu:function(t,e,o,s){console.log(t),i.a.axios.get(t).then(function(t){var i=t.data.signPackage;console.log(i.url),console.log(i),wx.config({debug:!1,appId:i.appId,timestamp:parseInt(i.timestamp),nonceStr:i.nonceStr,signature:i.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","showMenuItems"]}),wx.error(function(t){console.log(t)}),wx.ready(function(){wx.onMenuShareTimeline({title:o,desc:"",link:i.url,imgUrl:e,success:function(){s()}}),wx.onMenuShareAppMessage({title:o,desc:"",link:i.url,imgUrl:e,success:function(){s()}})})})}};i.a.use(x),i.a.config.productionTip=!1,i.a.prototype.WXConfig=I,new i.a({el:"#app",router:k,store:S,components:{App:a},template:"<App/>"})},d1Vo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1ba88a626dcb2e2f3164.js.map