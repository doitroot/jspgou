webpackJsonp([54],{"37uN":function(t,e,a){"use strict";a.d(e,"g",function(){return r}),a.d(e,"f",function(){return s}),a.d(e,"b",function(){return o}),a.d(e,"a",function(){return l}),a.d(e,"c",function(){return i}),a.d(e,"d",function(){return c}),a.d(e,"e",function(){return u});var n=a("HNM5"),r=function(t){return n.a.get("/admin/platform/memberrecharge/page",{params:t})},s=function(t){return n.a.post("/admin/platform/memberrecharge/delete",t)},o=function(t){return n.a.get("/admin/platform/memberpresent/page",{params:t})},l=function(t){return n.a.post("/admin/platform/memberpresent/delete",t)},i=function(t){return n.a.post("/admin/platform/memberpresent/pass",t)},c=function(t){return n.a.post("/admin/platform/memberpresent/reject",t)},u=function(t){return n.a.get("/admin/platform/memberrecharge/queryResult",{params:t})}},DIZz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aA9S"),r=a.n(n),s=a("37uN"),o={username:"",status:"",accountTypeCode:"",page:1,size:10},l={mixins:[a("5HJ5").a],data:function(){return{queryParams:r()({},o),value:""}},methods:{examine:function(t){var e=this;this.$confirm("提现申请通过后，系统将自动调用支付插件中设置的支付宝账户进行转账，请谨慎操作","系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.c)({ids:[t]}).then(function(t){200===t.code?(e.$successMessage("审核成功"),e.getTableData(s.b,e.queryParams)):e.$errorMessage(t.message)})}).catch(function(){})},examineDis:function(t){var e=this;this.$prompt("原因","系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"请输入100字以内不通过原因",inputType:"textarea",inputPattern:/^.{1,100}$/,inputErrorMessage:"请输入100字以内不通过原因"}).then(function(a){var n=a.value;Object(s.d)({ids:[t],data:n}).then(function(t){200===t.code?(e.$successMessage("操作成功"),e.getTableData(s.b,e.queryParams)):e.$errorMessage(t.message)})}).catch(function(){})},deleteData:function(t){this.deleteTableData(s.a,t)},deleteDatas:function(t){this.deleteTableDatas(s.a,t)},getTableData:function(t,e){var a=this,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.tableData=[],this.loading=!0,this.callback=t,this.isPage=n,setTimeout(function(){t(e).then(function(t){200===t.code?n?(a.total=t.data.totalElements,a.tableData=t.data.content):a.tableData=t.data.content:a.$errorMessage(t.message),a.loading=!1}).catch(function(t){a.loading=!1})},1)}},created:function(){this.getTableData(s.b,this.queryParams)}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cms-list-layout"},[a("cms-tabs",[a("cms-tab",{attrs:{to:"/recharge/recharge"}},[t._v("充值")]),t._v(" "),a("cms-tab",{attrs:{to:"/recharge/present"}},[t._v("提现")])],1),t._v(" "),a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[t._v("显示所有会员充值记录及提现申请")]),t._v(" "),a("li",[t._v("可以对充值记录更改状态及提现申请审核")])]),t._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[t._v("会员账号")]),t._v(" "),a("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.query(e):null}},model:{value:t.queryParams.account,callback:function(e){t.$set(t.queryParams,"account",e)},expression:"queryParams.account"}})],1),t._v(" "),a("div",{staticClass:"query-group"},[a("label",[t._v("状态")]),t._v(" "),a("el-select",{on:{change:t.query},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),a("el-option",{attrs:{label:"待审核",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"审核不通过",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"转账失败",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"完成",value:"3"}})],1)],1),t._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.query(e):null}}},[t._v("查询")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.getCheckItems}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"businessNo",label:"提现编号","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"member.username",label:"会员账户","min-width":"110",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"money",label:"提现金额","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$cms.float(e.row.money)))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"账户类型","min-width":"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"==e.row.accountTypeCode?a("span",[t._v("支付宝")]):"2"==e.row.accountTypeCode?a("span",[t._v("微信")]):"3"==e.row.accountTypeCode?a("span",[t._v("银联")]):"4"==e.row.accountTypeCode?a("span",[t._v("余额")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"account",label:"账户","min-width":"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[1===e.row.status?a("span",{staticClass:"info"},[t._v("待审核")]):2===e.row.status?a("span",{staticClass:"error"},[t._v("未完成")]):3===e.row.status?a("span",{staticClass:"success"},[t._v("已完成")]):4===e.row.status?a("span",{staticClass:"error"},[t._v("转账失败")]):t._e()])}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"tradeNo",label:"交易流水号","min-width":"300",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"申请时间","min-width":"170",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.$moment(e.row.createTime))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"finishTime",label:"完成转账时间","min-width":"170",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.$moment(e.row.finishTime))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":"240"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作选项",width:"210",fixed:"right",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[1===e.row.status?a("cms-button",{attrs:{icon:"edit",size:"small",type:"warning"},on:{click:function(a){t.examine(e.row.id)}}},[t._v("审核")]):t._e(),t._v(" "),1===e.row.status?a("cms-button",{attrs:{icon:"error",size:"small",type:"info"},on:{click:function(a){t.examineDis(e.row.id)}}},[t._v("审核不通过")]):t._e(),t._v(" "),4===e.row.status?a("cms-button",{attrs:{icon:"error",size:"small",type:"info"},on:{click:function(a){t.deleteData(e.row.id)}}},[t._v("删除")]):t._e()],1)}}])})],1),t._v(" "),a("cms-pagination",{attrs:{total:t.total},on:{change:t.getPage}})],1)},staticRenderFns:[]};var c=a("C7Lr")(l,i,!1,function(t){a("Pyov")},null,null);e.default=c.exports},Pyov:function(t,e){}});
//# sourceMappingURL=54.821f655231adbe4a7a64.js.map