webpackJsonp([54],{XwHD:function(t,e){},ZXYy:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("aA9S"),n=s.n(a),o=s("5HJ5"),c=s("4ZUh"),i={levelId:"",page:"1",size:"15"},r={mixins:[o.a],data:function(){return{queryParams:n()({},i)}},computed:{ids:function(){var t=[];return this.checkItems.map(function(e){t.push(e.messageId)}),t},color:function(){return this.$store.state.system.color}},methods:{markreads:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定全部变更为已读状态?";this.batchStatus?this.$confirm(s,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.k)({ids:t}).then(function(t){200===t.code?(e.$successMessage("全部已阅"),e.getTableData(e.callback,e.queryParams,e.isPage)):e.$errorMessage("操作失败,"+t.message)})}).catch(function(){}):this.$errorMessage("至少选择一条消息")},deleteData:function(t){this.deleteTableData(c.h,t)},deleteDatas:function(){this.deleteTableDatas(c.h,this.ids)}},created:function(){this.getTableData(c.n,this.queryParams)}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cms-list-layout"},[s("cms-tabs",[s("cms-tab",{attrs:{to:"/sysmess/list"}},[t._v("系统消息")]),t._v(" "),s("cms-tab",{attrs:{to:"/sysmess/privite"}},[t._v("私信")])],1),t._v(" "),s("cms-prompt",{attrs:{collapse:"true"}},[s("li",[t._v("显示系统消息")])]),t._v(" "),s("section",{staticClass:"cms-batch"},[s("cms-button",{attrs:{icon:"success",type:"success",size:"small"},on:{click:function(e){t.markreads(t.ids)}}},[t._v("标记为已读")]),t._v(" "),s("cms-button",{attrs:{icon:"error",type:"error",size:"small"},on:{click:function(e){t.deleteDatas()}}},[t._v("批量删除")])],1),t._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.getCheckItems,"row-click":t.checkRows}},[s("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),t._v(" "),s("el-table-column",{attrs:{prop:"messageId",label:"id",width:"60"}}),t._v(" "),s("el-table-column",{attrs:{prop:"",label:"内容","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"text-overflow",class:e.row.status?"t-label":""},[e.row.status?t._e():s("span",{staticClass:"color",style:"color:"+t.color},[t._v("•")]),t._v(" "),s("span",{on:{click:function(s){s.stopPropagation(),t.$routerLink("/sysmess/view","view",{id:e.row.messageId})}}},[t._v(t._s(e.row.content))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"createTime",label:"发送时间","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n         "+t._s(t.$moment(e.row.createTime))+"\n      ")]}}])})],1),t._v(" "),s("cms-pagination",{attrs:{total:t.total},on:{change:t.getPage}})],1)},staticRenderFns:[]};var u=s("C7Lr")(r,l,!1,function(t){s("XwHD")},null,null);e.default=u.exports}});
//# sourceMappingURL=54.86fa37b374332e25bcb9.js.map