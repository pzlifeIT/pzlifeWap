webpackJsonp([1],{"1+wT":function(t,e){},"1qq4":function(t,e){},"9iyn":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App",data:function(){return{webTitle:"招募合伙人"}}},a,!1,function(t){i("1qq4")},null,null).exports,n=i("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){i("d1Vo")},"data-v-63e0701f",null).exports;var r=i("Muz9"),l=i.n(r),u=i("3khs"),d=i.n(u);s.a.use(d.a,l.a);var p={name:"bossActive",data:function(){return{where:"a",loginStatus:localStorage.getItem("loginStatus")||!1,webTitle:"招募合伙人",img:"",active:{},hid:0,pid:0}},created:function(){console.log(this.host.apiHost)},methods:{isCon_id:function(){localStorage.getItem("con_id")?this.getUser():this.loginStatus=!0},none:function(){this.loginStatus=!1},toLogin:function(){this.$router.push({path:"/login"}),this.loginStatus=!1},getUser:function(){var t=this.host.apiHost+"user/getuser",e=this,i=localStorage.getItem("con_id");s.a.axios.post(t,{con_id:i}).then(function(t){switch(parseInt(t.data.code)){case 200:case 5e3:default:e.loginStatus=!0}}).catch(function(t){})},getActive:function(){var t=this,e=this.host.apiHost+"wap/getSupPromote",i=this.hid;console.log(i),s.a.axios.get(e+"/?promote_id="+i).then(function(e){switch(console.log(e),parseInt(e.data.code)){case 200:t.active=e.data.promote}},function(t){console.log(t)})},enUrl:function(){var t=window.location.href;if(-1!=t.indexOf("?")){var e=t.split("?")[1].split("&")[0].split("=")[1],i=t.split("?")[1].split("&")[1].split("=")[1];this.hid=e,this.pid=i}}},mounted:function(){this.enUrl();this.host.apiHost,this.hid,this.pid;this.isCon_id(),this.getActive(),console.log(123456)}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"container"}},[i("img",{staticClass:"img",attrs:{src:t.active.big_image,alt:""}}),t._v(" "),i("router-link",{staticClass:"jump",attrs:{to:"/b/hid"}},[t._v("报名参加")]),t._v(" "),i("router-view")],1),t._v(" "),t.loginStatus?i("div",{staticClass:"pop"},[i("div",{staticClass:"center"},[i("div",{staticClass:"title"},[t._v("请先登录")]),t._v(" "),i("div",{staticClass:"button"},[i("div",{staticClass:"left-button",on:{click:t.none}},[t._v("取消")]),t._v(" "),i("div",{staticClass:"left-button right",on:{click:function(e){return t.toLogin()}}},[t._v("确定")])])])]):t._e()])},staticRenderFns:[]};var v=i("VU/8")(p,h,!1,function(t){i("1+wT")},"data-v-68459344",null).exports;s.a.use(d.a,l.a);var m={name:"B",data:function(){return{name:"",phone:"",code:"",status:!0,msg:!1,title:"",isClick:!0,text:"获取验证码",webTitle:"招募合伙人",hid:0}},methods:{submit:function(){var t=this,e=this.name,i=this.phone;if(""==e)return this.title="请填写姓名",void(this.msg=!0);if(""==i||i.length<11)return this.title="请检查手机号",void(this.msg=!0);var a=this.host.apiHost+"wap/SupPromoteSignUp",o=this.hid,n=localStorage.getItem("con_id");s.a.axios.post(a,{promote_id:o,con_id:n,mobile:i,nick_name:e}).then(function(e){switch(parseInt(e.data.code)){case 200:t.status=!0;break;case 3e3:t.title="发送失败",t.msg=!0;break;case 3001:case 3002:t.title="con_id错误",t.msg=!0;break;case 3003:t.title="promote_id有误",t.msg=!0;break;case 3004:t.title="手机号错误",t.msg=!0;break;case 3005:t.title="已经参加过了",t.msg=!0;break;case 3006:t.title="请填写姓名",t.msg=!0;break;default:t.title="未知错误",t.msg=!0}}).catch(function(e){t.title="网络错误",t.msg=!0}),console.log(e),this.status=!1},toB:function(){this.msg=!1},toHome:function(){this.$router.push({path:"/"})}},mounted:function(){var t=this.$route.params.hid;this.hid=t}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.status?i("div",{attrs:{id:"pop"}},[i("div",{staticClass:"info"},[i("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),i("div",{staticClass:"input"},[i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("姓名")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("提交")])])]):i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[t._m(0),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.toHome}},[t._v("\n        我知道了\n      ")])])]),t._v(" "),t.msg?i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[i("div",{staticClass:"title"},[i("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.toB}},[t._v("\n        我知道了\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("p",[this._v("报名成功")]),this._v(" "),e("p",[this._v("去分享给好友，一起成为合伙人吧")])])}]};var f=i("VU/8")(m,g,!1,function(t){i("WMfI")},"data-v-3874ffe6",null).exports;s.a.use(d.a,l.a);var _={name:"login",data:function(){return{pop:!1,phone:"",vercode:"",text:"获取验证码",isClick:!0,msg:!1,title:"",webTitle:"登录",loginState:0}},methods:{toHome:function(){this.pop=!1},codeLogin:function(){this.pop=!0,this.isWx()},know:function(){this.msg=!1},getCode:function(){var t=this;if(!this.isClick)return!1;if(""==this.phone||this.phone.length<11)return this.title="请检查手机号",void(this.msg=!0);var e=this.phone,i=this.host.apiHost+"/user/sendvercode";s.a.axios.post(i,{mobile:e,stype:1}).then(function(e){200==e.data.code&&t.timeOut()})},timeOut:function(){var t=60,e=this,i=setInterval(function(){if(--t<1)return e.text="获取验证码",e.isClick=!0,void clearInterval(i);e.text=t+" 秒后重发",e.isClick=!1},1e3)},submit:function(){return""==this.phone||this.phone.length<11?(this.title="请检查手机号",void(this.msg=!0)):""==this.vercode?(this.title="验证码不能为空",void(this.msg=!0)):void this.wxLogin(1)},isWx:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)||(this.title="请使用微信打开",this.msg=!0,!1)},WX:function(){this.wxLogin(2)},verCode:function(t){var e=this.phone,i=this.vercode,a=this.host.apiHost+"user/wxregister",o=this;s.a.axios.post(a,{code:t,mobile:e,vercode:i}).then(function(t){switch(console.log(t),parseInt(t.data.code)){case 200:localStorage.setItem("con_id",t.con_id),o.$router.push({path:"/"});break;case 3001:o.title="手机号码错误",o.msg=!0;break;case 3002:localStorage.setItem("code",""),o.title="code已失效，请再次点击登录重新获取",o.msg=!0;break;case 3004:case 3006:o.title="验证码错误",o.msg=!0;break;case 3007:o.title="注册失败",o.msg=!0;break;case 3008:o.title="手机号已注册",o.msg=!0;break;case 3009:o.title="新用户需授权",o.msg=!0;break;default:o.title="意料之外的错误",o.msg=!0}}).catch(function(t){o.title="网络错误",o.msg=!0})},wxLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.isWx()){var e=this.host.apiHost+"user/wxaccredit",i=this;console.log(e);var a=window.location.href;console.log(a),s.a.axios.post(e,{redirect_uri:a}).then(function(e){switch(alert(e.data.requestUrl),parseInt(e.data.code)){case 200:window.location.assign(e.data.requestUrl),i.isCode(t);break;case 3e3:case 3001:case 3002:i.title="错误码:"+e.data.code,i.msg=!0;break;default:i.title="预料之外的错误",i.msg=!0}}).catch(function(t){i.title="接口请求失败",i.msg=!0})}},isCode:function(t){var e=window.location.href;if(console.log(e),-1!=e.indexOf("code")){var i=e.split("?")[1].split("&")[0].split("=")[1];console.log(i),console.log(t),1==t?this.verCode(i):2==t?this.wxregister(i):alert("state为空")}else console.log("未获取到code")},wxregister:function(t){var e=this.host.apiHost+"user/loginuserbywx",i=this;s.a.axios.post(e,{code:t,platform:2}).then(function(t){switch(parseInt(t.data.code)){case 200:localStorage.setItem("con_id",t.con_id),i.$router.push({path:"/"});break;case 3e3:case 3002:i.title="请使用手机号登录",i.msg=!0;break;case 3001:localStorage.setItem("code",""),i.title="code已失效，请再次点击登录重新获取",i.msg=!0;break;case 3003:i.title="登录失败",i.msg=!0;break;default:i.title="意料之外的错误",i.msg=!0}}).catch(function(t){console.log(t)})}},mounted:function(){alert(window.location.href),this.isWx()},beforeUpdate:function(){}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"mask"},[i("div",{staticClass:"center"},[t._m(0),t._v(" "),i("div",{staticClass:"wx-login",on:{click:t.WX}},[t._v("微信登录")]),t._v(" "),i("div",{staticClass:"wx-login phone",on:{click:t.codeLogin}},[t._v("手机号登录")])])]),t._v(" "),t.pop?i("div",{attrs:{id:"pop"}},[i("div",{staticClass:"info"},[i("img",{staticClass:"yuan",attrs:{src:"https://webimages.pzlive.vip/cha_03.jpg",alt:""},on:{click:function(e){return t.toHome()}}}),t._v(" "),i("div",{staticClass:"input"},[i("div",{staticClass:"input-write"},[i("div",{staticClass:"input-cate"},[t._v("手机号")]),t._v(" "),i("div",{staticClass:"mid"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"write-text",attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-write code"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.vercode,expression:"vercode"}],staticClass:"write-code",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.vercode},on:{input:function(e){e.target.composing||(t.vercode=e.target.value)}}}),t._v(" "),i("div",{staticClass:"button",on:{click:function(e){return t.getCode()}}},[t._v(t._s(t.text))])])]),t._v(" "),i("div",{staticClass:"submit",on:{click:function(e){return t.submit()}}},[t._v("登录")])])]):t._e(),t._v(" "),t.msg?i("div",{staticClass:"pop-hint"},[i("div",{staticClass:"pop-center"},[i("div",{staticClass:"title"},[i("p",{staticClass:"hint"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"pop-button",on:{click:t.know}},[t._v("\n        我知道了\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://webimages.pzlive.vip/logo1.png",alt:""}})])}]};var C=i("VU/8")(_,w,!1,function(t){i("9iyn")},"data-v-29ba404b",null).exports;s.a.use(n.a);var b=new n.a({mode:"history",routes:[{path:"/",name:"A",component:v,meta:{title:"招募合伙人"}},{path:"/b/:hid",name:"B",component:f,meta:{title:"招募合伙人"}},{path:"/login",name:"Login",component:C,meta:{title:"登录"}}]}),x=(i("D0oh"),i("2bvH"));s.a.use(x.a);var k=new x.a.Store,S={install(t,e){t.prototype.host={apiHost:"https://wwwapi.pzlive.vip/index/"}}};s.a.use(d.a,l.a);var I={wxShowMenu:function(t){console.log(t),s.a.axios.post(t).then(function(t){var e=t.data.data;wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","showMenuItems","hideMenuItems"]}),wx.ready(function(){wx.checkJsApi({jsApiList:["showMenuItems"],success:function(t){wx.showMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline"]})}}),wx.updateTimelineShareData({title:"分享描述",desc:"分享描述",link:e.shareLink,imgUrl:e.imgUrl,success:function(){}}),wx.updateAppMessageShareData({title:"分享描述",desc:"分享描述",link:e.shareLink,imgUrl:e.imgUrl,success:function(){}})})})}};s.a.use(S),s.a.config.productionTip=!1,s.a.prototype.WXConfig=I,new s.a({el:"#app",router:b,store:k,components:{App:o},template:"<App/>"})},WMfI:function(t,e){},d1Vo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.556fe34697f6678abae0.js.map