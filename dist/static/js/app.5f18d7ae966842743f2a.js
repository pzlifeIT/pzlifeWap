webpackJsonp([1],{"/6kV":function(t,e){},"3q7I":function(t,e){},Cq3j:function(t,e){},Mqxe:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},a,!1,function(t){i("/6kV")},null,null).exports,n=i("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){i("d1Vo")},"data-v-63e0701f",null).exports;var r=i("Muz9"),l=i.n(r),u=i("3khs"),d=i.n(u);s.a.use(d.a,l.a);var p={name:"bossActive",data:function(){return{where:"a",loginStatus:localStorage.getItem("loginStatus")||!1,webTitle:"招募合伙人",img:"",active:{},hid:0,pid:0,name:"",phone:"",code:"",status:!1,msg:!1,title:"",isClick:!0,text:"获取验证码",know:!1}},created:function(){console.log(this.host.apiHost)},methods:{isCon_id:function(){localStorage.getItem("con_id")?this.getUser():this.loginStatus=!0},toB:function(){this.msg=!1},goPageB:function(){this.status=!0},iknow:function(){this.know=!1},submit:function(){var t=this,e=this.name,i=this.phone;if(""==e)return this.title="请填写姓名",void(this.msg=!0);if(""==i||i.length<11)return this.title="请检查手机号",void(this.msg=!0);var a=this.host.apiHost+"wap/SupPromoteSignUp",o=this.hid,n=localStorage.getItem("con_id");s.a.axios.post(a,{promote_id:o,con_id:n,mobile:i,nick_name:e}).then(function(e){localStorage.getItem("home").split("?")[1];switch(parseInt(e.data.code)){case 200:t.know=!0,t.status=!1;break;case 3e3:t.title="发送失败",t.msg=!0,t.know=!1;break;case 3001:case 3002:t.title="con_id错误",t.msg=!0,t.know=!1;break;case 3003:t.title="promote_id有误",t.msg=!0,t.know=!1;break;case 3004:t.title="手机号错误",t.msg=!0,t.know=!1;break;case 3005:t.title="您已经参加过了",t.msg=!0,t.know=!1;break;case 3006:t.title="请填写姓名",t.msg=!0,t.know=!1;break;case 5e3:t.loginStatus=!0;break;default:t.title="未知错误",t.msg=!0,t.know=!1}}).catch(function(e){t.title="网络错误",t.msg=!0,t.know=!1}),console.log(e)},none:function(){this.loginStatus=!1},toLogin:function(){this.$router.push({path:"/login"}),this.loginStatus=!1},getUser:function(){var t=this.host.apiHost+"user/getuser",e=this,i=localStorage.getItem("con_id");s.a.axios.post(t,{con_id:i}).then(function(t){switch(parseInt(t.data.code)){case 200:e.loginStatus=!1;break;case 5e3:default:e.loginStatus=!0}}).catch(function(t){})},toHome:function(){this.status=!1},getActive:function(){var t=this,e=this,i=this.host.apiHost+"wap/getSupPromote",a=this.hid;console.log(a),s.a.axios.get(i+"/?promote_id="+a).then(function(i){switch(console.log(i),parseInt(i.data.code)){case 200:localStorage.setItem("active",i.data.promote),e.active=i.data.promote,document.getElementById("title").innerHTML=i.data.promote.title;var s=t.host.apiHost+"wap/getJsapiTicket/?url="+window.location.origin,a=t.host.apiHost+"wap/getPromoteShareNum/?promote_id="+e.hid+"&con_id="+localStorage.getItem("con_id");t.WXConfig.wxShowMenu(s,i.data.promote.share_image,i.data.promote.share_title,a)}},function(t){console.log(t)})},enUrl:function(){var t=window.location.href;if(-1!=t.indexOf("?")){var e=t.split("?")[1].split("&")[0].split("=")[1],i=t.split("?")[1].split("&")[1].split("=")[1];this.hid=e,this.pid=i}}},mounted:function(){this.enUrl();this.host.apiHost,window.location.origin,this.host.apiHost,this.hid,localStorage.getItem("con_id");this.isCon_id(),this.getActive(),console.log(123456);var t=window.location.href;localStorage.setItem("home",t)}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"container"}},[i("img",{staticClass:"img",attrs:{src:t.active.big_image,alt:""}}),t._v(" "),i("div",{staticClass:"jump",on:{click:function(e){return t.goPageB()}}},[t._v("报名参加")]),t._v(" "),i("router-view")],1),t._v(" "),t.loginStatus?i("div",{staticClass:"pop"},[i("div",{staticClass:"center"},[i("div",{staticClass:"title"},[t._v("请先登录")]),t._v(" "),i("div",{staticClass:"button-login"},[i("div",{staticClass:"left-button",on:{click:t.none}},[t._v("取消")]),t._v(" "),i("div",{staticClass:"left-button right",on:{click:function(e){return t.toLogin()}}},[t._v("确定")])])])]):t._e(),t._v(" "),t.status?i("div",{attrs:{id:"pop"}},[i("div",{staticClass:"info"},[i("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),i("div",{staticClass:"input"},[i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("姓名")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("提交")])])]):t._e(),t._v(" "),t.know?i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[t._m(0),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.iknow}},[t._v("\n        我知道了\n      ")])])]):t._e(),t._v(" "),t.msg?i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[i("div",{staticClass:"title"},[i("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.toB}},[t._v("\n        我知道了\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-share"},[e("p",{staticClass:"success"},[this._v("报名成功")]),this._v(" "),e("p",[this._v("去分享给好友，一起成为合伙人吧")])])}]};var m=i("VU/8")(p,h,!1,function(t){i("3q7I")},"data-v-37867ae2",null).exports;s.a.use(d.a,l.a);var g={name:"B",data:function(){return{name:"",phone:"",code:"",status:!0,msg:!1,title:"",isClick:!0,text:"获取验证码",webTitle:"招募合伙人",hid:0}},methods:{submit:function(){var t=this,e=this.name,i=this.phone;if(""==e)return this.title="请填写姓名",void(this.msg=!0);if(""==i||i.length<11)return this.title="请检查手机号",void(this.msg=!0);var a=this.host.apiHost+"wap/SupPromoteSignUp",o=this.hid,n=localStorage.getItem("con_id");s.a.axios.post(a,{promote_id:o,con_id:n,mobile:i,nick_name:e}).then(function(e){localStorage.getItem("home").split("?")[1];switch(parseInt(e.data.code)){case 200:t.status=!1;break;case 3e3:t.title="发送失败",t.msg=!0,t.status=!0;break;case 3001:case 3002:t.title="con_id错误",t.msg=!0,t.status=!0;break;case 3003:t.title="promote_id有误",t.msg=!0,t.status=!0;break;case 3004:t.title="手机号错误",t.msg=!0,t.status=!0;break;case 3005:t.title="已经参加过了",t.msg=!0,t.status=!0;break;case 3006:t.title="请填写姓名",t.msg=!0,t.status=!0;break;default:t.title="未知错误",t.msg=!0,t.status=!0}}).catch(function(e){t.title="网络错误",t.msg=!0,t.status=!0}),console.log(e),this.status=!1},toB:function(){this.msg=!1},toHome:function(){this.$router.push({path:"/"})}},mounted:function(){var t=this.$route.params.hid;alert(t),this.hid=t}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var f=i("VU/8")(g,v,!1,function(t){i("Cq3j")},"data-v-8ff161d2",null).exports;s.a.use(d.a,l.a);var _={name:"login",data:function(){return{pop:!1,phone:"",vercode:"",text:"获取验证码",isClick:!0,msg:!1,title:"",webTitle:"登录",loginState:0}},methods:{toHome:function(){this.pop=!1},codeLogin:function(){this.pop=!0,this.isWx()},know:function(){this.msg=!1},getCode:function(){var t=this;if(!this.isClick)return!1;if(""==this.phone||this.phone.length<11)return this.title="请检查手机号",void(this.msg=!0);var e=this.phone,i=this.host.apiHost+"/user/sendvercode";s.a.axios.post(i,{mobile:e,stype:1}).then(function(e){200==e.data.code&&t.timeOut()})},timeOut:function(){var t=60,e=this,i=setInterval(function(){if(--t<1)return e.text="获取验证码",e.isClick=!0,void clearInterval(i);e.text=t+" 秒后重发",e.isClick=!1},1e3)},submit:function(){return""==this.phone||this.phone.length<11?(this.title="请检查手机号",void(this.msg=!0)):""==this.vercode?(this.title="验证码不能为空",void(this.msg=!0)):(localStorage.setItem("loginStatus",1),void this.wxLogin())},isWx:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)||(this.title="请使用微信打开",this.msg=!0,!1)},WX:function(){localStorage.setItem("loginStatus",2),this.wxLogin()},verCode:function(t){var e=this.phone,i=this.vercode,a=this.host.apiHost+"user/wxregister",o=this;s.a.axios.post(a,{code:t,mobile:e,vercode:i}).then(function(t){switch(console.log(t),parseInt(t.data.code)){case 200:localStorage.setItem("con_id",t.data.con_id);var e=localStorage.getItem("home").split("?")[1];o.$router.push({path:"/?"+e});break;case 3001:o.title="手机号码错误",o.msg=!0;break;case 3002:localStorage.setItem("code",""),o.title="code已失效，请再次点击登录重新获取",o.msg=!0;break;case 3004:case 3006:o.title="验证码错误",o.msg=!0;break;case 3007:o.title="注册失败",o.msg=!0;break;case 3008:o.title="手机号已注册",o.msg=!0;break;case 3009:o.title="新用户需授权",o.msg=!0;break;default:o.title="意料之外的错误",o.msg=!0}}).catch(function(t){o.title="网络错误",o.msg=!0})},wxLogin:function(){if(this.isWx()){var t=this.host.apiHost+"user/wxaccredit",e=this;console.log(t);var i=window.location.href;console.log(i),s.a.axios.post(t,{redirect_uri:i}).then(function(t){switch(console.log(t.data.requestUrl),parseInt(t.data.code)){case 200:window.location.href=t.data.requestUrl;break;case 3e3:case 3001:case 3002:e.title="错误码:"+t.data.code,e.msg=!0;break;default:e.title="预料之外的错误",e.msg=!0}}).catch(function(t){e.title="接口请求失败",e.msg=!0})}},isCode:function(){var t=window.location.href,e=localStorage.getItem("loginStatus");if(console.log(t),-1!=t.indexOf("code")){var i=t.split("?")[1].split("&")[0].split("=")[1];console.log(i),1==e?this.verCode(i):2==e?this.wxregister(i):alert("loginState为空")}else console.log("未获取到code")},wxregister:function(t){var e=this.host.apiHost+"user/loginuserbywx",i=this;s.a.axios.post(e,{code:t,platform:2}).then(function(t){switch(parseInt(t.data.code)){case 200:localStorage.setItem("con_id",t.data.con_id);var e=localStorage.getItem("home").split("?")[1];i.$router.push({path:"/?"+e});break;case 3e3:case 3002:i.title="请使用手机号登录",i.msg=!0;break;case 3001:localStorage.setItem("code",""),i.title="code已失效，请再次点击登录重新获取",i.msg=!0;break;case 3003:i.title="登录失败",i.msg=!0;break;default:i.title="意料之外的错误",i.msg=!0}}).catch(function(t){console.log(t)})}},mounted:function(){this.isWx(),this.isCode()},beforeUpdate:function(){}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"mask"},[i("div",{staticClass:"center"},[t._m(0),t._v(" "),i("div",{staticClass:"wx-login",on:{click:t.WX}},[t._v("微信登录")]),t._v(" "),i("div",{staticClass:"wx-login phone",on:{click:t.codeLogin}},[t._v("手机号登录")])])]),t._v(" "),t.pop?i("div",{attrs:{id:"pop"}},[i("div",{staticClass:"info"},[i("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),i("div",{staticClass:"input"},[i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-write code"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.vercode,expression:"vercode"}],staticClass:"write-code",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.vercode},on:{input:function(e){e.target.composing||(t.vercode=e.target.value)}}}),t._v(" "),i("div",{staticClass:"button",on:{click:function(e){return t.getCode()}}},[t._v(t._s(t.text))])])]),t._v(" "),i("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("登录")])])]):t._e(),t._v(" "),t.msg?i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[i("div",{staticClass:"title"},[i("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.know}},[t._v("\n        我知道了\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://webimages.pzlive.vip/logo1.png",alt:""}})])}]};var k=i("VU/8")(_,w,!1,function(t){i("Mqxe")},"data-v-d0178036",null).exports;s.a.use(n.a);var C=new n.a({mode:"history",routes:[{path:"/",name:"A",component:m,meta:{title:"招募合伙人"}},{path:"/b/:hid",name:"B",component:f,meta:{title:"招募合伙人"}},{path:"/login",name:"Login",component:k,meta:{title:"登录"}}]}),b=(i("D0oh"),i("2bvH"));s.a.use(b.a);var x=new b.a.Store,S={install(t,e){t.prototype.host={apiHost:"https://wwwapi.pzlive.vip/index/"}}};s.a.use(d.a,l.a);var I={wxShowMenu:function(t,e,i,a){console.log(t),s.a.axios.get(t).then(function(t){var o=t.data.signPackage;wx.config({debug:!0,appId:o.appId,timestamp:o.timestamp,nonceStr:o.nonceStr,signature:o.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","showMenuItems","hideMenuItems"]}),wx.ready(function(){wx.checkJsApi({jsApiList:["showMenuItems"],success:function(t){wx.showMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline"]})}}),wx.updateTimelineShareData({title:i,desc:"",link:o.url,imgUrl:e,success:function(){s.a.axios.get(a).then(t=>{console.log(t.data.code)})}}),wx.updateAppMessageShareData({title:i,desc:"",link:o.url,imgUrl:e,success:function(){s.a.axios.get(a).then(t=>{console.log(t.data.code)})}})})})}};s.a.use(S),s.a.config.productionTip=!1,s.a.prototype.WXConfig=I,new s.a({el:"#app",router:C,store:x,components:{App:o},template:"<App/>"})},d1Vo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5f18d7ae966842743f2a.js.map