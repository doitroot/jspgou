webpackJsonp([93],{ElGc:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("aA9S"),o=r.n(t),l=r("x1ym"),s=r("lcoF"),i=r("wNC5"),m={requestMethod:1,apiName:"",apiUrl:"",platformType:"1",apiClassCode:"",useScene:""},n={mixins:[s.a],data:function(){return{methodItems:[{id:1,name:"GET"},{id:2,name:"POST"},{id:3,name:"DELETE"},{id:4,name:"UPDATE"},{id:5,name:"PUT"}],formData:o()({},m),rules:{platformType:[l.a.required("必须选择一个平台")],apiName:[l.a.required("请填写API名称")],apiUrl:[l.a.required("请填写API地址"),l.a.custom(function(e,a,r){Object(i.a)({url:a}).then(function(e){e.data?r():r(new Error("API地址已存在"))})})],requestMethod:[l.a.required()],isSuper:[l.a.required()],menuid:[]}}},computed:{typeList:function(){return[]}},methods:{save:function(e){this.saveForm(i.e,this.formData,e,"/apiMange","list",{platformType:this.formData.platformType})}},created:function(){this.formData=o()({},m),this.formData.platformType=this.$route.query.platformType}},p={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("cms-breadcrumb",{attrs:{to:"/apiMange",type:"list",params:{platformType:e.$route.query.platformType}},on:{click:e.rest}},[r("li",[e._v(e._s(e.$route.name))])]),e._v(" "),r("div",{staticClass:"cms-form-layout"},[r("cms-prompt",{attrs:{collapse:!1}},[r("li",[e._v("可进行api的添加")])]),e._v(" "),r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formData,"label-width":"210px"}},[r("el-form-item",{attrs:{label:"平台",prop:"platformType",error:e.errorMessage.platformType}},[r("el-select",{model:{value:e.formData.platformType,callback:function(a){e.$set(e.formData,"platformType",a)},expression:"formData.platformType"}},[r("el-option",{attrs:{label:"平台端",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"商家端",value:"2"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"API名称",prop:"apiName",error:e.errorMessage.apiName}},[r("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.apiName,callback:function(a){e.$set(e.formData,"apiName",a)},expression:"formData.apiName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"API地址",prop:"apiUrl",error:e.errorMessage.roleName}},[r("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.apiUrl,callback:function(a){e.$set(e.formData,"apiUrl",a)},expression:"formData.apiUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"请求方式",prop:"requestMethod",error:e.errorMessage.requestMethod}},[r("el-radio-group",{model:{value:e.formData.requestMethod,callback:function(a){e.$set(e.formData,"requestMethod",a)},expression:"formData.requestMethod"}},e._l(e.methodItems,function(a,t){return r("el-radio",{key:t,attrs:{label:a.id}},[e._v(e._s(a.name))])}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"使用场景",prop:"useScene",error:e.errorMessage.useScene}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3}},model:{value:e.formData.useScene,callback:function(a){e.$set(e.formData,"useScene",a)},expression:"formData.useScene"}})],1)],1),e._v(" "),r("div",{staticClass:"cms-form-footer"},[r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(a){e.save(!1)}}},[e._v("保存并新增")]),e._v(" "),r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(a){e.save(!0)}}},[e._v("保存")]),e._v(" "),r("cms-button",{attrs:{type:"rest"},on:{click:e.rest}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var u=r("C7Lr")(n,p,!1,function(e){r("pQQb")},null,null);a.default=u.exports},pQQb:function(e,a){}});
//# sourceMappingURL=93.7c5342ee4b78efbe8139.js.map