webpackJsonp([20],{"0qQY":function(e,t){},"2Hut":function(e,t,a){var r=a("5Iw6"),l=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&l(e)===e}},"4Xi4":function(e,t,a){e.exports={default:a("M99A"),__esModule:!0}},Dn5W:function(e,t,a){var r=a("Grs1");r(r.S,"Number",{isInteger:a("2Hut")})},M99A:function(e,t,a){a("Dn5W"),e.exports=a("ZQXR").Number.isInteger},"XV/b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("4Xi4"),l=a.n(r),i=a("aA9S"),s=a.n(i),n=a("x1ym"),o=a("lcoF"),c=a("s9+M"),u=a("QkjJ"),d={logoResourceId:"",levelName:"",levelExp:10},g={type:2,rewardType:1,sendwayType:1,minValue:10,maxValue:20,sendStyle:1,couponId:"",couponList:[]},m={mixins:[o.a],data:function(){var e=this;return{interestsDialog:!1,levelData:s()({},d),rightData:s()({},g),isSetRight:!1,levelRules:{levelName:[n.a.required(),n.a.custom(function(e,t,a){Object(c.a)({levelName:t}).then(function(e){200===e.code&&(e.data?a():a(new Error("等级会员名称已存在，不允许重复添加")))})})],levelExp:[n.a.required(),n.a.number()],logoResourceId:[n.a.required("必须上传一个标识","change")]},rightRules:{typeCode:[n.a.required()],sendwayType:[n.a.required()],rewardType:[n.a.required()],minValue:[n.a.required(),n.a.number()],maxValue:[n.a.required(),n.a.number(),n.a.custom(function(t,a,r){Number(a)>Number(e.rightData.minValue)?r():r(new Error("最小金额要小于最大金额"))})],couponId:[n.a.required("此项必填","change")]},couponName:""}},watch:{rightData:{handler:function(e,t){1===e.sendStyle&&(e.minValue=e.maxValue)},deep:!0}},methods:{getCouponList:function(){var e=this;Object(u.y)().then(function(t){200===t.code?e.rightData.couponList=t.data.content:e.$errorMessage(t.message)})},save:function(e){var t=this;this.$refs.levelData.validate(function(e){if(!e)return!1;var a={};if(t.isSetRight){var r=[];delete t.rightData.sendStyle,r.push(t.rightData),3===t.rightData.rewardType&&(t.rightData.minValue=t.rightData.maxValue=0),a={memberLevel:t.levelData,levelRightList:r}}else a={memberLevel:t.levelData};Object(c.b)(a).then(function(e){200===e.code?(t.$successMessage("新增成功"),t.$routerLink("/memberGrade/list","list")):t.$errorMessage(e.message)})})},validateRightData:function(){var e=this;this.$refs.rightData.validate(function(t){if(1!==e.rightData.sendStyle&&t&&(e.interestsDialog=!1),1===e.rightData.sendStyle){if(!t)return!1;/^([1-9]\d*|[0]{1,1})$/g.test(parseInt(e.rightData.maxValue))&&l()(parseInt(e.rightData.maxValue))?e.interestsDialog=!1:e.$errorMessage("请输入合法的数字")}})},validateCancel:function(){this.interestsDialog=!1,this.$refs.rightData.resetFields()},tabChange:function(){this.rightData.maxValue=20,this.rightData.minValue=10,this.rightData.couponId="",this.rightData.sendStyle=1},changeValue:function(){this.rightData.maxValue=20,this.rightData.minValue=10,this.$refs.fix.clearValidate()},handleClose:function(){this.interestsDialog=!1,this.$refs.rightData.resetFields()},rest:function(){this.$refs.rightData.resetFields(),this.rightData=s()({},g),this.$refs.first.focus(),this.getCouponList()},getCouponName:function(){var e=this;Object(u.x)({id:this.rightData.couponId}).then(function(t){e.couponName=t.data.name})}},created:function(){this.getCouponList()}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cms-breadcrumb",{attrs:{to:"/memberGrade"},on:{click:e.rest}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),a("div",{staticClass:"cms-form-layout"},[a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("带 * 为必填")]),e._v(" "),a("li",[e._v("加入会员等级权益必须进行权益设置")])]),e._v(" "),a("el-form",{ref:"levelData",attrs:{rules:e.levelRules,model:e.levelData,"label-width":"210px"}},[a("el-form-item",{attrs:{label:"会员等级名称",prop:"levelName",error:e.errorMessage.levelName}},[a("el-input",{ref:"first",attrs:{maxlength:"20",autofocus:!0},model:{value:e.levelData.levelName,callback:function(t){e.$set(e.levelData,"levelName",t)},expression:"levelData.levelName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"等级升级条件",prop:"levelExp",error:e.errorMessage.levelExp}},[a("el-input",{attrs:{maxlength:"10"},model:{value:e.levelData.levelExp,callback:function(t){e.$set(e.levelData,"levelExp",t)},expression:"levelData.levelExp"}})],1),e._v(" "),a("el-form-item",{staticClass:"member-grade",attrs:{label:"会员等级logo",prop:"logoResourceId",error:e.errorMessage.logoResourceId}},[a("cms-picture-zone",{model:{value:e.levelData.logoResourceId,callback:function(t){e.$set(e.levelData,"logoResourceId",t)},expression:"levelData.logoResourceId"}})],1)],1),e._v(" "),a("h3",{staticClass:"cms-segmentation"},[e._v("会员等级权益")]),e._v(" "),a("div",{staticClass:"grade-items"},[a("div",{staticClass:"grade-item"},[a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grade-img"},[a("img",{attrs:{src:"https://img12.360buyimg.com/n7/jfs/t17989/208/1590957743/451183/f4572fbf/5ad05c50N3acc4ab3.jpg"}})])]),e._v(" "),a("el-col",{attrs:{span:14}},[a("span",{staticClass:"grade-item-title"},[e._v("生日特权")]),a("br"),e._v(" "),a("span",{staticStyle:{"font-size":"14px"}},[e._v("生日享有系统赠送的奖励")])])],1),e._v(" "),a("el-row",{staticClass:"grade-item-cont"},[a("el-col",{attrs:{span:24}},[this.isSetRight?a("span",[e.rightData.rewardType<=2?a("span",[1==e.rightData.sendStyle?a("span",[e._v("可固定获得"+e._s(e.rightData.maxValue)+"个\n                  "),1==e.rightData.rewardType?a("span",[e._v("成长值")]):e._e(),e._v(" "),2==e.rightData.rewardType?a("span",[e._v("积分")]):e._e()]):e._e(),e._v(" "),2==e.rightData.sendStyle?a("span",[e._v("可随机获得"+e._s(e.rightData.minValue)+"-"+e._s(e.rightData.maxValue)+"个\n                  "),1==e.rightData.rewardType?a("span",[e._v("成长值")]):e._e(),e._v(" "),2==e.rightData.rewardType?a("span",[e._v("积分")]):e._e()]):e._e()]):e._e(),e._v(" "),3==e.rightData.rewardType?a("span",[e._v("\n                可获得一张（"+e._s(e.couponName)+"）优惠券\n              ")]):e._e(),a("br")]):e._e(),e._v(" "),a("span",[e._v("仅限生日当天使用（当天23:59:59）")])])],1),e._v(" "),a("el-row",{staticClass:"grade-item-foot"},[a("el-col",{attrs:{span:24}},[a("el-checkbox",{staticStyle:{margin:"0 15px"},model:{value:e.isSetRight,callback:function(t){e.isSetRight=t},expression:"isSetRight"}}),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.interestsDialog=!0}}},[e._v("权益设置")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.rest}},[e._v("清空设置")])],1)],1)],1)]),e._v(" "),a("div",{staticClass:"cms-form-footer"},[a("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(t){e.save(!0)}}},[e._v("保存")])],1),e._v(" "),a("el-dialog",{attrs:{title:"权益设置",visible:e.interestsDialog,width:"530px","before-close":e.handleClose},on:{"update:visible":function(t){e.interestsDialog=t}}},[a("el-form",{ref:"rightData",attrs:{rules:e.rightRules,model:e.rightData,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"权益奖励类型:",prop:"rewardType",error:e.errorMessage.rewardType}},[a("el-radio-group",{on:{change:e.tabChange},model:{value:e.rightData.rewardType,callback:function(t){e.$set(e.rightData,"rewardType",t)},expression:"rightData.rewardType"}},[a("el-radio",{attrs:{label:1}},[e._v("成长值")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("积分")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("优惠券")])],1),e._v(" "),a("div",{staticClass:"detail"},[e._v("优惠券额度为全平台通用")])],1),e._v(" "),a("el-form-item",{attrs:{label:"派发方式:",prop:"sendwayType",error:e.errorMessage.sendwayType}},[a("el-radio-group",{model:{value:e.rightData.sendwayType,callback:function(t){e.$set(e.rightData,"sendwayType",t)},expression:"rightData.sendwayType"}},[a("el-radio",{attrs:{label:1}},[e._v("系统自为")])],1)],1),e._v(" "),e.rightData.rewardType<=2?a("el-form-item",{ref:"fix",staticClass:"send-style",attrs:{label:"奖励额度:",prop:"maxValue",rules:1==e.rightData.sendStyle?[{required:!0,message:"此项必填",trigger:"blur"},{type:"number",message:"数字类型",trigger:"blur"}]:[]}},[a("div",{staticStyle:{"margin-bottom":"5px"}},[a("el-radio",{attrs:{label:1},model:{value:e.rightData.sendStyle,callback:function(t){e.$set(e.rightData,"sendStyle",t)},expression:"rightData.sendStyle"}},[e._v("固定")]),e._v(" "),1==e.rightData.sendStyle?a("el-input",{staticStyle:{width:"50%","margin-left":"10px"},attrs:{maxlength:"8"},model:{value:e.rightData.maxValue,callback:function(t){e.$set(e.rightData,"maxValue",e._n(t))},expression:"rightData.maxValue"}}):e._e()],1),e._v(" "),a("div",[a("el-radio",{staticStyle:{"vertical-align":"middle",position:"relative",bottom:"8px"},attrs:{label:2},on:{change:e.changeValue},model:{value:e.rightData.sendStyle,callback:function(t){e.$set(e.rightData,"sendStyle",t)},expression:"rightData.sendStyle"}},[e._v("随机")]),e._v(" "),2==e.rightData.sendStyle?a("div",{staticClass:"send-style2",staticStyle:{display:"inline-block",width:"300px"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{staticStyle:{padding:"0"},attrs:{prop:"minValue"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{maxlength:"8"},model:{value:e.rightData.minValue,callback:function(t){e.$set(e.rightData,"minValue",t)},expression:"rightData.minValue"}})],1)],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-\n              ")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{staticStyle:{padding:"0"},attrs:{prop:"maxValue"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{maxlength:"8"},model:{value:e.rightData.maxValue,callback:function(t){e.$set(e.rightData,"maxValue",t)},expression:"rightData.maxValue"}})],1)],1)],1):e._e()],1)]):e._e(),e._v(" "),3==e.rightData.rewardType?a("el-form-item",{staticClass:"grade-coupon",attrs:{label:"优惠券:",prop:"couponId",error:e.errorMessage.couponId}},[a("el-select",{staticStyle:{width:"200px"},on:{change:e.getCouponName},model:{value:e.rightData.couponId,callback:function(t){e.$set(e.rightData,"couponId",t)},expression:"rightData.couponId"}},e._l(e.rightData.couponList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1):e._e()],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.validateCancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.validateRightData}},[e._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};var v=a("C7Lr")(m,p,!1,function(e){a("0qQY")},"data-v-d5533782",null);t.default=v.exports}});
//# sourceMappingURL=20.a5161e18f5ef2b417674.js.map