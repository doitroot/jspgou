webpackJsonp([118],{Z1A5:function(e,t){},lDMJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("aA9S"),l=a.n(s),n=a("5HJ5"),r=a("EOYE"),i=a("s9+M"),o={email:"",phone:"",enabled:"",level:"",username:"",startTime:"",endTime:"",size:10,page:1,isOpenStore:""},c={mixins:[n.a],data:function(){return{queryParams:l()({},o),value:!0,levelList:[]}},methods:{getMemberLevel:function(){var e=this;Object(i.c)().then(function(t){e.loading=!1,200===t.code?e.levelList=t.data:e.$errorMessage(t.message)})},deleteData:function(e){this.deleteTableData(r.f,e)},deleteDatas:function(){this.deleteTableDatas(r.f,this.ids)},setTimer:function(e){this.queryParams.startTime=e[0],this.queryParams.endTime=e[1],this.query()},batchEnabled:function(e){var t=this;this.batchStatus?(this.loading=!0,Object(r.h)({ids:e}).then(function(e){t.loading=!1,200===e.code?(t.getTableData(r.l,t.queryParams),t.$successMessage("启用成功")):t.$errorMessage("启用失败")})):this.$errorMessage("请至少选择一条数据")},batchDisabled:function(e){var t=this;this.batchStatus?(this.loading=!0,Object(r.g)({ids:e}).then(function(e){t.loading=!1,200===e.code?(t.getTableData(r.l,t.queryParams),t.$successMessage("禁用成功")):t.$errorMessage("禁用失败")})):this.$errorMessage("请至少选择一条数据")},setDisable:function(e,t){var a=this;e?Object(r.h)({ids:[t]}).then(function(e){200===e.code?a.$successMessage("启用成功"):a.$errorMessage("启用失败")}):Object(r.g)({ids:[t]}).then(function(e){200===e.code?a.$successMessage("禁用成功"):a.$errorMessage("禁用失败")})}},created:function(){this.getTableData(r.l,this.queryParams),this.getMemberLevel()}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cms-list-layout"},[a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("显示商城所有的会员信息")]),e._v(" "),a("li",[e._v("可对会员进行修改、查看、删除等操作")]),e._v(" "),a("li",[e._v("禁用会员无法进行商城登录")])]),e._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[e._v("会员账户")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.username,callback:function(t){e.$set(e.queryParams,"username",t)},expression:"queryParams.username"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("邮箱")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.email,callback:function(t){e.$set(e.queryParams,"email",t)},expression:"queryParams.email"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("手机")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.phone,callback:function(t){e.$set(e.queryParams,"phone",t)},expression:"queryParams.phone"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("是否启用")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.queryParams.enabled,callback:function(t){e.$set(e.queryParams,"enabled",t)},expression:"queryParams.enabled"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"是",value:!0}}),e._v(" "),a("el-option",{attrs:{label:"否",value:!1}})],1)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("会员等级")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.queryParams.level,callback:function(t){e.$set(e.queryParams,"level",t)},expression:"queryParams.level"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),e._l(e.levelList,function(e){return a("el-option",{key:e.id,attrs:{label:e.levelName,value:e.id}})})],2)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("注册日期")]),e._v(" "),a("cms-picker",{on:{change:e.setTimer}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1)]),e._v(" "),a("cms-sticky",[a("section",{staticClass:"cms-batch"},[a("cms-button",{directives:[{name:"prem",rawName:"v-prem",value:"/shopMember/save",expression:"'/shopMember/save'"}],attrs:{icon:"add",type:"success",size:"small"},on:{click:function(t){e.$routerLink("/shopMember/save","save")}}},[e._v("新增")]),e._v(" "),a("cms-button",{directives:[{name:"prem",rawName:"v-prem",value:"/shopMember/delete",expression:"'/shopMember/delete'"}],attrs:{icon:"error",type:"error",size:"small"},on:{click:function(t){e.deleteDatas()}}},[e._v("批量删除")])],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems,"row-click":e.checkRows}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名","min-width":"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"balance",label:"余额/积分","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.memberAccount?a("span",[e._v(e._s(t.row.memberAccount.balance)+"/"+e._s(t.row.memberAccount.score))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"levelName",label:"成长值/会员等级","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.memberAccount&&t.row.memberLevel?a("span",[e._v("\n        "+e._s(t.row.memberAccount.exp)+" / "+e._s(t.row.memberLevel.levelName)+"\n     ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"enabled",label:"是否启用",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-switch",{attrs:{id:t.row.id},on:{change:e.setDisable},model:{value:t.row.enabled,callback:function(a){e.$set(t.row,"enabled",a)},expression:"scope.row.enabled"}})],1)}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"注册日期","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.$moment(t.row.createTime))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"lastLoginTime",label:"最后登录时间","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.$moment(t.row.lastLoginTime))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"lastLoginIp",label:"最后登录IP","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"175",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{attrs:{icon:"edit",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),e.$routerLink("/shopMember/edit","edit",{id:t.row.id})}}},[e._v("修改")]),e._v(" "),a("cms-button",{attrs:{icon:"error",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),e.deleteData(t.row.id)}}},[e._v("删除")])],1)}}])})],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}})],1)},staticRenderFns:[]};var m=a("C7Lr")(c,u,!1,function(e){a("Z1A5")},null,null);t.default=m.exports}});
//# sourceMappingURL=118.96fccdcf2efc87a72a98.js.map