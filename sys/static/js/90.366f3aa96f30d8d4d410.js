webpackJsonp([90],{Vkfz:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("aA9S"),o=r.n(a),n=r("m2ya"),s=r("lcoF"),i=r("FvUg"),l={id:"",menuids:[]},u={mixins:[s.a],components:{roleTree:n.a},data:function(){return{roleStatus:!0,formData:o()({},l)}},methods:{getFormData:function(e){var t=this;Object(i.d)({id:e}).then(function(e){t.formData=e.data,t.formData.menuids=e.data.menus.map(function(e){return e.id})})},update:function(){var e=this,t=this.formData;t.id=this.$route.query.id,t.menuids=this.$refs.role.getPermsInfo().map(function(e){return e.id}),this.$refs.form.validate(function(r){t.menuids.length>0&&(e.loading=!0,Object(i.h)(t).then(function(t){200===t.code?(e.$successMessage("修改成功"),e.loading=!1,setTimeout(function(){e.rest(),e.$routerLink("/shopLevel/list","list")},700)):e.loading=!1}))})}},created:function(){this.getFormData(this.$route.query.id)}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("cms-breadcrumb",{attrs:{to:"/shopLevel/list",type:"list"}},[r("li",[e._v(e._s(e.$route.name))])]),e._v(" "),r("div",{staticClass:"cms-form-layout"},[r("cms-prompt",{attrs:{collapse:!1}},[r("li",[e._v("提供店铺等级设置不同的权限功能")])]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"210px"}},[r("el-form-item",{attrs:{label:"等级名称"}},[e._v("\n            "+e._s(e.$route.query.name)+"\n        ")]),e._v(" "),r("el-form-item",{attrs:{label:"授权功能",prop:"menuids",error:e.errorMessage.menuids}},[e.roleStatus?r("role-tree",{ref:"role",attrs:{menuIds:e.formData.menuids,type:2}}):e._e()],1)],1),e._v(" "),r("div",{staticClass:"cms-form-footer"},[r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:e.update}},[e._v("保存修改")])],1)],1)],1)},staticRenderFns:[]};var c=r("C7Lr")(u,m,!1,function(e){r("y17c")},null,null);t.default=c.exports},y17c:function(e,t){}});
//# sourceMappingURL=90.366f3aa96f30d8d4d410.js.map