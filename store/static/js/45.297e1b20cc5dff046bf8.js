webpackJsonp([45],{Ca3O:function(e,t){},"XV/b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("aA9S"),r=a.n(l),s=a("x1ym"),i=a("lcoF"),o=a("s9+M"),m={memberLevel:{levelName:"",levelExp:""},levelRightList:[{type:"",rewardTypeCode:"",sendwayType:"",minValue:10,maxValue:50,couponId:""}]},v={mixins:[i.a],data:function(){return{interestsDialog:!1,formData:r()({},m),rules:{levelName:[s.a.required("此项为必填")],levelExp:[s.a.required("此项为必填"),s.a.number()],typeCode:[s.a.required("此项为必填")],sendwayType:[s.a.required("此项为必填")],rewardTypeCode:[s.a.required("此项为必填")]}}},methods:{save:function(e){console.log(e);var t={};t.memberLevel=this.formData.memberLevel,this.saveForm(o.a,t,e,"/memberGrade/list","list")},setInterests:function(){this.interestsDialog=!0},test:function(){this.timer=setInterval(this.mockData,600)},rest:function(){window.clearInterval(this.timer),this.$refs.form.resetFields(),this.formData=r()({},m),this.$refs.first.focus()}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cms-breadcrumb",{attrs:{to:"/memberGrade"},on:{click:e.rest}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),a("div",{staticClass:"cms-form-layout"},[a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("带 * 为必填")]),e._v(" "),a("li",[e._v("加入会员等级权益必须进行权益设置")])]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formData.memberLevel,"label-width":"210px"}},[a("el-form-item",{attrs:{label:"会员等级名称",prop:"levelName",error:e.errorMessage.levelName}},[a("el-input",{ref:"first",attrs:{autofocus:!0},model:{value:e.formData.memberLevel.levelName,callback:function(t){e.$set(e.formData.memberLevel,"levelName",t)},expression:"formData.memberLevel.levelName"}}),e._v(" "),a("div",{staticStyle:{color:"#666666"}},[e._v("会员账户"),a("span",{staticStyle:{color:"#999999"}},[e._v("用于登录商城，请确保唯一")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"等级升级条件",prop:"levelExp",error:e.errorMessage.levelExp}},[a("el-input",{model:{value:e.formData.memberLevel.levelExp,callback:function(t){e.$set(e.formData.memberLevel,"levelExp",t)},expression:"formData.memberLevel.levelExp"}})],1)],1),e._v(" "),a("h3",{staticClass:"cms-segmentation"},[e._v("会员等级权益")]),e._v(" "),a("div",{staticClass:"grade-items"},[a("div",{staticClass:"grade-item"},[a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grade-img"},[a("img",{attrs:{src:"https://img13.360buyimg.com/n2/jfs/t4039/255/1270201086/64578/259c6361/5871db9dN47fe1b30.jpg"}})])]),e._v(" "),a("el-col",{attrs:{span:14}},[a("span",{staticClass:"grade-item-title"},[e._v("购物福利")]),a("br"),e._v(" "),a("span",{staticStyle:{"font-size":"14px"}},[e._v("订单支付完成之后有机会获得不同奖励")])])],1),e._v(" "),a("el-row",{staticClass:"grade-item-cont"},[a("el-col",{attrs:{span:24}},[a("span",[e._v("随机获得50-100积分")]),a("br"),e._v(" "),a("span",[e._v("仅限2018-12-30 23:59:59内使用")])])],1),e._v(" "),a("el-row",{staticClass:"grade-item-foot"},[a("el-col",{attrs:{span:24}},[a("el-checkbox",{staticStyle:{margin:"0 15px"}}),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.setInterests}},[e._v("权益设置")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.rest}},[e._v("清空设置")])],1)],1)],1),e._v(" "),a("div",{staticClass:"grade-item"},[a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grade-img"},[a("img",{attrs:{src:"https://img12.360buyimg.com/n7/jfs/t17989/208/1590957743/451183/f4572fbf/5ad05c50N3acc4ab3.jpg"}})])]),e._v(" "),a("el-col",{attrs:{span:14}},[a("span",{staticClass:"grade-item-title"},[e._v("生日特权")]),a("br"),e._v(" "),a("span",{staticStyle:{"font-size":"14px"}},[e._v("生日享有系统赠送的奖励")])])],1),e._v(" "),a("el-row",{staticClass:"grade-item-cont"},[a("el-col",{attrs:{span:24}},[a("span",[e._v("可获得100元优惠券")]),a("br"),e._v(" "),a("span",[e._v("仅限生日当天使用（当天23:59:59）")])])],1),e._v(" "),a("el-row",{staticClass:"grade-item-foot"},[a("el-col",{attrs:{span:24}},[a("el-checkbox",{staticStyle:{margin:"0 15px"}}),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.setInterests}},[e._v("权益设置")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.rest}},[e._v("清空设置")])],1)],1)],1)]),e._v(" "),a("div",{staticClass:"cms-form-footer"},[a("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(t){e.save(!0)}}},[e._v("保存")])],1),e._v(" "),a("el-dialog",{attrs:{title:"权益设置",visible:e.interestsDialog,width:"40%"},on:{"update:visible":function(t){e.interestsDialog=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formData.levelRightList[0],"label-width":"140px"}},[a("el-form-item",{attrs:{label:"权益奖励类型:",prop:"type",error:e.errorMessage.type}},[a("el-radio-group",{model:{value:e.formData.levelRightList[0].type,callback:function(t){e.$set(e.formData.levelRightList[0],"type",t)},expression:"formData.levelRightList[0].type"}},[a("el-radio",{attrs:{label:1}},[e._v("成长值")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("积分")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("优惠券")])],1),e._v(" "),a("div",{staticClass:"detail"},[e._v("优惠券额度为全平台通用")])],1),e._v(" "),a("el-form-item",{attrs:{label:"派发方式:",prop:"sendwayType",error:e.errorMessage.sendwayType}},[a("el-radio-group",{model:{value:e.formData.levelRightList[0].sendwayType,callback:function(t){e.$set(e.formData.levelRightList[0],"sendwayType",t)},expression:"formData.levelRightList[0].sendwayType"}},[a("el-radio",{attrs:{label:1}},[e._v("系统自为")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"奖励额度:",prop:"rewardTypeCode",error:e.errorMessage.sendwayType}},[a("div",[a("el-radio",{attrs:{label:"1"},model:{value:e.formData.levelRightList[0].rewardTypeCode,callback:function(t){e.$set(e.formData.levelRightList[0],"rewardTypeCode",t)},expression:"formData.levelRightList[0].rewardTypeCode"}},[e._v("固定")]),e._v(" "),a("el-input",{staticStyle:{width:"70%","margin-left":"10px"},attrs:{type:"namber",min:e.formData.levelRightList[0].minValue,max:e.formData.levelRightList[0].maxValue}}),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.formData.levelRightList[0].rewardTypeCode,callback:function(t){e.$set(e.formData.levelRightList[0],"rewardTypeCode",t)},expression:"formData.levelRightList[0].rewardTypeCode"}},[e._v("随机")])],1)])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.interestsDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.interestsDialog=!1}}},[e._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};var c=a("C7Lr")(v,n,!1,function(e){a("Ca3O")},"data-v-77008924",null);t.default=c.exports}});
//# sourceMappingURL=45.297e1b20cc5dff046bf8.js.map