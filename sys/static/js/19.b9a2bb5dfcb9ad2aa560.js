webpackJsonp([19],{"0Oj5":function(t,a){},E2Bh:function(t,a){},LbSU:function(t,a){},eYXo:function(t,a){},tk2z:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("M3BV"),i=e("aA9S"),n=e.n(i),r=e("UAso"),l=e("2+eX"),o={mixins:[r.a],data:function(){return{value:"订单趋势",el:"storeLineChart",newStatistics:{addstoreNum:0,selfStoreNum:0,selfStorePercent:0,storeNum:0,thirdStoreNum:0,thirdStorePercent:0},optionsData:{tooltip:{trigger:"axis"},legend:{data:["累积总数","新增数","活跃数","成交会员数"],left:30,top:20},grid:{top:30,left:0,right:30,bottom:30,containLabel:!0},xAxis:{type:"category",boundaryGap:!0,splitLine:{show:!1,lineStyle:{type:"dashed"}},data:["00-00","0-0","0-0"]},yAxis:[{axisLine:{show:!1},splitLine:{lineStyle:{type:"dotted"}},type:"value"}],series:{name:"订单数",type:"line",smooth:!0,areaStyle:{},data:[]}}}},methods:{changeData:function(t){"订单趋势"===t?(this.optionsData.series.name="订单数",this.optionsData.series.data=this.newStatistics.yAxisOrder):(this.optionsData.series.name="销售额",this.optionsData.series.data=this.newStatistics.yAxisSell),this.chart.setOption(this.optionsData)},getData:function(){var t=this;this.loading=!0,Object(l.z)(this.queryParams).then(function(a){200===a.code&&(t.newStatistics=n()({},a.data),t.optionsData.xAxis.data=a.data.xAxis,t.optionsData.series.data=a.data.yAxisOrder,t.chart.setOption(t.optionsData))}).finally(function(){t.loading=!1})}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"stat__header"},[e("div",{staticClass:"fl"},[t._v("店铺概况\n      "),e("el-tooltip",{attrs:{placement:"right",effect:"light"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("人数都按照相同用户多次记一次的规则进行统计\n          "),e("br"),t._v("售后申请的数量及金额不影响下单、付款的笔数及金额\n          "),e("br")]),t._v(" "),e("i",{staticClass:"el-icon-question"})])],1)]),t._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"stat__body"},[e("el-col",{staticClass:"stat__inner",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[e("el-row",{staticClass:"stat-card__list",attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("div",{staticClass:"stat-card"},[e("p",[t._v("入驻店铺总数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.newStatistics.storeNum}})],1)]),t._v(" "),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"stat-card"},[e("p",[t._v("新增入驻数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.newStatistics.addstoreNum}})],1)]),t._v(" "),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"stat-card"},[e("p",[t._v("第三方店铺数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.newStatistics.thirdStoreNum}}),t._v(" "),e("span",{staticClass:"up card-prop"},[t._v("(占比"+t._s(t.newStatistics.thirdStorePercent)+"%)")])],1)]),t._v(" "),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"stat-card"},[e("p",[t._v("自营店铺数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.newStatistics.selfStoreNum}}),t._v(" "),e("span",{staticClass:"up card-prop"},[t._v("(占比"+t._s(t.newStatistics.selfStorePercent)+"%)")])],1)])],1),t._v(" "),e("div",{staticStyle:{overflow:"hidden"}},[e("el-radio-group",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{change:t.changeData},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[e("el-radio-button",{attrs:{label:"订单趋势"}}),t._v(" "),e("el-radio-button",{attrs:{label:"销量趋势"}})],1)],1),t._v(" "),e("div",{staticClass:"line-chart",attrs:{id:"storeLineChart"}})],1)],1)],1)},staticRenderFns:[]};var d=e("C7Lr")(o,c,!1,function(t){e("0Oj5")},"data-v-57b76583",null).exports,u=e("5HJ5"),v=e("Zz1P"),_={mixins:[r.a,u.a],data:function(){return{newStatistics:{sumMemberCount:0,sumNewMember:0,sumRechargeMember:0},queryParams:{page:1,size:10,type:1,startTime:v().subtract(7,"days").format("YYYY-MM-DD"),endTime:v().subtract(1,"days").format("YYYY-MM-DD")}}},methods:{query:function(t){this.getData()},getData:function(){this.getTableData(l.y,this.queryParams)}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"stat__header"},[e("div",{staticClass:"fl",staticStyle:{"line-height":"28px"}},[t._v("店铺交易数据")]),t._v(" "),e("div",{staticClass:"fr"},[t._v("维度:\n      "),e("el-select",{on:{change:t.query},model:{value:t.queryParams.type,callback:function(a){t.$set(t.queryParams,"type",a)},expression:"queryParams.type"}},[e("el-option",{attrs:{label:"店铺",value:1}}),t._v(" "),e("el-option",{attrs:{label:"时间",value:2}})],1)],1)]),t._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"stat__body"},[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"table-box"},[e("el-table",{ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{label:"序号","show-overflow-tooltip":"","class-name":"text-overflow",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(t._s((t.queryParams.page-1)*t.queryParams.size+(a.$index+1)))]}}])}),t._v(" "),2===t.queryParams.type?e("el-table-column",{attrs:{label:"日期"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(t._s(t.$moment(a.row.statisticsDate,"YYYY-MM-DD")))]}}])}):t._e(),t._v(" "),1===t.queryParams.type?e("el-table-column",{attrs:{label:"店铺名称","show-overflow-tooltip":"","class-name":"text-overflow"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n             "+t._s(a.row.storename)+"\n            ")]}}])}):t._e(),t._v(" "),2==t.queryParams.type?e("el-table-column",{attrs:{label:"交易店铺数量","show-overflow-tooltip":"","class-name":"text-overflow"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n             "+t._s(t.$cms.float(a.row.storeNum,0))+"\n            ")]}}])}):t._e(),t._v(" "),e("el-table-column",{attrs:{label:"订单数","show-overflow-tooltip":"","class-name":"text-overflow"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(1==t.queryParams.type?t.$cms.float(a.row.storeOrderNum,0):t.$cms.float(a.row.dayOrderNum,0))+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"销售金额"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              ¥"+t._s(1==t.queryParams.type?t.$cms.float(a.row.storeSellMoney):t.$cms.float(a.row.daySellMoney))+"\n            ")]}}])})],1),t._v(" "),e("cms-pagination",{attrs:{total:t.total},on:{change:t.getPage}})],1)])],1)],1)},staticRenderFns:[]};var h=e("C7Lr")(_,m,!1,function(t){e("LbSU")},"data-v-74f0f546",null).exports,p={mixins:[r.a],data:function(){return{value:"订单趋势",el:"storeCategoryChart",optionsData:{grid:{top:0,left:0,right:0,bottom:0,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",boundaryGap:[0,.1]},yAxis:{splitLine:{show:!1},type:"category",data:[]},series:{type:"bar",barMaxWidth:25,barCategoryGap:"10%",data:[9e3,6e3,2e3,1e3,200,100]}}}},methods:{getData:function(){var t=this;this.loading=!0,Object(l.x)(this.queryParams).then(function(a){200===a.code&&(t.optionsData.yAxis.data=a.data.yAxis,t.optionsData.series.data=a.data.xAxis,t.chart.setOption(t.optionsData))}).finally(function(){t.loading=!1})}}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[this._m(0),this._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"stat__body"},[a("el-col",{staticClass:"stat__inner",attrs:{span:24}},[a("div",{staticClass:"line-chart",attrs:{id:"storeCategoryChart"}})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stat__header"},[a("div",{staticClass:"fl"},[this._v("行业店铺分布 ")])])}]};var y=e("C7Lr")(p,f,!1,function(t){e("eYXo")},"data-v-86affbf4",null).exports,g=e("Pg0u"),b=e.n(g),w=e("EBZi"),C={mixins:[r.a],data:function(){return{el:"areaChart",optionsData:{tooltip:{trigger:"item",formatter:"{b}<br/>{c}人"},visualMap:{realtime:!1,calculable:!0,left:20,inRange:{color:["lightskyblue","yellow","orangered"]}},series:[{name:"店铺区域分布",type:"map",mapType:"china",itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:[]}]},tableData:[]}},methods:{getData:function(){var t=this;this.loading=!0,Object(l.w)(this.queryParams).then(function(a){200===a.code&&(t.optionsData.series[0].data=a.data.data,t.tableData=a.data.area,t.chart.setOption(t.optionsData))}).finally(function(){t.loading=!1})},initChart:function(){var t=this;this.$nextTick(function(){t.el&&""!==t.el&&(b.a.registerMap("china",w),t.chart=b.a.init(document.getElementById(t.el),"walden"))})}}},x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"stat__body"},[e("el-col",{staticClass:"stat__inner",attrs:{span:14}},[e("div",{staticClass:"line-chart",attrs:{id:"areaChart"}})]),t._v(" "),e("el-col",{staticClass:"border-left",attrs:{span:10}},[e("div",{staticClass:"table-box"},[e("table",{staticClass:"stat-inner__table mt-20"},[e("tr",[e("th",{staticStyle:{width:"10%"}},[t._v("序号")]),t._v(" "),e("th",{staticStyle:{width:"30%"}},[t._v("地区")]),t._v(" "),e("th",{staticStyle:{width:"30%"}},[t._v("店铺数")]),t._v(" "),e("th",{staticStyle:{width:"30%"}},[t._v("占比")])])]),t._v(" "),e("div",{staticClass:"table-box__inner"},[e("table",{staticClass:"stat-inner__table "},t._l(t.tableData,function(a,s){return e("tr",{key:s},[e("td",{staticStyle:{width:"10%"}},[t._v(t._s(s+1))]),t._v(" "),e("td",{staticStyle:{width:"30%"}},[t._v(t._s(a.areaName))]),t._v(" "),e("td",{staticStyle:{width:"30%"}},[t._v(t._s(a.storeNum))]),t._v(" "),e("td",{staticStyle:{width:"30%"}},[t._v(t._s(a.storePrecent)+"%")])])}),0)])])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stat__header"},[a("div",{staticClass:"fl"},[this._v("店铺地域分析")])])}]};var S={components:{general:d,trading:h,category:y,storeArea:e("C7Lr")(C,x,!1,function(t){e("E2Bh")},"data-v-3064d471",null).exports,timer:s.a},data:function(){return{value:["",""]}},methods:{getTime:function(t){this.value=t}}},D={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"stat__layout"},[e("timer",{on:{change:t.getTime}}),t._v(" "),e("general",{staticClass:"mt-20",attrs:{"time-data":t.value}}),t._v(" "),e("trading",{staticClass:"mt-20",attrs:{"time-data":t.value}}),t._v(" "),e("category",{staticClass:"mt-20",attrs:{"time-data":t.value}}),t._v(" "),e("store-area",{staticClass:"mt-20",attrs:{"time-data":t.value}})],1)},staticRenderFns:[]};var P=e("C7Lr")(S,D,!1,function(t){e("yXc+")},null,null);a.default=P.exports},"yXc+":function(t,a){}});
//# sourceMappingURL=19.b9a2bb5dfcb9ad2aa560.js.map