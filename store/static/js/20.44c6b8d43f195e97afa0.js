webpackJsonp([20],{Wx6x:function(e,t){},fLep:function(e,t){},tDP2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("aA9S"),a=r.n(s),o=r("EttR"),l=r("5HJ5"),n=r("lcoF"),i=r("x1ym"),m={page:1,size:10,settlementCycleId:"",storeId:"",orderCode:"",outTradeNum:""},u={settlementError:{settlementId:"",businessCode:"",businessType:1,errorType:1,reason:"",turnoverAmount:"",integralDeductionAmount:"",redenvelopeOffset:"",platformCouponOffset:""}},c={mixins:[l.a,n.a],data:function(){return{formData:{orderPayAmount:"",useIntegral:"",useRedPacket:"",platformDiscount:""},queryParams:a()({},m),formPrams:a()({},u),loading:!1,isEdit:!1,businessNumber:this.$route.query.businessNumber,storeName:this.$route.query.storeName,exceptionHand:!1,rules:{"settlementError.turnoverAmount":[i.a.required(),i.a.decimal()],"settlementError.integralDeductionAmount":[i.a.required(),i.a.decimal()],"settlementError.redenvelopeOffset":[i.a.required(),i.a.decimal()],"settlementError.platformCouponOffset":[i.a.required(),i.a.decimal()]},select01:1,select02:1,select03:1,select04:1}},methods:{exportData:function(){delete this.queryParams.page,delete this.queryParams.size,Object(o.c)(this.queryParams).then(function(e){var t=new Blob([e]),r=document.createElement("a");r.download="订单明细.xls",r.href=window.URL.createObjectURL(t),r.click()})},changeData:function(){this.getTableData(o.d,this.queryParams)},done:function(){this.exceptionHand=!1,this.formPrams=a()({},u),this.rest(),this.select01=1,this.select02=1,this.select03=1,this.select04=1},openException:function(e){this.formPrams.settlementError.businessCode=e.orderCode,this.formPrams.settlementError.settlementId=this.$route.query.sid,this.formData=e,this.exceptionHand=!0},subException:function(){var e=this;this.$refs.form.validate(function(t,r){t&&(2===e.select01&&(e.formPrams.settlementError.turnoverAmount="-"+e.formPrams.settlementError.turnoverAmount),2===e.select02&&(e.formPrams.settlementError.integralDeductionAmount="-"+e.formPrams.settlementError.integralDeductionAmount),2===e.select03&&(e.formPrams.settlementError.redenvelopeOffset="-"+e.formPrams.settlementError.redenvelopeOffset),2===e.select04&&(e.formPrams.settlementError.platformCouponOffset="-"+e.formPrams.settlementError.platformCouponOffset),Object(o.n)(e.formPrams).then(function(t){200===t.code?(e.done(),e.getTableData(o.d,e.queryParams),e.$successMessage("添加成功！")):(e.done(),e.$errorMessage(t.message))}))})}},created:function(){this.queryParams.settlementCycleId=this.$route.query.id,this.queryParams.storeId=this.$route.query.storeId,this.$route.query.isEdit&&(this.isEdit=this.$route.query.isEdit),this.getTableData(o.d,this.queryParams)}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cms-list-layout",staticStyle:{"padding-top":"6px"}},[s("section",{staticClass:"cms-list-query"},[s("div",{staticClass:"query-group"},[s("label",[e._v("订单号")]),e._v(" "),s("el-input",{on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.orderCode,callback:function(t){e.$set(e.queryParams,"orderCode",t)},expression:"queryParams.orderCode"}})],1),e._v(" "),s("div",{staticClass:"query-group"},[s("label",[e._v("交易流水号")]),e._v(" "),s("el-input",{on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.outTradeNum,callback:function(t){e.$set(e.queryParams,"outTradeNum",t)},expression:"queryParams.outTradeNum"}})],1),e._v(" "),s("div",{staticClass:"query-group"},[s("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),s("div",{staticClass:"query-group"},[s("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.exportData}},[s("i",{staticClass:"iconfont icon-Excel"}),e._v(" 导出\n      ")])],1)]),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems,"row-click":e.checkRows}},[s("el-table-column",{attrs:{type:"expand",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"right","label-width":"160px",inline:""}},[s("el-form-item",{attrs:{label:"结算批次号："}},[s("span",[e._v(e._s(e.businessNumber))])]),e._v(" "),s("el-form-item",{attrs:{label:"商家："}},[s("span",[e._v(e._s(e.storeName))])]),e._v(" "),s("el-form-item",{attrs:{label:"主营类目："}},[s("span",[e._v(e._s(t.row.store.productCategory.cateName))])]),e._v(" "),s("el-form-item",{attrs:{label:"订单号："}},[s("span",[e._v(e._s(t.row.orderCode))])]),e._v(" "),s("el-form-item",{attrs:{label:"交易流水号："}},[s("span",[e._v(e._s(t.row.outTradeNum))])]),e._v(" "),s("el-form-item",{attrs:{label:"支付方式："}},[1==t.row.payMode?s("span",[e._v("支付宝")]):e._e(),e._v(" "),2==t.row.payMode?s("span",[e._v("微信")]):e._e(),e._v(" "),3==t.row.payMode?s("span",[e._v("银联")]):e._e(),e._v(" "),4==t.row.payMode?s("span",[e._v("余额")]):e._e()]),e._v(" "),s("el-form-item",{attrs:{label:"下单时间："}},[s("span",[e._v(e._s(e.$moment(t.row.orderTime,"YYYY-MM-DD HH:mm:ss")))])]),e._v(" "),s("el-form-item",{attrs:{label:"交易成功时间："}},[s("span",[e._v(e._s(e.$moment(t.row.finishTime,"YYYY-MM-DD HH:mm:ss")))])]),e._v(" "),s("el-form-item",{attrs:{label:"商品数量："}},[s("span",[e._v(e._s(t.row.productCount))])]),e._v(" "),s("el-form-item",{attrs:{label:"成交金额："}},[s("span",{staticClass:"green"},[e._v("￥ "+e._s(e.$cms.float(t.row.orderPayAmount)))])]),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("span")]),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("span")]),e._v(" "),s("el-form-item",{attrs:{label:"积分抵扣（金额/数量）："}},[s("span",{staticClass:"green"},[e._v("￥"+e._s(e.$cms.float(t.row.useIntegral))+"/"+e._s(t.row.integralDiscount))])]),e._v(" "),s("el-form-item",{attrs:{label:"红包抵扣（金额/数量）："}},[s("span",{staticClass:"green"},[e._v("￥"+e._s(e.$cms.float(t.row.useRedPacket))+"/"+e._s(t.row.redPacketDiscount))])]),e._v(" "),s("el-form-item",{attrs:{label:"平台优惠券抵扣："}},[s("span",{staticClass:"green"},[e._v("￥ "+e._s(e.$cms.float(t.row.platformDiscount)))])])],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"",label:"结算批次号",width:"160"}},[s("div",{},[s("span",[e._v(e._s(e.businessNumber))])])]),e._v(" "),s("el-table-column",{attrs:{prop:"",label:"商家","min-width":"150",align:"center"}},[s("div",{},[s("span",[e._v(e._s(e.storeName))])])]),e._v(" "),s("el-table-column",{attrs:{prop:"orderCode",label:"订单号","min-width":"170",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"outTradeNum",label:"交易流水号","min-width":"210",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"orderPayAmount",label:"成交金额","min-width":"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[s("span",[e._v("￥ "+e._s(e.$cms.float(t.row.orderPayAmount)))])])}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"finishTime",label:"交易成功时间","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[s("span",[e._v(e._s(e.$moment(t.row.finishTime,"YYYY-MM-DD HH:mm:ss")))])])}}])}),e._v(" "),e.isEdit?s("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[s("cms-button",{attrs:{slot:"reference",type:"info",size:"small"},on:{click:function(r){e.openException(t.row)}},slot:"reference"},[e._v("异常处理")])],1)}}])}):e._e()],1),e._v(" "),s("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}}),e._v(" "),s("el-dialog",{attrs:{title:"异常数据添加",visible:e.exceptionHand,width:"700px","before-close":e.done},on:{"update:visible":function(t){e.exceptionHand=t}}},[s("div",{staticClass:"add-exception"},[s("div",{ref:"prompt",staticClass:"cms-prompt",attrs:{id:"prompt"}},[s("div",{staticClass:"cms-prompt-icon"},[s("img",{attrs:{src:r("esiG"),alt:""}}),e._v(" "),s("span",[e._v("温馨提示:")])]),e._v(" "),s("ul",{staticClass:"cms-prompt-info"},[s("li",[e._v("避免后期争议，平台填写的异常数据须由平台和商家确认")])])]),e._v(" "),s("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formPrams,"label-width":"160px"}},[s("el-form-item",{attrs:{label:"订单类型："}},[s("span",[e._v("订单")])]),e._v(" "),s("el-form-item",{attrs:{label:"订单："}},[s("span",[e._v(e._s(e.formPrams.settlementError.businessCode))])]),e._v(" "),s("el-form-item",{staticClass:"default",attrs:{label:"异常类型："}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formPrams.settlementError.businessType,callback:function(t){e.$set(e.formPrams.settlementError,"businessType",t)},expression:"formPrams.settlementError.businessType"}},[s("el-option",{attrs:{label:"金额异常",value:1}}),e._v(" "),s("el-option",{attrs:{label:"订单未结算",value:2}}),e._v(" "),s("el-option",{attrs:{label:"订单重复结算",value:3}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"原因：",prop:"settlementError.reason"}},[s("el-input",{attrs:{type:"textarea",rows:"4",maxlength:"200",resize:"none",placeholder:"请填写200字以内的修改说明"},model:{value:e.formPrams.settlementError.reason,callback:function(t){e.$set(e.formPrams.settlementError,"reason",t)},expression:"formPrams.settlementError.reason"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"成交金额：",prop:"settlementError.turnoverAmount"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.orderPayAmount)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.orderPayAmount},model:{value:e.formPrams.settlementError.turnoverAmount,callback:function(t){e.$set(e.formPrams.settlementError,"turnoverAmount",t)},expression:"formPrams.settlementError.turnoverAmount"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select01,callback:function(t){e.select01=t},expression:"select01"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"积分：",prop:"settlementError.integralDeductionAmount"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.useIntegral)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.useIntegral},model:{value:e.formPrams.settlementError.integralDeductionAmount,callback:function(t){e.$set(e.formPrams.settlementError,"integralDeductionAmount",t)},expression:"formPrams.settlementError.integralDeductionAmount"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select02,callback:function(t){e.select02=t},expression:"select02"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"红包：",prop:"settlementError.redenvelopeOffset"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.useRedPacket)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.useRedPacket},model:{value:e.formPrams.settlementError.redenvelopeOffset,callback:function(t){e.$set(e.formPrams.settlementError,"redenvelopeOffset",t)},expression:"formPrams.settlementError.redenvelopeOffset"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select03,callback:function(t){e.select03=t},expression:"select03"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"平台优惠：",prop:"settlementError.platformCouponOffset"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.platformDiscount)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.platformDiscount},model:{value:e.formPrams.settlementError.platformCouponOffset,callback:function(t){e.$set(e.formPrams.settlementError,"platformCouponOffset",t)},expression:"formPrams.settlementError.platformCouponOffset"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select04,callback:function(t){e.select04=t},expression:"select04"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1)],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"mini"},on:{click:e.done}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.subException}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var p=r("C7Lr")(c,d,!1,function(e){r("wB7K")},"data-v-68d6ddba",null).exports,f={page:1,size:10,settlementCycleId:"",refundNumber:"",orderCode:"",storeId:"",refundType:""},v={settlementError:{settlementId:"",businessCode:"",businessType:2,errorType:1,reason:"",turnoverAmount:"",integralDeductionAmount:"",redenvelopeOffset:"",platformCouponOffset:""}},_={mixins:[l.a,n.a],data:function(){return{formData:{refundIntegralAmount:"",refundAmount:"",refundRedPacketAmount:"",refundPlatformDiscount:""},queryParams:a()({},f),formPrams:a()({},v),loading:!1,isEdit:!1,businessNumber:this.$route.query.businessNumber,storeName:this.$route.query.storeName,exceptionHand:!1,rules:{"settlementError.turnoverAmount":[i.a.required(),i.a.decimal()],"settlementError.integralDeductionAmount":[i.a.required(),i.a.decimal()],"settlementError.redenvelopeOffset":[i.a.required(),i.a.decimal()],"settlementError.platformCouponOffset":[i.a.required(),i.a.decimal()]},select01:1,select02:1,select03:1,select04:1}},methods:{exportData:function(){delete this.queryParams.page,delete this.queryParams.size,Object(o.f)(this.queryParams).then(function(e){var t=new Blob([e]),r=document.createElement("a");r.download="售后单明细.xls",r.href=window.URL.createObjectURL(t),r.click()})},changeData:function(){this.getTableData(o.e,this.queryParams)},done:function(){this.exceptionHand=!1,this.formPrams=a()({},v),this.rest(),this.select01=1,this.select02=1,this.select03=1,this.select04=1},openException:function(e){this.formPrams.settlementError.businessCode=e.orderRefundNum,this.formPrams.settlementError.settlementId=this.$route.query.sid,this.formData=e,this.exceptionHand=!0},subException:function(){var e=this;this.$refs.form.validate(function(t,r){t&&(2===e.select01&&(e.formPrams.settlementError.turnoverAmount="-"+e.formPrams.settlementError.turnoverAmount),2===e.select02&&(e.formPrams.settlementError.integralDeductionAmount="-"+e.formPrams.settlementError.integralDeductionAmount),2===e.select03&&(e.formPrams.settlementError.redenvelopeOffset="-"+e.formPrams.settlementError.redenvelopeOffset),2===e.select04&&(e.formPrams.settlementError.platformCouponOffset="-"+e.formPrams.settlementError.platformCouponOffset),Object(o.n)(e.formPrams).then(function(t){200===t.code?(e.done(),e.getTableData(o.e,e.queryParams),e.$successMessage("添加成功！")):(e.done(),e.$errorMessage(t.message))}))})}},created:function(){this.queryParams.settlementCycleId=this.$route.query.id,this.queryParams.storeId=this.$route.query.storeId,this.$route.query.isEdit&&(this.isEdit=this.$route.query.isEdit),this.getTableData(o.e,this.queryParams)}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cms-list-layout",staticStyle:{"padding-top":"6px"}},[s("section",{staticClass:"cms-list-query"},[s("div",{staticClass:"query-group"},[s("label",[e._v("售后服务单号")]),e._v(" "),s("el-input",{on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.refundNumber,callback:function(t){e.$set(e.queryParams,"refundNumber",t)},expression:"queryParams.refundNumber"}})],1),e._v(" "),s("div",{staticClass:"query-group"},[s("label",[e._v("订单号")]),e._v(" "),s("el-input",{on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.queryParams.orderCode,callback:function(t){e.$set(e.queryParams,"orderCode",t)},expression:"queryParams.orderCode"}})],1),e._v(" "),s("div",{staticClass:"query-group"},[s("label",[e._v("售后类型")]),e._v(" "),s("el-select",{attrs:{placeholder:"请选择"},on:{change:e.query},model:{value:e.queryParams.refundType,callback:function(t){e.$set(e.queryParams,"refundType",t)},expression:"queryParams.refundType"}},[s("el-option",{attrs:{label:"仅退款",value:1}}),e._v(" "),s("el-option",{attrs:{label:"退款退货",value:2}}),e._v(" "),s("el-option",{attrs:{label:"换货",value:3}})],1)],1),e._v(" "),s("div",{staticClass:"query-group"},[s("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),s("div",{staticClass:"query-group"},[s("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.exportData}},[s("i",{staticClass:"iconfont icon-Excel"}),e._v(" 导出\n      ")])],1)]),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems,"row-click":e.checkRows}},[s("el-table-column",{attrs:{type:"expand",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"right","label-width":"160px",inline:""}},[s("el-form-item",{attrs:{label:"结算批次号："}},[s("span",[e._v(e._s(e.businessNumber))])]),e._v(" "),s("el-form-item",{attrs:{label:"商家："}},[s("span",[e._v(e._s(e.storeName))])]),e._v(" "),s("el-form-item",{attrs:{label:"主营类目："}},[s("span",[e._v(e._s(t.row.store.productCategory.cateName))])]),e._v(" "),s("el-form-item",{attrs:{label:"售后服务单号："}},[s("span",[e._v(e._s(t.row.orderRefundNum))])]),e._v(" "),s("el-form-item",{attrs:{label:"订单号："}},[s("span",[e._v(e._s(t.row.order.orderCode))])]),e._v(" "),s("el-form-item",{attrs:{label:"售后类型："}},[1==t.row.refundType?s("span",[e._v("仅退款")]):e._e(),e._v(" "),2==t.row.refundType?s("span",[e._v("退款退货")]):e._e(),e._v(" "),3==t.row.refundType?s("span",[e._v("换货")]):e._e()]),e._v(" "),s("el-form-item",{attrs:{label:"申请时间："}},[s("span",[e._v(e._s(e.$moment(t.row.applyTime,"YYYY-MM-DD HH:mm:ss")))])]),e._v(" "),s("el-form-item",{attrs:{label:"完成时间："}},[s("span",[e._v(e._s(e.$moment(t.row.finishTime,"YYYY-MM-DD HH:mm:ss")))])]),e._v(" "),s("el-form-item",{attrs:{label:"商品数量："}},[s("span",[e._v(e._s(t.row.productRefundCount))])]),e._v(" "),s("el-form-item",{attrs:{label:"退款金额："}},[s("span",{staticClass:"red"},[e._v("- ￥ "+e._s(e.$cms.float(t.row.refundAmount)))])]),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("span")]),e._v(" "),s("el-form-item",{attrs:{label:""}},[s("span")]),e._v(" "),s("el-form-item",{attrs:{label:"积分返还（金额/数量）："}},[s("span",{staticClass:"red"},[e._v("- ￥"+e._s(e.$cms.float(t.row.refundIntegralAmount))+"/"+e._s(t.row.refundIntegral>0?t.row.refundIntegral:0))])]),e._v(" "),s("el-form-item",{attrs:{label:"红包返还（金额/数量）："}},[s("span",{staticClass:"red"},[e._v("- ￥"+e._s(e.$cms.float(t.row.refundRedPacketAmount))+"/"+e._s(t.row.refundRedPacket>0?t.row.refundRedPacket:0))])]),e._v(" "),s("el-form-item",{attrs:{label:"平台优惠券返还："}},[s("span",{staticClass:"red"},[e._v("- ￥ "+e._s(e.$cms.float(t.row.refundPlatformDiscount)))])])],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"结算批次号",width:"160"}},[s("div",{},[s("span",[e._v(e._s(e.businessNumber))])])]),e._v(" "),s("el-table-column",{attrs:{label:"商家","min-width":"150",align:"center"}},[s("div",{},[s("span",[e._v(e._s(e.storeName))])])]),e._v(" "),s("el-table-column",{attrs:{prop:"orderRefundNum",label:"售后服务单号","min-width":"170",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"order.orderCode",label:"订单号","min-width":"170",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"refundAmount",label:"退款金额","min-width":"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[s("span",[e._v("￥ "+e._s(e.$cms.float(t.row.refundAmount)))])])}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"finishTime",label:"完成时间","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[s("span",[e._v(e._s(e.$moment(t.row.finishTime,"YYYY-MM-DD HH:mm:ss")))])])}}])}),e._v(" "),e.isEdit?s("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{},[s("cms-button",{attrs:{slot:"reference",type:"info",size:"small"},on:{click:function(r){e.openException(t.row)}},slot:"reference"},[e._v("异常处理")])],1)}}])}):e._e()],1),e._v(" "),s("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}}),e._v(" "),s("el-dialog",{attrs:{title:"异常数据添加",visible:e.exceptionHand,width:"700px","before-close":e.done},on:{"update:visible":function(t){e.exceptionHand=t}}},[s("div",{staticClass:"add-exception"},[s("div",{ref:"prompt",staticClass:"cms-prompt",attrs:{id:"prompt"}},[s("div",{staticClass:"cms-prompt-icon"},[s("img",{attrs:{src:r("esiG"),alt:""}}),e._v(" "),s("span",[e._v("温馨提示:")])]),e._v(" "),s("ul",{staticClass:"cms-prompt-info"},[s("li",[e._v("避免后期争议，平台填写的异常数据须由平台和商家确认")])])]),e._v(" "),s("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formPrams,"label-width":"160px"}},[s("el-form-item",{attrs:{label:"订单类型："}},[s("span",[e._v("售后服务单")])]),e._v(" "),s("el-form-item",{attrs:{label:"订单："}},[s("span",[e._v(e._s(e.formPrams.settlementError.businessCode))])]),e._v(" "),s("el-form-item",{staticClass:"default",attrs:{label:"异常类型："}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formPrams.settlementError.businessType,callback:function(t){e.$set(e.formPrams.settlementError,"businessType",t)},expression:"formPrams.settlementError.businessType"}},[s("el-option",{attrs:{label:"金额异常",value:1}}),e._v(" "),s("el-option",{attrs:{label:"订单未结算",value:2}}),e._v(" "),s("el-option",{attrs:{label:"订单重复结算",value:3}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"原因：",prop:"settlementError.reason"}},[s("el-input",{attrs:{type:"textarea",rows:"4",maxlength:"200",resize:"none"},model:{value:e.formPrams.settlementError.reason,callback:function(t){e.$set(e.formPrams.settlementError,"reason",t)},expression:"formPrams.settlementError.reason"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"退款金额：",prop:"settlementError.turnoverAmount"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.refundAmount)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.refundAmount},model:{value:e.formPrams.settlementError.turnoverAmount,callback:function(t){e.$set(e.formPrams.settlementError,"turnoverAmount",t)},expression:"formPrams.settlementError.turnoverAmount"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select01,callback:function(t){e.select01=t},expression:"select01"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"积分：",prop:"settlementError.integralDeductionAmount"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.refundIntegralAmount)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.refundIntegralAmount},model:{value:e.formPrams.settlementError.integralDeductionAmount,callback:function(t){e.$set(e.formPrams.settlementError,"integralDeductionAmount",t)},expression:"formPrams.settlementError.integralDeductionAmount"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select02,callback:function(t){e.select02=t},expression:"select02"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"红包：",prop:"settlementError.redenvelopeOffset"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.refundRedPacketAmount)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.refundRedPacketAmount},model:{value:e.formPrams.settlementError.redenvelopeOffset,callback:function(t){e.$set(e.formPrams.settlementError,"redenvelopeOffset",t)},expression:"formPrams.settlementError.redenvelopeOffset"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select03,callback:function(t){e.select03=t},expression:"select03"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"平台优惠：",prop:"settlementError.platformCouponOffset"}},[s("span",{staticClass:"add-exception__price"},[e._v("￥ "+e._s(e.$cms.float(e.formData.refundPlatformDiscount)))]),e._v(" "),s("el-input",{attrs:{maxlength:"6",placeholder:"0.00",max:e.formData.refundPlatformDiscount},model:{value:e.formPrams.settlementError.platformCouponOffset,callback:function(t){e.$set(e.formPrams.settlementError,"platformCouponOffset",t)},expression:"formPrams.settlementError.platformCouponOffset"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select04,callback:function(t){e.select04=t},expression:"select04"}},[s("el-option",{attrs:{label:"+",value:1}}),e._v(" "),s("el-option",{attrs:{label:"-",value:2}})],1)],1)],1)],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"mini"},on:{click:e.done}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.subException}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var h={name:"statisticsView",components:{sale:p,after:r("C7Lr")(_,b,!1,function(e){r("Wx6x")},"data-v-7b5f860a",null).exports},data:function(){return{activeName:"sale"}},methods:{eventChange:function(e){"after"===e&&this.$refs.after&&this.$refs.after.changeData(),"sale"===e&&this.$refs.sale&&this.$refs.sale.changeData()}}},y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cms-list-layout"},[r("cms-breadcrumb",{attrs:{to:"/statisticsSheet/list",type:"list"}},[r("li",[e._v(e._s(e.$route.name))])]),e._v(" "),r("cms-prompt",{attrs:{collapse:"true"}},[r("li",[e._v("结算单构成含交易成功且已过售后处理时效订单（售后时效详见商城设置）")]),e._v(" "),r("li",[e._v("结算单构成含已完成的退款或退款退货的售后服务单")])]),e._v(" "),r("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"销售订单",name:"sale"}},[r("sale",{ref:"sale",on:{change:e.eventChange}})],1),e._v(" "),r("el-tab-pane",{attrs:{label:"售后服务单",name:"after",lazy:""}},[r("after",{ref:"after",on:{change:e.eventChange}})],1)],1)],1)},staticRenderFns:[]};var g=r("C7Lr")(h,y,!1,function(e){r("fLep")},null,null);t.default=g.exports},wB7K:function(e,t){}});
//# sourceMappingURL=20.44c6b8d43f195e97afa0.js.map