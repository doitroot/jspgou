webpackJsonp([139],{hRBB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("aA9S"),s=a.n(r),o=a("lcoF"),i=a("AsmT"),n={},m={mixins:[o.a],data:function(){return{formData:s()({},n),accountList:{account:"",accountName:""}}},methods:{getStoreInfo:function(t){var e=this;this.loading=!0,Object(i.n)({id:t}).then(function(t){200===t.code&&(e.formData=t.data,t.data.storeSettlementAccountList&&(e.accountList=t.data.storeSettlementAccountList.filter(function(t){return!0===t.isDefault})[0]),e.loading=!1)})},setWeChat:function(t){var e=this,a="";a=t?"开启微信设置商家即可在商家后台单独设置属于自己的公众号及小程序，提别注意：在平台商城设置中选择部分开启模式才能生效，确认是否继续？":"取消微信设置商家无法在商家后台单独设置属于自己的公众号及小程序，提别注意：在平台商城设置中选择部分开启模式才能生效，确认是否继续?",this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.r)({id:e.formData.id,wechatenable:t}).then(function(t){200===t.code?(e.$successMessage("操作成功"),e.getStoreInfo(e.$route.query.id)):e.$errorMessage(t.message)})}).catch(function(){})},setAudit:function(t){var e=this,a="";a=t?"开启后店铺上架商品需要经过店铺审核后才能上架，特别注意：只有在平台商城设置中未开启商家上架商品审核机制的基础上才能生效，确认是否继续？":"取消后店铺上架商品无需经过店铺审核后就能上架，特别注意：只有在平台商城设置中未开启商家上架商品审核机制的基础上才能生效，确认是否继续",this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.q)({id:e.formData.id,productaudit:t}).then(function(t){200===t.code?(e.$successMessage("操作成功"),e.getStoreInfo(e.$route.query.id)):e.$errorMessage(t.message)})}).catch(function(){})},setStatus:function(t){var e=this,a="";1===t&&(a="店铺当前为"+this.formData.storeName+"，确认是否开启店铺的正常营业?"),2===t&&(a="店铺当前为"+this.formData.storeName+"，暂停后店铺所有商品将无法在商城展示但依然可登录商家中心，确认是否继续?"),3===t&&(a="店铺当前为"+this.formData.storeName+"，禁止后店铺将无法经营且不能登录商家中心，确认是否继续?"),this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.i)({id:e.formData.id,status:t}).then(function(t){200===t.code?(e.$successMessage("操作成功"),e.getStoreInfo(e.$route.query.id)):e.$errorMessage(t.message)})}).catch(function(){})}},created:function(){this.formData.storeType=this.$route.query.storeType,this.getStoreInfo(this.$route.query.id)}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("cms-breadcrumb",{attrs:{to:"/shopManage/list"}},[a("li",[t._v(t._s(t.$route.name))])]),t._v(" "),a("div",{staticClass:"cms-form-layout"},[a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[t._v("展示商家入驻的申请信息，请仔细核对审核")])]),t._v(" "),a("div",{staticStyle:{margin:"15px 0"}},[a("div",{staticClass:"wx-userinfo"},[a("img",{staticClass:"wx-userinfo--avatar",attrs:{src:"/static/loading.png",alt:""}}),t._v(" "),a("div",{staticClass:"wx-userinfo--content"},[a("p",{staticClass:"wx-userinfo--name"},[a("span",[t._v(t._s(t.formData.storeName))]),t._v(" "),1==t.formData.auditResults?a("el-tag",{attrs:{size:"small",type:"success"}},[t._v("待审核")]):t._e(),t._v(" "),2==t.formData.auditResults?a("el-tag",{attrs:{size:"small",type:"warning"}},[t._v("待缴费")]):t._e(),t._v(" "),3==t.formData.auditResults?a("el-tag",{attrs:{size:"small",type:"info"}},[t._v("未通过")]):t._e()],1),t._v(" "),a("span",{staticClass:"wx-userinfo--info"},[t._v("店铺账号: "+t._s(t.formData.storeUsername))]),t._v(" "),a("span",{staticClass:"wx-userinfo--info",staticStyle:{"margin-left":"10px"}},[t._v("店铺类型: "+t._s(1==t.formData.storeType?"个人店铺":"企业店铺"))])]),t._v(" "),1==t.formData.auditResults?a("el-button",{staticClass:"audit-btn",attrs:{type:"primary",size:"mini"},on:{click:function(e){e.stopPropagation(),t.$routerLink("/shopManage/enterApplication/audit","update",{id:t.formData.id,storeType:t.formData.storeType})}}},[t._v("审核")]):t._e()],1)]),t._v(" "),t.loading?t._e():a("el-form",{attrs:{model:t.formData,"label-width":"300px"}},[a("h3",{staticClass:"cms-segmentation"},[t._v("店铺信息")]),t._v(" "),a("el-form-item",{attrs:{label:"开店会员:"}},[t._v(t._s(t.formData.storeUsername))]),t._v(" "),a("el-form-item",{attrs:{label:"联系人手机号:"}},[t._v(t._s(t.formData.contactMobile))]),t._v(" "),a("el-form-item",{attrs:{label:"联系人邮箱:"}},[t._v(t._s(t.formData.contactMail))]),t._v(" "),a("el-form-item",{attrs:{label:"联系人姓名:"}},[t._v(t._s(t.formData.contactName))]),t._v(" "),a("h3",{staticClass:"cms-segmentation"},[t._v("店铺经营信息")]),t._v(" "),a("el-form-item",{attrs:{label:"主营类目:"}},[t._v(t._s(t.formData.productCategory?t.formData.productCategory.cateName:"暂无"))]),t._v(" "),2===t.formData.storeType?a("div",[a("h3",{staticClass:"cms-segmentation"},[t._v("公司信息")]),t._v(" "),a("el-form-item",{attrs:{label:"公司名称:"}},[t.formData.storeInfo.companyName?t._e():a("span",[t._v("-")]),t._v(" "),t.formData.storeInfo.companyName?a("span",[t._v(t._s(t.formData.storeInfo.companyName))]):t._e()]),t._v(" "),a("el-form-item",{attrs:{label:"公司所在地:"}},[t._v("\n          "+t._s(t.formData.storeInfo.provinceName)+"\n          "+t._s(t.formData.storeInfo.cityName)+"\n          "+t._s(t.formData.storeInfo.areaName)+"\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"详细地址:"}},[t._v(t._s(t.formData.storeInfo.address))]),t._v(" "),a("el-form-item",{attrs:{label:"公司电话:"}},[t._v(t._s(t.formData.storeInfo.mobile))]),t._v(" "),a("h3",{staticClass:"cms-segmentation"},[t._v("营业执照")]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"营业执照注册号:"}},[t._v(t._s(t.formData.storeInfo.blNo))]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"营业执照所在地:"}},[t._v("\n          "+t._s(t.formData.storeInfo.blProvinceName)+"\n          "+t._s(t.formData.storeInfo.blCityName)+"\n          "+t._s(t.formData.storeInfo.blAreaName)+"\n        ")]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"营业期限:"}},[t._v("\n          "+t._s(t.$moment(t.formData.storeInfo.blStartTime,"YYYY-MM-DD"))+" 至\n          "+t._s(t.$moment(t.formData.storeInfo.blEndTime,"YYYY-MM-DD"))+"\n        ")]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"注册资本:"}},[t._v(t._s(t.formData.storeInfo.registeredCapital)+"万元")]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"成日日期:"}},[t._v(t._s(t.$moment(t.formData.storeInfo.setupDate)))]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"法人姓名:"}},[t.loading?t._e():a("span",[t._v(t._s(t.formData.storeInfo.legalName))])]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"身份证号:"}},[t._v(t._s(t.formData.storeInfo.legalIdcard))]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"身份证正面照片:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.idcardPositivePhotoRes,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"身份证反面照片:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.idcardReversePhotoRes,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"手持身份证照:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.photoRes,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"营业执照证书:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.blCertRes,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"经营范围:"}},[t._v(t._s(t.formData.storeInfo.scopeRange))]),t._v(" "),a("h3",{staticClass:"cms-segmentation"},[t._v("税务登记")]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"税务登记代码:"}},[t._v(t._s(t.formData.storeInfo.taxRegistrationCode))]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"营业执照证书:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.taxRegistrationCertRes,disabled:!0}})],1)],1):t._e(),t._v(" "),1===t.formData.storeType?a("div",[a("h3",{staticClass:"cms-segmentation"},[t._v("身份信息")]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"姓名:"}},[t.loading?t._e():a("span",[t._v(t._s(t.formData.storeInfo.legalName))])]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"身份证号:"}},[t._v(t._s(t.formData.storeInfo.legalIdcard))]),t._v(" "),a("el-form-item",{attrs:{required:"",label:"身份证正面照片:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.idcardPositivePhotoRes,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"身份证反面照片:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.idcardReversePhotoRes,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"手持身份证照:"}},[a("cms-picture-zone",{attrs:{data:t.formData.storeInfo.photoRes,disabled:!0}})],1)],1):t._e(),t._v(" "),t.formData.storeSettlementAccountList.length>0?a("div",[a("h3",{staticClass:"cms-segmentation"},[t._v("财务信息")]),t._v(" "),a("el-form-item",{attrs:{label:"结算账户类型:",required:""}},[t._v("支付宝")]),t._v(" "),a("el-form-item",{attrs:{label:"支付宝姓名:"}},[0==t.formData.storeSettlementAccountList.length?a("span",[t._v("-")]):t._e(),t._v(" "),t.formData.storeSettlementAccountList.length>0?a("span",[t._v(t._s(t.formData.storeSettlementAccountList[0].accountName))]):t._e()]),t._v(" "),a("el-form-item",{attrs:{label:"支付宝账号:"}},[0==t.formData.storeSettlementAccountList.length?a("span",[t._v("-")]):t._e(),t._v(" "),t.formData.storeSettlementAccountList.length>0?a("span",[t._v(t._s(t.formData.storeSettlementAccountList[0].account))]):t._e()])],1):t._e(),t._v(" "),a("h3",{staticClass:"cms-segmentation"},[t._v("其他信息")]),t._v(" "),a("el-form-item",{attrs:{label:"是否开启商品上架审核:"}},[t._v(t._s(t.formData.isProductAuditEnable?"已开启":"未开启"))]),t._v(" "),a("el-form-item",{attrs:{label:"审核意见:"}},[a("span",{staticStyle:{width:"500px",display:"inline-block",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[t._v(t._s(t.formData.auditOpinion))])])],1)],1)],1)},staticRenderFns:[]};var f=a("C7Lr")(m,l,!1,function(t){a("k1JY")},"data-v-59b1d72e",null);e.default=f.exports},k1JY:function(t,e){}});
//# sourceMappingURL=139.27c22a40f248efe21459.js.map