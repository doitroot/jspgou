webpackJsonp([44],{VylB:function(e,t){},"ZF+T":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("aA9S"),l=a.n(s),n=a("5HJ5"),r=a("0dUi"),o={size:15,page:1,isFree:"",tplType:"",expressName:""},i={mixins:[n.a],data:function(){return{queryParams:l()({},o),typeList:[]}},computed:{},methods:{deleteData:function(e){this.deleteTableData(r.a,e)},deleteDatas:function(){this.deleteTableDatas(r.a,this.ids)}},created:function(){this.getTableData(r.d,this.queryParams)}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cms-list-layout"},[a("cms-prompt",[a("li",[e._v("显示商家运费模板列表")]),e._v(" "),a("li",[e._v("设置不同运费规则模板")])]),e._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[e._v("名称")]),e._v(" "),a("el-input",{on:{change:e.query},model:{value:e.queryParams.expressName,callback:function(t){e.$set(e.queryParams,"expressName",t)},expression:"queryParams.expressName"}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("计价方式")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.queryParams.tplType,callback:function(t){e.$set(e.queryParams,"tplType",t)},expression:"queryParams.tplType"}},[a("el-option",{attrs:{label:"件数",value:1}}),e._v(" "),a("el-option",{attrs:{label:"体积",value:2}}),e._v(" "),a("el-option",{attrs:{label:"重量",value:3}})],1)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1)]),e._v(" "),a("section",{staticClass:"cms-batch"},[a("cms-button",{attrs:{icon:"success",type:"success",size:"small"},on:{click:function(t){e.$routerLink("/freight/save","save")}}},[e._v("新增")]),e._v(" "),a("cms-button",{attrs:{icon:"error",type:"error",size:"small"},on:{click:function(t){e.deleteDatas()}}},[e._v("批量删除")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems,"row-click":e.checkRows}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"expressName",label:"模板名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"useScene",label:"是否包邮"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"text-overflow"},[0==t.row.isFree?a("span",[e._v("否")]):a("span",[e._v("是")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"tplType",label:"计价方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"text-overflow"},[1==t.row.tplType?a("span",[e._v("件数")]):e._e(),e._v(" "),2==t.row.tplType?a("span",[e._v("体积")]):e._e(),e._v(" "),3==t.row.tplType?a("span",[e._v("重量")]):e._e()])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"useScene",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.$moment(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"175",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{attrs:{icon:"edit",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),e.$routerLink("/freight/update","update",{id:t.row.id})}}},[e._v("编辑")]),e._v(" "),a("cms-button",{attrs:{icon:"error",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),e.deleteData(t.row.id)}}},[e._v("删除")])],1)}}])})],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}})],1)])},staticRenderFns:[]};var u=a("C7Lr")(i,c,!1,function(e){a("VylB")},null,null);t.default=u.exports}});
//# sourceMappingURL=44.530956317a3de3a6e296.js.map