webpackJsonp([103],{DRpL:function(e,t){},zfsP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("aA9S"),r=a.n(s),o=a("x1ym"),l=a("lcoF"),i=a("gfuC"),m={mesCode:"",mesTitle:"",remark:"",details:{isOpen:!1,mesType:"",mesContent:"",extendedField:""}},n={name:"messageSetShopSave",mixins:[l.a],data:function(){var e=this;return{activeName:"1",formData:r()({},m),saveRules:{mesCode:[o.a.required("请填写模板标识"),o.a.custom(function(t,a,s){Object(i.a)({mesCode:e.formData.mesCode}).then(function(e){200===e.code?s():s(new Error("模板标识已存在，不允许重复绑定"))})}),o.a.english(),o.a.len(1,150)],mesTitle:[o.a.required("请填写模板标题"),o.a.len(1,150)],remark:[o.a.len(1,500)]}}},methods:{saveData:function(e){this.formData.details.mesType="4";var t=[];t.push(this.formData.details);var a={mesCode:this.formData.mesCode,mesTitle:this.formData.mesTitle,remark:this.formData.remark,mesType:3,details:t};this.saveForm(i.c,a,e,"/messageSet/systemTpl/list","list")},changeTabs:function(e,t){this.activeName=e.name},changeOpen:function(e){e||this.$refs.mesContent.clearValidate()},reset:function(){for(var e in this.formData=r()({},m),this.formData.details)this.formData.details[e]="";this.formData.details.isOpen=!1,this.$refs.form.resetFields()}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cms-breadcrumb",{attrs:{to:"/messageSet/systemTpl/list"},on:{click:e.rest}},[a("li",[e._v("系统消息模板-新增")])]),e._v(" "),a("div",{staticClass:"cms-form-layout"},[a("cms-prompt",{attrs:{collapse:!1}},[a("li",[e._v("设置系统发送消息的内容、方式")])]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.saveRules,model:e.formData,"label-width":"210px"}},[a("el-form-item",{attrs:{label:"模板标题",prop:"mesTitle",error:e.errorMessage.mesTitle}},[a("el-input",{ref:"first",attrs:{autofocus:!0,maxlength:"100"},model:{value:e.formData.mesTitle,callback:function(t){e.$set(e.formData,"mesTitle",t)},expression:"formData.mesTitle"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模板标识",prop:"mesCode",error:e.errorMessage.mesCode}},[a("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.mesCode,callback:function(t){e.$set(e.formData,"mesCode",t)},expression:"formData.mesCode"}}),e._v(" "),a("div",{staticClass:"gray"},[e._v("建议使用英文标识，全局唯一")])],1),e._v(" "),a("el-form-item",{attrs:{label:"模板描述",prop:"remark",error:e.errorMessage.remark}},[a("el-input",{attrs:{type:"textarea",rows:6,maxlength:"200"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否启用",prop:"details.isOpen"}},[a("cms-switch",{on:{change:e.changeOpen},model:{value:e.formData.details.isOpen,callback:function(t){e.$set(e.formData.details,"isOpen",t)},expression:"formData.details.isOpen"}})],1),e._v(" "),a("el-form-item",{ref:"mesContent",attrs:{label:"模板内容",prop:"details.mesContent",rules:e.formData.details.isOpen?[{required:!0,message:"模板内容必须填写",trigger:"blur"}]:[]}},[a("el-input",{attrs:{type:"textarea",rows:4,maxlength:"150"},model:{value:e.formData.details.mesContent,callback:function(t){e.$set(e.formData.details,"mesContent",t)},expression:"formData.details.mesContent"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"提示文案",prop:"details.extendedField"}},[a("el-input",{attrs:{maxlength:"200"},model:{value:e.formData.details.extendedField,callback:function(t){e.$set(e.formData.details,"extendedField",t)},expression:"formData.details.extendedField"}})],1)],1),e._v(" "),a("div",{staticClass:"cms-form-footer"},[a("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(t){e.saveData(!1)}}},[e._v("保存并新增")]),e._v(" "),a("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(t){e.saveData(!0)}}},[e._v("保存")]),e._v(" "),a("cms-button",{attrs:{type:"rest"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var f=a("C7Lr")(n,c,!1,function(e){a("DRpL")},null,null);t.default=f.exports}});
//# sourceMappingURL=103.9847a61eb54b7d50fdca.js.map