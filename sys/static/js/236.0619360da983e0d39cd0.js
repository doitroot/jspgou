webpackJsonp([236],{"2ckw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),o=a.n(r),s=a("x1ym"),l=a("lcoF"),i=a("Sy1Y"),n=a("bS8P"),c={title:"",show:!0,author:"",keywords:"",description:"",linkUrl:"",content:"",imgResourceId:"",sortNum:10,cateId:[]},m={name:"articleManagerSave",mixins:[l.a],data:function(){return{props:{value:"id",label:"name",children:"childs",disabled:"isAuth"},options:[],formData:o()({},c),saveRules:{title:[s.a.required("请输入标题"),s.a.max(20)],sortNum:[s.a.required("请输入排序值"),s.a.number(),s.a.custom(function(e,t,a){t>=1&&t<=100?a():a(new Error("排序值为1到100的整数"))})],cateId:[s.a.required("必须选择一个上级分类")],author:[s.a.max(20)],keywords:[s.a.max(20)],description:[s.a.max(20)],linkUrl:[s.a.url()]}}},methods:{save:function(e){var t=this.$cms.deepCopy(this.formData);t.cateId=t.cateId[t.cateId.length-1],this.saveForm(i.g,t,e,"/articleManager","list")},getMenuTree:function(){var e=this;Object(n.i)().then(function(t){e.options=t.data})}},activated:function(){this.autoFocus(),"save"===this.$route.query.type&&(this.formData=o()({},c))},created:function(){this.getMenuTree()}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("cms-breadcrumb",{attrs:{to:"/articleManager"},on:{click:e.rest}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),a("div",{staticClass:"cms-form-layout"},[a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("带 * 为必填项")])]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.saveRules,model:e.formData,"label-width":"210px"}},[a("el-form-item",{attrs:{label:"文章分类",error:e.errorMessage.cateId,prop:"cateId"}},[a("el-cascader",{attrs:{options:e.options,props:e.props,"change-on-select":!0},model:{value:e.formData.cateId,callback:function(t){e.$set(e.formData,"cateId",t)},expression:"formData.cateId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"标题",prop:"title",error:e.errorMessage.title}},[a("el-input",{ref:"first",attrs:{autofocus:!0},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序值",prop:"sortNum",error:e.errorMessage.sortNum}},[a("el-input",{model:{value:e.formData.sortNum,callback:function(t){e.$set(e.formData,"sortNum",t)},expression:"formData.sortNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否显示",prop:"show"}},[a("cms-switch",{model:{value:e.formData.show,callback:function(t){e.$set(e.formData,"show",t)},expression:"formData.show"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"图片标识",prop:"imgResourceId"}},[e.status?a("cms-picture-zone",{model:{value:e.formData.imgResourceId,callback:function(t){e.$set(e.formData,"imgResourceId",t)},expression:"formData.imgResourceId"}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("上传")])],1):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"作者",prop:"author"}},[a("el-input",{model:{value:e.formData.author,callback:function(t){e.$set(e.formData,"author",t)},expression:"formData.author"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"关键词(keywords)",prop:"keywords"}},[a("el-input",{model:{value:e.formData.keywords,callback:function(t){e.$set(e.formData,"keywords",t)},expression:"formData.keywords"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述(description)",prop:"description"}},[a("el-input",{model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"外部链接",prop:"linkUrl",error:e.errorMessage.linkUrl}},[a("el-input",{model:{value:e.formData.linkUrl,callback:function(t){e.$set(e.formData,"linkUrl",t)},expression:"formData.linkUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"content","label-width":"0"}},[a("cms-editor",{model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1)],1),e._v(" "),a("div",{staticClass:"cms-form-footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.save(!1)}}},[e._v("保存并新增")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.save(!0)}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.rest}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},f=a("C7Lr")(m,u,!1,null,null,null);t.default=f.exports}});
//# sourceMappingURL=236.0619360da983e0d39cd0.js.map