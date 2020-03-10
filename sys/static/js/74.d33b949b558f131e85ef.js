webpackJsonp([74],{"e+Vr":function(t,a){},ha8j:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("aA9S"),i=e.n(s),r=e("lcoF"),n=e("+FNC"),o={id:"",alias:"",appId:"",createTime:"",createUser:"",funcInfo:"",globalId:"",grantType:"",headImg:"",network:"",owerType:"",principalName:"",qrcodeUrl:"",storeId:"",type:"",updateTime:"",updateUser:"",verifyStatus:"",wechatName:"",wechatType:""},c={name:"publicSetting",mixins:[r.a],data:function(){return{jurisdiction:[],funcInfo:["消息管理权限","用户管理权限","帐号服务权限","网页服务权限","微信小店权限","微信多客服权限","群发与通知权限","微信卡券权限","微信扫一扫权限","微信连WIFI权限","素材管理权限","微信摇周边权限","微信门店权限","微信支付权限","自定义菜单权限","帐号管理权限","开发管理权限","客服消息管理权限"],formData:i()({},o),baseUrl:""}},methods:{getFormData:function(t){var a=this;Object(n.A)({id:t}).then(function(t){a.formData=i()(o,t.data)})},getLink:function(){var t=this;this.$confirm("为保证重新授权前后数据正常，请使用同一公众号进行重新授权为保证系统能正常运行所有与微信平台的对接，请在授权时授予所有权限","系统提示",{confirmButtonText:"已了解，确认执行",cancelButtonText:"取消",type:"warning"}).then(function(){var a=document.querySelector("body"),e=document.createElement("a");e.href=t.baseUrl+"/weChat/grantAuth",e.setAttribute("target","_blank"),a.appendChild(e),e.click()}).catch(function(){})},cancelJurisdiction:function(t){var a=this;this.$confirm("解除绑定会导致当前公众号设置的信息丢失（含素材、自定义菜单、自动回复、定时群发、粉丝信息等），请确认是否继续？","系统提示",{confirmButtonText:"已了解解绑风险，确认执行",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.B)({ids:[t]}).then(function(t){200===t.code?(a.$successMessage("取消授权成功"),a.getTableData(a.callback,a.queryParams,a.isPage),a.$routerLink("/wechat/publicList/list",a.queryParams)):a.$errorMessage("取消授权失败,"+t.message)})}).catch(function(){})}},created:function(){this.getFormData(this.$route.query.id)}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"all"},[e("cms-breadcrumb",{attrs:{to:"/wechatPublic/list"}},[e("li",[t._v(t._s(t.$route.name))])]),t._v(" "),e("div",{staticClass:"cms-form-layout"},[e("cms-prompt",[e("li",[t._v("系统接入公众号统一采用授权方式接入，无法进行修改信息")])]),t._v(" "),e("el-form",{ref:"form",staticStyle:{width:"60%",margin:"0 auto"},attrs:{model:t.formData,"label-width":"90px"}},[e("div",{staticClass:"product-item-one"},[e("el-row",{staticStyle:{position:"relative"}},[e("el-col",{staticClass:"product-item-one-el"},[e("div",{staticClass:"product-item-one-zhong"},[e("div",{staticClass:"product-img"},[e("img",{staticClass:"product-img-img",attrs:{src:t.formData.headImg}})]),t._v(" "),e("div",{staticClass:"product-desc"},[e("div",{staticClass:"product-name"},[t._v("\n                  "+t._s(t.formData.wechatName)+"\n                ")]),t._v(" "),e("div",{staticClass:"product-attr"},[e("span",[t._v("主体信息：\n                    "),e("span",{domProps:{textContent:t._s(t.formData.principalName)}}),t._v(" "),e("i",{staticClass:"iconfont"})]),t._v(" "),e("span",{staticClass:"li-span"},[t._v("|")]),t._v(" "),e("span",[t._v("拥有者：\n                    "),e("span",{domProps:{textContent:t._s(1==t.formData.owerType?"平台":"商家")}}),t._v(" "),e("i",{staticClass:"iconfont"})]),t._v(" "),e("span",{staticClass:"li-span"},[t._v("|")]),t._v(" "),1===t.formData.grantType?e("span",{staticStyle:{"margin-left":"10px"}},[e("i",{staticClass:"iconfont icon-gou success",staticStyle:{color:"green"}}),t._v(" "),e("span",[t._v("授权接入")])]):t._e()])]),t._v(" "),e("div",{staticClass:"product-btn"},[e("cms-button",{attrs:{slot:"reference",type:"info",icon:"warning"},on:{click:function(a){t.cancelJurisdiction(t.formData.id)}},slot:"reference"},[t._v("取消授权")])],1)])])],1)],1),t._v(" "),e("h3",{staticClass:"cms-segmentation",staticStyle:{"margin-top":"20px"}},[t._v("公众号基本信息")]),t._v(" "),e("div",[e("el-form-item",{attrs:{"lable-width":"0px",label:"头像",prop:"headImg"}},[e("img",{staticClass:"product-img-img product-img-img-two",attrs:{src:t.formData.headImg}})]),t._v(" "),e("el-form-item",{attrs:{label:"二维码",prop:"qrcodeUrl"}},[e("img",{staticClass:"product-img-img product-img-img-two",attrs:{src:t.$cms.weChatUrl(t.formData.qrcodeUrl)}})]),t._v(" "),e("el-form-item",{attrs:{label:"原始ID",prop:"globalId"}},[t._v("\n          "+t._s(t.formData.globalId)+"\n        ")]),t._v(" "),e("el-form-item",{attrs:{label:"AppId",prop:"appId"}},[t._v("\n          "+t._s(t.formData.appId)+"\n        ")]),t._v(" "),e("el-form-item",{attrs:{label:"类型",prop:"type"}},[e("span",{domProps:{textContent:t._s(1==t.formData.type?"公众号":"小程序")}})]),t._v(" "),e("el-form-item",{attrs:{label:"接入方式",prop:"grantType"}},[e("span",{domProps:{textContent:t._s(1==t.formData.grantType?"授权接入":"")}})]),t._v(" "),e("el-form-item",{attrs:{label:"认证状态",prop:"verifyStatus"}},[e("span",{domProps:{textContent:t._s(1==t.formData.verifyStatus?"未认证":"已认证")}}),t._v(" "),1===t.formData.verifyStatus?e("span",[t._v("\n            当前公众号未认证，认证后请\n            "),e("span",{staticClass:"green"},[t._v("重新授权")])]):t._e()])],1),t._v(" "),e("div",{staticClass:"product-item"},[e("h3",{staticClass:"cms-segmentation"},[t._v("授权信息（如出现功能异常或提示无权限，请尝试重新授权，赋予所有权限，\n          "),e("span",{staticClass:"green",on:{click:t.getLink}},[t._v("重新授权")]),t._v("）")]),t._v(" "),e("el-row",{staticStyle:{margin:"auto"}},t._l(t.funcInfo,function(a,s){return e("div",{key:s,staticClass:"product-p"},[e("p",{class:t.formData.funcInfo.indexOf(s+1)>-1?"product-img-p1":"product-img-p2",domProps:{textContent:t._s(t.formData.funcInfo.indexOf(s+1)>-1?"已授权":"未授权")}}),t._v(" "),e("span",[t._v(t._s(a))])])}),0)],1)])],1)],1)},staticRenderFns:[]};var m=e("C7Lr")(c,l,!1,function(t){e("e+Vr")},"data-v-d9cc54ae",null);a.default=m.exports}});
//# sourceMappingURL=74.d33b949b558f131e85ef.js.map