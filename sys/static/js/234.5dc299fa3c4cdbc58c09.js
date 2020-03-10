webpackJsonp([234],{"3AVP":function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=r("aA9S"),t=r.n(o),s=r("x1ym"),l=r("lcoF"),n=r("zzd2"),i=r("pPcO"),c={username:"",password:"",checkPassword:"",email:"",enabled:!0,roleid:[]},m={name:"adminSave",mixins:[l.a],data:function(){var e=this;return{roleList:[],formData:t()({},c),saveRules:{username:[s.a.custom(function(a,r,o){Object(i.i)({validName:e.formData.username}).then(function(e){200===e.code&&(e.data?o():o(new Error("用户名已存在，不允许重复添加")))})}),s.a.required("用户名不能为空"),s.a.len(1,24)],password:[s.a.required("请输入密码"),s.a.password(function(a,r,o){""===r?"save"===e.type?o(new Error("请输入密码")):o():(""!==e.formData.password&&e.$refs.form.validateField("checkPassword"),o())}),s.a.len(6,16)],checkPassword:[s.a.required("请再次输入密码"),s.a.password(function(a,r,o){""===r?"save"===e.type?o(new Error("请再次输入密码")):o():r!==e.formData.password?o(new Error("两次输入密码不一致!")):o()}),s.a.len(6,16)],email:[s.a.custom(function(a,r,o){Object(i.h)({validMail:e.formData.email}).then(function(e){200===e.code&&(e.data?o():o(new Error("邮箱已存在，不允许重复绑定")))})}),s.a.email(),s.a.required("邮箱必填")],enabled:[s.a.required(null,"blur","boolean")],roleid:[s.a.required("至少勾选一个角色","change")]}}},methods:{save:function(e){var a=this;this.$refs.form.validate(function(r,o){if(r){for(var t=!0,s=0;s<a.formData.password.length;s++){var l=a.formData.password.charCodeAt(s);if(!(l>0&&l<255&&32!==l)){t=!1;break}t=!0}t?(a.loading=!0,a.formData.password=a.$cms.encrypt(a.formData.password),Object(i.f)(a.formData).then(function(r){200===r.code?(a.$successMessage("新增成功"),a.loading=!1,e?(a.rest(),a.$routerLink("/admin/list")):a.rest()):(a.$errorMessage(r.message),a.loading=!1)})):a.$errorMessage("密码不能为中文")}})},getRoleList:function(){var e=this;Object(n.c)({size:999999,page:0}).then(function(a){200===a.code&&(e.roleList=a.data.content)})}},activated:function(){this.autoFocus(),"save"===this.$route.query.type&&(this.formData=t()({},c))},created:function(){this.getRoleList()}},d={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("cms-breadcrumb",{attrs:{to:"/admin"},on:{click:e.rest}},[r("li",[e._v(e._s(e.$route.name))])]),e._v(" "),r("div",{staticClass:"cms-form-layout"},[r("cms-prompt",{attrs:{collapse:"true"}},[r("li",[e._v("可进行添加管理员，用于登录平台管理，无法登录商城前台及商家管理平台")]),e._v(" "),r("li",[e._v("管理员必须赋予角色权限，如无角色权限请移至系统->权限->角色管理中新增")]),e._v(" "),r("li",[e._v("保存并新增按钮触发之后需再次跳转回该页面")])]),e._v(" "),r("el-form",{ref:"form",attrs:{rules:e.saveRules,model:e.formData,"label-width":"210px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username",error:e.errorMessage.username}},[r("el-input",{ref:"first",attrs:{autofocus:!0},model:{value:e.formData.username,callback:function(a){e.$set(e.formData,"username",a)},expression:"formData.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password",error:e.errorMessage.password}},[r("el-input",{attrs:{type:"password",maxlength:"20"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPassword",error:e.errorMessage.checkPassword}},[r("el-input",{attrs:{type:"password",maxlength:"20"},model:{value:e.formData.checkPassword,callback:function(a){e.$set(e.formData,"checkPassword",a)},expression:"formData.checkPassword"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Email",prop:"email",error:e.errorMessage.email}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否启用",prop:"enabled",error:e.errorMessage.enabled}},[r("cms-switch",{model:{value:e.formData.enabled,callback:function(a){e.$set(e.formData,"enabled",a)},expression:"formData.enabled"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色",prop:"roleid",error:e.errorMessage.roleid}},[r("el-checkbox-group",{model:{value:e.formData.roleid,callback:function(a){e.$set(e.formData,"roleid",a)},expression:"formData.roleid"}},e._l(e.roleList,function(a){return r("el-checkbox",{key:a.id,attrs:{label:a.id}},[e._v("\n            "+e._s(a.roleName)+"\n          ")])}),1)],1)],1),e._v(" "),r("div",{staticClass:"cms-form-footer"},[r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(a){e.save(!1)}}},[e._v("保存并新增")]),e._v(" "),r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(a){e.save(!0)}}},[e._v("保存")]),e._v(" "),r("cms-button",{attrs:{type:"rest"},on:{click:e.rest}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},u=r("C7Lr")(m,d,!1,null,null,null);a.default=u.exports}});
//# sourceMappingURL=234.5dc299fa3c4cdbc58c09.js.map