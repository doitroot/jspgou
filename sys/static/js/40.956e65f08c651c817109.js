webpackJsonp([40],{Cj16:function(e,t,a){"use strict";var s=a("aA9S"),i=a.n(s),r=a("5HJ5"),o=a("wNC5"),l={apiName:"",apiUrl:"",size:10,page:1,platformType:1},n={name:"apiManger",mixins:[r.a],props:{type:{type:[String,Number],default:1},apis:{type:Array,default:function(){return[]}}},data:function(){return{dialogTableVisible:!1,queryParams:i()({},l),typeList:[],allApiIds:!1,checkApiIds:[],checkApiItems:[],selfAllItems:[],allCheck:!1}},computed:{},methods:{defaultToggleSelection:function(){var e=this;this.$refs.dataTable.clearSelection(),this.$nextTick(function(){e.tableData.map(function(t,a){for(var s=0;s<e.checkApiItems.length;s++)if(t.id===e.checkApiItems[s].id){e.$refs.dataTable.toggleRowSelection(e.tableData[a],!0);break}})})},getTableData:function(e,t){var a=this,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.tableData=[],this.loading=!0,this.callback=e,this.isPage=s,setTimeout(function(){e(t).then(function(e){200===e.code?s?(a.total=e.data.totalElements,a.tableData=e.data.content,a.defaultToggleSelection()):a.tableData=e.data:a.$errorMessage(e.message),a.loading=!1}).catch(function(e){a.loading=!1})},1)},getTagItem:function(e,t){this.$refs.dataTable.toggleRowSelection(e),this.checkApiItems.splice(t,1)},setAllApiIds:function(e){this.checkApiIds=e?this.checkApiItems.map(function(e){return e.id}):[]},removeCheckItems:function(){var e=this,t=[];this.checkApiItems.map(function(a){-1===e.checkApiIds.indexOf(a.id)?t.push(a):e.$refs.dataTable.toggleRowSelection(a)}),this.checkApiItems=t,this.checkApiIds=[]},toggleApiItems:function(e,t,a){var s=!1,i=-1;this.checkApiItems.map(function(t,a){if(t.id===e.id)return i=a,void(s=!0)}),"allClick"===t?a&&!s?this.checkApiItems.push(e):!a&&s&&this.checkApiItems.splice(i,1):s?this.checkApiItems.splice(i,1):this.checkApiItems.push(e)},checkRows:function(e){this.checkApiIds=[],this.$refs.dataTable.toggleRowSelection(e),this.toggleApiItems(e)},getCheckItemsAll:function(e){var t=this;e.length>0?(this.allCheck=!0,this.selfAllItems=this.$cms.deepCopy(e)):this.allCheck=!1,this.selfAllItems.map(function(e){t.toggleApiItems(e,"allClick",t.allCheck)})},getCheckItems:function(e,t){this.toggleApiItems(t)},close:function(e){this.dialogTableVisible=!1}},created:function(){this.queryParams.platformType=this.type,this.getTableData(o.d,this.queryParams)},watch:{apis:{handler:function(){this.checkApiItems=this.$cms.deepCopy(this.apis)},deep:!0,immediate:!0},checkApiIds:{handler:function(){this.checkApiIds.length===this.checkApiItems.length&&this.checkApiIds.length>0?this.allApiIds=!0:this.allApiIds=!1},deep:!0},checkApiItems:{handler:function(){this.$emit("get",this.checkApiItems)},deep:!0}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{size:"mini",type:"primary"},nativeOn:{click:function(t){e.dialogTableVisible=!0}}},[e._v("选择api列表")]),e._v(" "),a("div",{staticClass:"tag-warpper"},e._l(e.checkApiItems,function(t,s){return a("div",{key:s,staticClass:"tag-warpper__items"},[a("el-tag",{attrs:{closable:"","disable-transitions":!0},on:{close:function(a){e.getTagItem(t,s)}}},[e._v("\n      "+e._s(t.apiName)+"   "+e._s(t.apiUrl)+"\n    ")])],1)}),0),e._v(" "),a("el-dialog",{attrs:{title:"选择API列表",visible:e.dialogTableVisible,width:"90%","lock-scroll":!0,"append-to-body":!0,"before-close":e.close}},[a("div",{staticClass:"flex-card-box"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("已设置的api列表")])]),e._v(" "),a("el-checkbox-group",{model:{value:e.checkApiIds,callback:function(t){e.checkApiIds=t},expression:"checkApiIds"}},[a("ul",{staticClass:"check-items-box"},e._l(e.checkApiItems,function(t,s){return a("li",{key:s,staticClass:"check-items"},[a("el-checkbox",{staticClass:"check-items-label",attrs:{label:t.id}},[e._v("\n                ("+e._s(t.apiName)+") "+e._s(t.apiUrl)+"\n              ")])],1)}),0)]),e._v(" "),a("div",{staticClass:"card-footer"},[a("el-checkbox",{on:{change:e.setAllApiIds},model:{value:e.allApiIds,callback:function(t){e.allApiIds=t},expression:"allApiIds"}},[e._v("全选")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",disabled:e.checkApiIds.length<=0},on:{click:e.removeCheckItems}},[e._v("移除")])],1)],1),e._v(" "),a("div",{staticClass:" box-right"},[a("span",{staticClass:"el-icon-d-arrow-right"})]),e._v(" "),a("div",{staticClass:"box-table"},[a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[e._v("api地址")]),e._v(" "),a("el-input",{staticStyle:{width:"400px"},on:{change:e.query},model:{value:e.queryParams.apiUrl,callback:function(t){e.$set(e.queryParams,"apiUrl",t)},expression:"queryParams.apiUrl"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("api名称")]),e._v(" "),a("el-input",{on:{change:e.query},model:{value:e.queryParams.apiName,callback:function(t){e.$set(e.queryParams,"apiName",t)},expression:"queryParams.apiName"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%","overflow-y":"hidden",cursor:"pointer"},attrs:{data:e.tableData,stripe:"","max-height":"500"},on:{select:e.getCheckItems,"row-click":e.checkRows,"select-all":e.getCheckItemsAll}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"apiName",label:"api名称","min-width":"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"text-overflow",attrs:{title:t.row.apiName}},[e._v("\n                    "+e._s(t.row.apiName)+"\n                  ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"apiUrl",label:"api地址","min-width":"220px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"useScene",label:"使用场景"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"text-overflow",attrs:{title:t.row.useScene}},[e._v("\n                    "+e._s(t.row.useScene)+"\n                  ")])]}}])})],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.close}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:e.close}},[e._v("取消")])],1)])],1)},staticRenderFns:[]};var m=a("C7Lr")(n,c,!1,function(e){a("md1K")},null,null);t.a=m.exports},jKf5:function(e,t){},md1K:function(e,t){},x5Iu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("aA9S"),i=a.n(s),r=a("Cj16"),o=a("x1ym"),l=a("lcoF"),n=a("X2f8"),c={parentIds:[],parentId:"",menuName:"",sortNum:10,platformType:"",lowerMenu:!1,menu_type:1,show:!0,routingIdentifier:"",pagePath:"",accessIdentifier:"",metaValue:"",menuImg:"",redirectedRouting:"",apiIds:[]},m={components:{apiManger:r.a},mixins:[l.a],data:function(){var e=this;return{options:[],props:{value:"id",label:"name",children:"childs",disabled:"isAuth"},formData:i()({},c),rules:{parentIds:[o.a.required("必须选择一个上级菜单")],menuName:[o.a.required("菜单名称必须填写"),o.a.max(15,"最大长度为15个字符")],routingIdentifier:[o.a.required("路由地址必须填写"),o.a.custom(function(t,a,s){Object(n.a)({platformType:e.$route.query.platformType,routing:a}).then(function(e){200===e.code&&(e.data?s():s(new Error("路由已存在，不允许重复添加")))})})],sortNum:[o.a.required("排序值必填"),o.a.number()],menuid:[o.a.required()]}}},methods:{setShow:function(e){2===e&&(this.formData.show=!1)},autoAccessIdentifier:function(e){this.formData.accessIdentifier=e},getMenuTree:function(){var e=this;Object(n.c)({platformType:this.$route.query.platformType}).then(function(t){e.options=[{id:0,name:"根目录"}].concat(t.data)})},getApiMenuId:function(e){this.formData.apiIds=e.map(function(e){return e.id})},save:function(e){var t=this,a={coreMenu:this.$cms.deepCopy(this.formData),apiIds:this.formData.apiIds};a.coreMenu.parentId=a.coreMenu.parentIds[a.coreMenu.parentIds.length-1],delete a.coreMenu.apiIds,this.saveForm(n.f,a,e,"/menuManager","list",{platformType:this.formData.platformType}).then(function(e){t.getMenuTree(),t.formData.apiIds=[]})}},created:function(){this.formData.parentIds=this.$cms.arrayToNumber(this.$route.query.nodeIds),this.formData.platformType=this.$route.query.platformType,this.getMenuTree()}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("cms-breadcrumb",{attrs:{to:"/menuManager",type:"list",params:{platformType:e.$route.query.platformType}},on:{click:e.rest}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),a("div",{staticClass:"cms-form-layout"},[a("cms-prompt",{attrs:{collapse:!1}},[a("li",[e._v("可进行系统菜单的权限新增")])]),e._v(" "),a("h3",{staticClass:"cms-segmentation"},[e._v("基础信息")]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formData,"label-width":"210px"}},[a("el-form-item",{attrs:{label:"上级菜单",prop:"parentIds",error:e.errorMessage.parentIds}},[a("el-cascader",{attrs:{options:e.options,props:e.props,"change-on-select":!0},model:{value:e.formData.parentIds,callback:function(t){e.$set(e.formData,"parentIds",t)},expression:"formData.parentIds"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单名称",prop:"menuName",error:e.errorMessage.menuName}},[a("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.menuName,callback:function(t){e.$set(e.formData,"menuName",t)},expression:"formData.menuName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路由地址(path)",prop:"routingIdentifier",error:e.errorMessage.routingIdentifier}},[a("el-input",{attrs:{maxlength:"100"},on:{change:e.autoAccessIdentifier},model:{value:e.formData.routingIdentifier,callback:function(t){e.$set(e.formData,"routingIdentifier",t)},expression:"formData.routingIdentifier"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"页面路径(component)",prop:"pagePath",error:e.errorMessage.pagePath}},[a("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.pagePath,callback:function(t){e.$set(e.formData,"pagePath",t)},expression:"formData.pagePath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"权限标识",prop:"accessIdentifier",error:e.errorMessage.accessIdentifier}},[a("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.accessIdentifier,callback:function(t){e.$set(e.formData,"accessIdentifier",t)},expression:"formData.accessIdentifier"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单图标",prop:"menuImg",error:e.errorMessage.menuImg}},[a("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.menuImg,callback:function(t){e.$set(e.formData,"menuImg",t)},expression:"formData.menuImg"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路由重定向标识",prop:"redirectedRouting",error:e.errorMessage.redirectedRouting}},[a("el-input",{attrs:{maxlength:"100"},model:{value:e.formData.redirectedRouting,callback:function(t){e.$set(e.formData,"redirectedRouting",t)},expression:"formData.redirectedRouting"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序值",prop:"sortNum",error:e.errorMessage.sortNum}},[a("el-input",{attrs:{maxlength:"2"},model:{value:e.formData.sortNum,callback:function(t){e.$set(e.formData,"sortNum",e._n(t))},expression:"formData.sortNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单类型",prop:"menu_type"}},[a("el-radio-group",{on:{change:e.setShow},model:{value:e.formData.menu_type,callback:function(t){e.$set(e.formData,"menu_type",t)},expression:"formData.menu_type"}},[a("el-radio",{attrs:{label:1}},[e._v("菜单")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("权限")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"可见",prop:"show",error:e.errorMessage.show}},[a("cms-switch",{model:{value:e.formData.show,callback:function(t){e.$set(e.formData,"show",t)},expression:"formData.show"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否展示下级菜单布局",prop:"lowerMenu",error:e.errorMessage.lowerMenu}},[a("cms-switch",{model:{value:e.formData.lowerMenu,callback:function(t){e.$set(e.formData,"lowerMenu",t)},expression:"formData.lowerMenu"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"api接口信息"}},[e.status?a("api-manger",{attrs:{type:e.$route.query.platformType},on:{get:e.getApiMenuId}}):e._e()],1)],1),e._v(" "),a("div",{staticClass:"cms-form-footer"},[a("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(t){e.save(!1)}}},[e._v("保存并新增")]),e._v(" "),a("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(t){e.save(!0)}}},[e._v("保存")]),e._v(" "),a("cms-button",{attrs:{type:"rest"},on:{click:e.rest}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var u=a("C7Lr")(m,p,!1,function(e){a("jKf5")},null,null);t.default=u.exports}});
//# sourceMappingURL=40.956e65f08c651c817109.js.map