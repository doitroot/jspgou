webpackJsonp([195],{"41DG":function(e,t){},SqSp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("aA9S"),l=a.n(s),r=a("x1ym"),o=a("5HJ5"),i=a("lcoF"),n=a("AsmT"),u=a("FvUg"),c=a("GBzI"),d={storeName:"",levelId:"",storeType:"",saleCateId:"",startTime:"",endTime:"",status:"",storeUsername:"",page:1,size:10},m={mixins:[o.a,i.a],data:function(){return{gradeList:[],categoryItems:[],queryParams:l()({},d),dialogFormVisible:!1,dialogForm:{id:"",status:3,remark:""},saveRules:{remark:[r.a.required("请填写不通过原因"),r.a.len(1,500)]}}},methods:{deleteData:function(e){this.deleteTableData(n.m,e)},deleteDatas:function(){this.deleteTableDatas(n.m,this.ids)},setTimer:function(e){this.queryParams.startTime=e[0],this.queryParams.endTime=e[1],this.query()},getGradeList:function(){var e=this;Object(u.c)({size:999999,page:0}).then(function(t){200===t.code&&(e.gradeList=t.data.content)})},getMenuTree:function(){var e=this;Object(c.e)().then(function(t){e.categoryItems=t.data})},getAll:function(){this.getGradeList(),this.getMenuTree()}},created:function(){this.getTableData(n.g,this.queryParams),this.getAll()}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cms-list-layout"},[a("cms-tabs",[a("cms-tab",{attrs:{to:"/shopManage/list"}},[e._v("店铺列表")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopManage/enterApplication"}},[e._v("入驻申请")])],1),e._v(" "),a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("显示平台入住店铺申请信息，可进行审核操作")])]),e._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[e._v("店铺名称")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.storeName,callback:function(t){e.$set(e.queryParams,"storeName",t)},expression:"queryParams.storeName"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("商家账号")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.storeUsername,callback:function(t){e.$set(e.queryParams,"storeUsername",t)},expression:"queryParams.storeUsername"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("店铺等级")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.queryParams.levelId,callback:function(t){e.$set(e.queryParams,"levelId",t)},expression:"queryParams.levelId"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),e._l(e.gradeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.levelName,value:e.id}})})],2)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("店铺类型")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.queryParams.storeType,callback:function(t){e.$set(e.queryParams,"storeType",t)},expression:"queryParams.storeType"}},[a("el-option",{attrs:{label:"全部",value:" "}}),e._v(" "),a("el-option",{attrs:{label:"个人店铺",value:1}}),e._v(" "),a("el-option",{attrs:{label:"企业店铺",value:2}})],1)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("主营类目")]),e._v(" "),a("el-select",{attrs:{"value-key":"id"},on:{change:e.query},model:{value:e.queryParams.saleCateId,callback:function(t){e.$set(e.queryParams,"saleCateId",t)},expression:"queryParams.saleCateId"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),e._l(e.categoryItems,function(e){return a("el-option",{key:e.id,attrs:{label:e.cateName,value:e.id}})})],2)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("申请时间")]),e._v(" "),a("cms-picker",{on:{change:e.setTimer}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("状态")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"待审核",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"审核不通过",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"待缴费",value:"2"}})],1)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1)]),e._v(" "),a("cms-sticky",[a("el-dialog",{attrs:{title:"审核不通过",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.dialogForm,rules:e.saveRules}},[a("el-form-item",{attrs:{label:"原因",prop:"remark","label-width":"120px",error:e.errorMessage.remark}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off",rows:"6"},model:{value:e.dialogForm.remark,callback:function(t){e.$set(e.dialogForm,"remark",t)},expression:"dialogForm.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.noPass(e.dialogForm.id,3,e.dialogForm.remark)}}},[e._v("确 定")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems,"row-click":e.checkRows}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"storeName",label:"店铺名称","min-width":"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"storeUsername",label:"商家账号","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"auditResults",label:"审核状态","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[1===t.row.auditResults?a("span",{staticClass:"info"},[e._v("待审核")]):e._e(),e._v(" "),2===t.row.auditResults?a("span",{staticClass:"success"},[e._v("审核通过,待缴费")]):e._e(),e._v(" "),3===t.row.auditResults?a("span",{staticClass:"error"},[e._v("审核不通过")]):e._e()])}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"storeType",label:"店铺类型","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[1===t.row.storeType?a("span",[e._v("个人店铺")]):2===t.row.storeType?a("span",{staticClass:"success"},[e._v("企业店铺")]):e._e()])}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"storeLevel.levelName",label:"店铺等级","min-width":"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productCategory.cateName",label:"主营类目","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"申请时间","min-width":"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.$moment(t.row.createTime)))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"storeInfo.address",label:"所在地","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productCategory.bondPrice",label:"保证金","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.$cms.float(t.row.productCategory.bondPrice)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{attrs:{icon:"edit",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),e.$routerLink("/shopManage/enterApplication/view","update",{id:t.row.id,storeType:t.row.storeType})}}},[e._v("查看")]),e._v(" "),1===t.row.auditResults?a("cms-button",{attrs:{icon:"edit",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),e.$routerLink("/shopManage/enterApplication/audit","update",{id:t.row.id,storeType:t.row.storeType})}}},[e._v("审核")]):e._e()],1)}}])})],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}})],1)},staticRenderFns:[]};var p=a("C7Lr")(m,v,!1,function(e){a("41DG")},null,null);t.default=p.exports}});
//# sourceMappingURL=195.9abac55a3d91836d30f7.js.map