webpackJsonp([230],{Tzmy:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("aA9S"),o=r.n(t),l=r("x1ym"),n=r("lcoF"),i=r("Hy2i"),s={linkName:"",linkUrl:"",isEnable:!0,linkLogo:"",enabled:"",sortNum:10,remark:""},m={name:"friendlySave",mixins:[n.a],data:function(){return{formData:o()({},s),rules:{linkName:[l.a.required("请填写名称"),l.a.len(1,150)],linkUrl:[l.a.required("请填写URL"),l.a.len(1,150),l.a.url()],linkLogo:[l.a.required("必须选择一张图片","change")],sortNum:[l.a.required("请填写排序值"),l.a.number()],remark:[l.a.len(1,200)]}}},methods:{getLinkLogo:function(e){this.formData.linkLogo=e?e[0].id:"",this.$refs.form.validateField("linkLogo")},saveData:function(e){this.saveForm(i.d,this.formData,e,"/friendly/list","list")}},activated:function(){this.formData=o()({},s),this.destroyed()}},c={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("cms-breadcrumb",{attrs:{to:"/friendly/list"},on:{click:e.rest}},[r("li",[e._v(e._s(e.$route.name))])]),e._v(" "),r("div",{staticClass:"cms-form-layout"},[r("cms-prompt",{attrs:{collapse:"true"}},[r("li",[e._v("设置为启用，前台可显示友情链接地址")])]),e._v(" "),r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formData,"label-width":"210px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"名称",prop:"linkName",error:e.errorMessage.linkName}},[r("el-input",{ref:"first",attrs:{autofocus:!0},model:{value:e.formData.linkName,callback:function(a){e.$set(e.formData,"linkName",a)},expression:"formData.linkName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"URL",prop:"linkUrl",error:e.errorMessage.linkUrl}},[r("el-input",{model:{value:e.formData.linkUrl,callback:function(a){e.$set(e.formData,"linkUrl",a)},expression:"formData.linkUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否启用",prop:"isEnable"}},[r("cms-switch",{model:{value:e.formData.isEnable,callback:function(a){e.$set(e.formData,"isEnable",a)},expression:"formData.isEnable"}})],1),e._v(" "),r("el-form-item",{staticClass:"brands-logo",attrs:{label:"Logo",prop:"linkLogo",error:e.errorMessage.linkLogo}},[e.status?r("cms-picture-zone",{on:{change:e.getLinkLogo}}):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"排序值",prop:"sortNum",error:e.errorMessage.sortNum}},[r("el-input",{attrs:{maxlength:"2"},model:{value:e.formData.sortNum,callback:function(a){e.$set(e.formData,"sortNum",e._n(a))},expression:"formData.sortNum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注信息",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",maxlength:"200"},model:{value:e.formData.remark,callback:function(a){e.$set(e.formData,"remark",a)},expression:"formData.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"cms-form-footer"},[r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(a){e.saveData(!1)}}},[e._v("保存并新增")]),e._v(" "),r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(a){e.saveData(!0)}}},[e._v("保存")]),e._v(" "),r("cms-button",{attrs:{type:"rest"},on:{click:e.rest}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},u=r("C7Lr")(m,c,!1,null,null,null);a.default=u.exports}});
//# sourceMappingURL=230.7434e99576630eff54c3.js.map