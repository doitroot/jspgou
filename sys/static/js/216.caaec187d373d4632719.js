webpackJsonp([216],{"7UUg":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("x1ym"),s=e("lcoF"),o=e("NDfU"),i={mixins:[s.a],data:function(){return{status:!0,formData:{},saveRules:{name:[r.a.required("商品类型名称"),r.a.len(1,150)]}}},methods:{getFormData:function(t){var a=this;this.loading=!0,Object(o.h)({id:t}).then(function(t){200===t.code?(a.formData=t.data,a.formData.groupName=t.data.groupName.replace(/,/g,"\n"),a.loading=!1):a.$errorMessage(t.message)})},getBrand:function(t){this.formData.brandIds=t.map(function(t){return t.id})},update:function(){var t={productType:{id:this.formData.id,name:this.formData.name,custom:this.formData.custom,groupName:this.formData.groupName},brandIds:this.formData.brandIds};this.updateForm(o.l,t,"/productType/list","list")},reset:function(){this.destroyed(),this.getFormData(this.$route.query.id),this.$refs.form.resetFields()}},created:function(){this.getFormData(this.$route.query.id)}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("cms-breadcrumb",{attrs:{to:"/productType/list",type:"list"},on:{click:t.rest}},[e("li",[t._v(t._s(t.$route.name))])]),t._v(" "),e("div",{staticClass:"cms-form-layout"},[e("cms-prompt",{attrs:{collapse:"true"}},[e("li",[t._v("带 * 为必填项")])]),t._v(" "),e("el-form",{ref:"form",attrs:{rules:t.saveRules,model:t.formData,"label-width":"210px"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"商品类型名称:",prop:"name",error:t.errorMessage.name}},[e("el-input",{model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"管理品牌:",prop:"brandIds",error:t.errorMessage.brandIds}},[t.status?e("cms-brand",{attrs:{multiple:"",select:t.formData.brandList,max:8},model:{value:t.formData.brandIds,callback:function(a){t.$set(t.formData,"brandIds",a)},expression:"formData.brandIds"}},[e("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("选择品牌")])],1):t._e(),t._v(" "),e("div",{staticClass:"gray"},[t._v("品牌推荐将显示在商城导航侧栏右侧，为保证商城布局正常显示，推荐最多选择8个")])],1),t._v(" "),e("el-form-item",{attrs:{label:"是否允许自定义:",prop:"custom",error:t.errorMessage.custom}},[e("cms-switch",{model:{value:t.formData.custom,callback:function(a){t.$set(t.formData,"custom",a)},expression:"formData.custom"}}),t._v(" "),e("div",{staticClass:"gray"},[t._v("选择“是”，在商家选择添加对应商品类型商品时，可自定义添加属性")])],1),t._v(" "),e("el-form-item",{attrs:{label:"属性分组:",prop:"groupName"}},[e("el-input",{attrs:{type:"textarea",rows:6,maxlength:"200"},model:{value:t.formData.groupName,callback:function(a){t.$set(t.formData,"groupName",a)},expression:"formData.groupName"}}),t._v(" "),e("div",{staticClass:"gray"},[t._v("多个请换行填写，显示先后顺序即填写先后顺序")])],1)],1),t._v(" "),e("div",{staticClass:"cms-form-footer"},[e("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(a){t.update(!1)}}},[t._v("修改")]),t._v(" "),e("cms-button",{attrs:{type:"rest"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]},n=e("C7Lr")(i,m,!1,null,null,null);a.default=n.exports}});
//# sourceMappingURL=216.caaec187d373d4632719.js.map