webpackJsonp([64],{"5FNO":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("aA9S"),n=s.n(a),r=s("QkjJ"),o=s("115F"),i={name:"",beginTime:"",endTime:"",promoteType:"",size:"15",page:"1"},l={mixins:[s("5HJ5").a],components:{payBox:o.a},data:function(){return{queryParams:n()({},i),orderNum:""}},methods:{setTimer:function(e){this.queryParams.beginTime=e[0],this.queryParams.endTime=e[1],this.getTableData(r.e,this.queryParams)},setPayOrder:function(e){var t=this;Object(r.f)({promoteId:e}).then(function(e){200===e.code?(t.orderNum=e.data.orderNum,t.$refs.pay.showPay()):t.$errorMessage(e.message)})}},created:function(){this.getTableData(r.e,this.queryParams)}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cms-list-layout"},[s("cms-prompt",[s("li",[e._v("显示所有的平台活动信息")])]),e._v(" "),s("section",{staticClass:"cms-list-query"},[s("div",{staticClass:"query-group"},[s("label",[e._v("活动名称")]),e._v(" "),s("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),e._v(" "),s("div",{staticClass:"query-group"},[s("label",[e._v("活动时间")]),e._v(" "),s("cms-picker",{on:{change:e.setTimer},model:{value:e.queryParams.timer,callback:function(t){e.$set(e.queryParams,"timer",t)},expression:"queryParams.timer"}})],1),e._v(" "),s("div",{staticClass:"query-group"},[s("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1)]),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems,"row-click":e.checkRows}},[s("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),s("el-table-column",{attrs:{prop:"promote.name",label:"活动名称","min-width":"220"}}),e._v(" "),s("el-table-column",{attrs:{prop:"promote.discountAmount",label:"报名时间","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[e._v("\n      "+e._s(e.$moment(t.row.promote.rule.signBeginTime,"YYYY-MM-DD"))+" 至 "+e._s(e.$moment(t.row.promote.rule.signEndTime,"YYYY-MM-DD"))+"\n      ")])}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"discountAmount",label:"活动时间","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[e._v("\n      "+e._s(e.$moment(t.row.promote.promoteBeginTime,"YYYY-MM-DD"))+" 至 "+e._s(e.$moment(t.row.promote.promoteEndTime,"YYYY-MM-DD"))+"\n      ")])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"是否已报名","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[t.row.hasSign?s("span",{staticClass:"success"},[e._v("已报名")]):s("span",[e._v("未报名")])])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"报名状态","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[-1==t.row.signStatus?s("span",{staticClass:"success"},[e._v("未申请")]):e._e(),e._v(" "),0==t.row.signStatus?s("span",{staticClass:"success"},[e._v("报名待审核")]):e._e(),e._v(" "),1==t.row.signStatus?s("span",{staticClass:"success"},[e._v("已审核待支付")]):e._e(),e._v(" "),2==t.row.signStatus?s("span",{staticClass:"success"},[e._v("已支付报名成功")]):e._e(),e._v(" "),3==t.row.signStatus?s("span",{staticClass:"success"},[e._v("失败")]):e._e(),e._v(" "),4==t.row.signStatus?s("span",{staticClass:"success"},[e._v("撤回")]):e._e()])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作选项",width:"380",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[s("el-button",{attrs:{type:"text"},on:{click:function(s){e.$routerLink("/platformActivity/edit","view",{id:t.row.promote.id})}}},[e._v("查看活动详情")]),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(s){e.$routerLink("/platformActivity/edit","save",{id:t.row.promote.id})}}},[e._v("报名")]),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(s){e.setPayOrder(t.row.promote.id)}}},[e._v("支付")])],1)}}])})],1),e._v(" "),s("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}}),e._v(" "),s("pay-box",{ref:"pay",attrs:{orderNum:e.orderNum,payScene:"storeApply"}})],1)},staticRenderFns:[]};var c=s("C7Lr")(l,u,!1,function(e){s("lG8Z")},null,null);t.default=c.exports},lG8Z:function(e,t){}});
//# sourceMappingURL=64.0e2094cd454fa9d7d1dc.js.map