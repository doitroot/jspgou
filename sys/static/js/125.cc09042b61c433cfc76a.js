webpackJsonp([125],{YmSg:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("aA9S"),o=t.n(r),s=t("x1ym"),m=t("lcoF"),i=t("EOYE"),n={mixins:[m.a],data:function(){var e=this;return{formData:{},index:0,index2:0,index3:0,rules:{email:[s.a.required("此项为必填"),s.a.email(),s.a.custom(function(a,t,r){Object(i.a)({email:t,id:e.formData.id}).then(function(e){200===e.code&&(e.data?r():r(new Error("邮箱已存在，不允许重复添加")))})})],password:[s.a.custom(function(e,a,t){""===a||/^\d{6,16}$/.test(a)?t():t(new Error("请输入6-16位数密码"))})],phone:[s.a.phone(),s.a.custom(function(a,t,r){""===t?r():/^1[3456789]\d{9}$/.test(t)?Object(i.b)({phone:t,id:e.formData.id}).then(function(e){200===e.code&&(e.data?r():r(new Error("手机已存在，不允许重复添加")))}):r(new Error("手机号码格式不正确"))})],nickname:[s.a.custom(function(e,a,t){""===a?t():/^([\u4E00-\u9FA5a-zA-Z0-9]+)$/.test(a)?t():t(new Error("昵称格式不正确"))})]},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},methods:{getFormData:function(e){var a=this;this.loading=!0,Object(i.i)({id:e}).then(function(e){if(200===e.code){e.data.memberExt.birthday&&(e.data.memberExt.birthday=a.$moment(e.data.memberExt.birthday));for(var t=0;t<e.data.memberThirds.length;t++)"wechat"===e.data.memberThirds[t].thirdTypeCode&&(a.index=1),"sina"===e.data.memberThirds[t].thirdTypeCode&&(a.index2=2),"qq"===e.data.memberThirds[t].thirdTypeCode&&(a.index3=3);a.formData=o()({resourceDataId:null,password:""},e.data),a.loading=!1}else a.loading=!1,a.$errorMessage(e.message)})},unbind:function(e){var a=this;this.$confirm("确定解除绑定?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=[];a.formData.memberThirds.forEach(function(a){a.thirdTypeCode===e&&t.push(parseInt(a.id))}),Object(i.p)({ids:t}).then(function(e){200===e.code?(a.$successMessage("解绑成功"),setTimeout(function(){a.getFormData(a.$route.query.id)},500)):a.errorMessage(e.message)})})},update:function(){var e={member:{email:this.formData.email,enabled:this.formData.enabled,id:this.formData.id,nickname:this.formData.nickname,password:""===this.formData.password?"":this.$cms.encrypt(this.formData.password),phone:this.formData.phone},memberExt:{resourceDataId:this.formData.resourceDataId?this.formData.resourceDataId:null,gender:this.formData.memberExt.gender,birthday:this.formData.memberExt.birthday}};this.updateForm(i.q,e,"/shopMember/list","list")}},created:function(){this.getFormData(this.$route.query.id)}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-list-layout"},[t("cms-breadcrumb",{attrs:{to:"/shopMember/list",type:"list"}},[t("li",[e._v(e._s(e.$route.name))])]),e._v(" "),e.formData.memberExt?t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formData,"label-width":"210px"}},[t("el-form-item",{attrs:{label:"用户名"}},[t("span",[e._v(e._s(e.formData.username))])]),e._v(" "),t("el-form-item",{attrs:{label:"会员头像",prop:"resourceDataId"}},[t("cms-picture-zone",{attrs:{data:e.formData.memberExt.resourceData},model:{value:e.formData.resourceDataId,callback:function(a){e.$set(e.formData,"resourceDataId",a)},expression:"formData.resourceDataId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"账户余额"}},[t("span",[e._v(e._s(e.formData.memberAccount.balance))])]),e._v(" "),t("el-form-item",{attrs:{label:"积分"}},[t("span",[e._v(e._s(e.formData.memberAccount.score))])]),e._v(" "),t("el-form-item",{attrs:{label:"会员成长值/会员等级"}},[t("span",[e._v(e._s(e.formData.memberAccount.exp))]),e._v(" /\n      "),t("span",[e._v(e._s(e.formData.memberLevel.levelName))])]),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email",error:e.errorMessage.email}},[t("el-input",{attrs:{maxlength:"20"},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机",prop:"phone"}},[t("el-input",{attrs:{maxlength:"11"},model:{value:e.formData.phone,callback:function(a){e.$set(e.formData,"phone",a)},expression:"formData.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}}),e._v(" "),t("div",{staticClass:"gray"},[e._v("留空则不修改")])],1),e._v(" "),t("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.formData.nickname,callback:function(a){e.$set(e.formData,"nickname",a)},expression:"formData.nickname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别"}},[t("el-radio-group",{model:{value:e.formData.memberExt.gender,callback:function(a){e.$set(e.formData.memberExt,"gender",a)},expression:"formData.memberExt.gender"}},[t("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),t("el-radio",{attrs:{label:2}},[e._v("女")]),e._v(" "),t("el-radio",{attrs:{label:3}},[e._v("保密")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"生日"}},[t("el-date-picker",{attrs:{"picker-options":e.pickerOptions,type:"date",size:"small","value-format":"yyyy-MM-dd"},model:{value:e.formData.memberExt.birthday,callback:function(a){e.$set(e.formData.memberExt,"birthday",a)},expression:"formData.memberExt.birthday"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否启用"}},[t("cms-switch",{model:{value:e.formData.enabled,callback:function(a){e.$set(e.formData,"enabled",a)},expression:"formData.enabled"}}),e._v(" "),t("div",{staticClass:"gray"},[e._v("设置为黑名单后，该会员将无法登录商城")])],1)],1):e._e(),e._v(" "),t("div",{staticClass:"cms-form-footer"},[t("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:e.update}},[e._v("保存")])],1)],1)},staticRenderFns:[]};var d=t("C7Lr")(n,l,!1,function(e){t("h3g1")},"data-v-67232cbc",null);a.default=d.exports},h3g1:function(e,a){}});
//# sourceMappingURL=125.cc09042b61c433cfc76a.js.map