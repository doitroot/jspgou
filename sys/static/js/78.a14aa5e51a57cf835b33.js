webpackJsonp([78],{"0GWY":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("+FNC"),i=t("x1vo"),n={data:function(){return{userData:{},sendItems:[],loading:!1}},methods:{delSend:function(e){var s=this,t=[];t.push(e),Object(a.v)({ids:t}).then(function(e){200===e.code?(s.$successMessage("删除成功"),s.getFansData(s.$route.query.id)):s.$errorMessage(e.message)})},showEmojiName:function(e){var s=Object(i.a)(e);return s=Object(i.c)(s)},getFansData:function(e){var s=this;this.loading=!0,Object(a.f)({id:e}).then(function(e){s.loading=!1,200===e.code&&(s.userData=e.data,s.userData.nickname=s.showEmojiName(e.data.nickname),s.getSendIList(s.userData.openid))})},getSendIList:function(e){var s=this;Object(a.w)({openid:e,page:1,size:30}).then(function(e){200===e.code&&(e.data.content.forEach(function(e){"text"!==e.msgType&&(e.mediaJson=JSON.parse(e.mediaJson))}),s.sendItems=e.data.content)})}},created:function(){this.getFansData(this.$route.query.id)}},r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("cms-breadcrumb",{attrs:{to:"/wechatFans/list"}},[t("li",[e._v(e._s(e.$route.name))])]),e._v(" "),t("div",{staticClass:"send-warp"},[t("div",{staticClass:"wx-userinfo"},[t("img",{staticClass:"wx-userinfo--avatar",attrs:{src:e.userData.headimgurl,alt:""}}),e._v(" "),t("div",{staticClass:"wx-userinfo--content"},[t("p",{staticClass:"wx-userinfo--name"},[t("span",{domProps:{innerHTML:e._s(e.userData.nickname)}})]),e._v(" "),t("p",{staticClass:"wx-userinfo--info"},[e._v("\n          粉丝编号:"+e._s(e.userData.openid))]),e._v(" "),t("p",{staticClass:"wx-userinfo--info"},[e._v("关注时间: "+e._s(e.$moment(1e3*e.userData.subscribeTime)))]),e._v(" "),t("p",{staticClass:"wx-userinfo--info"},[e._v(e._s(e.userData.member?"商城注册会员":"未注册商城会员"))])])]),e._v(" "),t("h3",{staticClass:"cms-segmentation"},[e._v("\n      消息发送历史记录\n    ")]),e._v(" "),t("ul",e._l(e.sendItems,function(s,a){return t("li",{key:a,staticClass:"send-list__items"},[t("div",{staticClass:"send-list__type"},["text"==s.msgType?t("span",[e._v("\n            【文本消息】\n          ")]):e._e(),e._v(" "),"mpnews"==s.msgType?t("span",[e._v("\n            【图文消息】\n          ")]):e._e(),e._v(" "),"mpvideo"==s.msgType?t("span",[e._v("\n            【视频消息】\n          ")]):e._e(),e._v(" "),"voice"==s.msgType?t("span",[e._v("\n            【语音消息】\n          ")]):e._e(),e._v(" "),"image"==s.msgType?t("span",[e._v("\n            【图片消息】\n          ")]):e._e()]),e._v(" "),"image"==s.msgType||"mpnews"==s.msgType?t("div",{staticClass:"send-list__img"},["mpnews"==s.msgType?t("img",{attrs:{src:e.$cms.weChatUrl(s.mediaJson[0].thumbMediaUrl),alt:""}}):e._e(),e._v(" "),"image"==s.msgType?t("img",{attrs:{src:e.$cms.weChatUrl(s.mediaJson.url),alt:""}}):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"media-preview__inner send-list__inner"},["text"!=s.msgType?t("div",{staticClass:"send-list__title"},["mpnews"==s.msgType?t("span",[e._v(e._s(s.mediaJson[0].title))]):t("span",{class:["image"==s.msgType?"":"title-pos"]},[e._v(e._s(s.mediaJson.name))])]):e._e(),e._v(" "),t("div",{staticClass:"media-preview__content"},["mpnews"==s.msgType?t("span",{staticClass:"text-overflow",staticStyle:{width:"300px",display:"inline-block"}},[e._v(e._s(s.mediaJson[0].digest))]):e._e(),e._v(" "),"text"==s.msgType?t("div",{staticClass:"text-overflow",staticStyle:{"padding-top":"10px"},domProps:{innerHTML:e._s(e.showEmojiName(s.mediaJson))}}):e._e()])]),e._v(" "),t("div",{staticClass:"media-preview__del fr",on:{click:function(t){e.delSend(s.id)}}},[e._v("\n          删除\n        ")]),e._v(" "),t("div",{staticClass:"media-preview__success fr"},[t("p",[e._v("发送成功")]),e._v(" "),t("p",{staticClass:"media-preview__time"},[e._v(e._s(e.$moment(s.createTime)))])])])}),0)])],1)},staticRenderFns:[]};var o=t("C7Lr")(n,r,!1,function(e){t("i0LG")},"data-v-d2ff9f06",null);s.default=o.exports},i0LG:function(e,s){}});
//# sourceMappingURL=78.a14aa5e51a57cf835b33.js.map