webpackJsonp([43],{mXzk:function(t,e){},sXBJ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("3cXf"),s=r.n(a),l=r("NyU8"),i={data:function(){var t=this;return{form:{name:"",useWeb:""},isShow:!0,structure:[{key:"sku",label:"SKU编号"},{key:"key",label:"卡号"}],addBtn:!0,rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],structure:[{required:!0,validator:function(e,r,a){for(var s=!0,l=/[^a-zA-Z]/g,i=0;i<t.structure.length;i++){if(""===t.structure[i].label||""===t.structure[i].key){s=!1;break}if(l.test(t.structure[i].key)){a(new Error("键值请输入英文"));break}}s?a():a(new Error("请输入完整后再提交"))},trigger:["blur","change"]}]}}},watch:{structure:{handler:function(){var t=s()(this.structure).length;this.addBtn=!(t>=105)},immediate:!0,deep:!0}},methods:{removeRow:function(t){this.structure.splice(t,1)},addRow:function(){this.structure.push({key:"",label:""})},saveData:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;var r={name:t.form.name,useWeb:t.form.useWeb,strutContent:t.structure,storeId:""};s()(r.strutContent),Object(l.B)(r).then(function(e){200===e.code&&(t.$successMessage(e.message),t.$routerLink("/product/virtualCard/list","list"))})})}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("cms-breadcrumb",{attrs:{to:"/product/virtualCard/list"}},[r("li",[t._v(t._s(t.$route.name))])]),t._v(" "),r("div",{staticClass:"cms-form-layout the-error"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px",rules:t.rules}},[r("el-form-item",{attrs:{label:"模板名称:",prop:"name"}},[r("el-input",{attrs:{maxlength:"150"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"使用网址:"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:t.form.useWeb,callback:function(e){t.$set(t.form,"useWeb",e)},expression:"form.useWeb"}}),t._v(" "),r("span",{staticClass:"gray"},[t._v("请输入带网络协议（https://或http://）的url")])],1),t._v(" "),r("el-form-item",{staticStyle:{"margin-bottom":"22px"},attrs:{label:"卡密模板结构",prop:"structure"}},[r("div",{staticClass:"info-wrap",staticStyle:{width:"480px",border:"1px dashed #999",padding:"5px"}},[r("table",[r("tr",[r("th",[t._v("键")]),t._v(" "),r("th",[t._v("显示名称")])]),t._v(" "),t._l(t.structure,function(e,a){return r("tr",{key:a},[r("td",{staticStyle:{height:"40px"}},[r("el-input",{staticStyle:{margin:"8px","max-width":"180px"},attrs:{maxlength:"20",type:"text",placeholder:"英文键，如（key）",disabled:a<2},model:{value:e.key,callback:function(r){t.$set(e,"key",r)},expression:"item.key"}})],1),t._v(" "),r("td",[r("el-input",{staticStyle:{margin:"8px","max-width":"190px"},attrs:{type:"text",maxlength:"20",required:"",placeholder:"中文显示名称，如（卡号）"},model:{value:e.label,callback:function(r){t.$set(e,"label",r)},expression:"item.label"}})],1),t._v(" "),r("td",[a>=2?r("el-button",{staticStyle:{margin:"8px"},attrs:{size:"mini",type:"danger"},on:{click:function(e){t.removeRow(a)}}},[t._v("删除")]):t._e()],1)])})],2),t._v(" "),t.addBtn?r("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",size:"mini"},on:{click:t.addRow}},[t._v("添加")]):t._e()],1)]),t._v(" "),r("el-button",{staticStyle:{margin:"8px 0 0 130px",width:"90px"},attrs:{type:"primary"},on:{click:t.saveData}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var u=r("C7Lr")(i,n,!1,function(t){r("mXzk")},null,null);e.default=u.exports}});
//# sourceMappingURL=43.a1e5b27ca7612459c714.js.map