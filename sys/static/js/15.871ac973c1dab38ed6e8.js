webpackJsonp([15],{CqfG:function(t,a){},IUsE:function(t,a){},IpV0:function(t,a){},PD80:function(t,a){},ezoB:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("M3BV"),i=e("UAso"),n=e("2+eX"),r={mixins:[i.a],data:function(){return{el:"tradingChart",optionsData:{tooltip:{trigger:"axis"},legend:{data:["付款金额","付款人数","付款件数","下单转化(%)","付款转化(%)","成交转化率(%)"],left:"center",top:0},grid:{top:40,left:0,right:0,bottom:0,containLabel:!0},xAxis:{type:"category",boundaryGap:!0,splitLine:{show:!1},data:["00-00","0-0","0-0"]},yAxis:[{axisLine:{show:!1},splitLine:{show:!1,lineStyle:{type:"dotted"}},type:"value"},{axisLine:{show:!1},splitLine:{lineStyle:{type:"dotted"}},type:"value",axisLabel:{formatter:function(t){var a=[],e=t;return a.push(e+"%"),a}}}],series:[{name:"付款金额",type:"line",smooth:!0,data:[]},{name:"付款人数",type:"line",smooth:!0,data:[]},{name:"付款件数",type:"line",smooth:!0,data:[]},{name:"下单转化(%)",type:"line",smooth:!0,data:[],yAxisIndex:1},{name:"付款转化(%)",type:"line",smooth:!0,yAxisIndex:1,data:[]},{name:"成交转化率(%)",type:"line",smooth:!0,yAxisIndex:1,data:[]}]},data:{customerMoneyNum:0,ordersFinishPrecent:0,ordersMoneyNum:0,ordersNum:0,ordersPeopleNum:0,ordersPrecent:0,payOrdersMoneyNum:0,payOrdersNum:0,payOrdersPeopleNum:0,payOrdersPrecent:0,payOrdersProductNum:0,pv:0,uv:0}}},methods:{getData:function(){var t=this;this.loading=!0,Object(n.G)(this.queryParams).then(function(a){200===a.code&&(t.data=a.data.exchangeSummarize,t.optionsData.xAxis.data=a.data.date,t.optionsData.series[0].data=a.data.payMoney.data,t.optionsData.series[1].data=a.data.payPeople.data,t.optionsData.series[2].data=a.data.payNumber.data,t.optionsData.series[3].data=a.data.payOrderPrecent.data,t.optionsData.series[4].data=a.data.payPrecent.data,t.optionsData.series[5].data=a.data.payFinishPrecent.data,t.chart.setOption(t.optionsData))}).finally(function(){t.loading=!1})}},created:function(){}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"stat__body"},[e("el-col",{staticClass:"stat__inner",attrs:{span:24}},[e("ul",{staticClass:"trading-items"},[e("li",{staticClass:"trading-item color1"},[e("ul",{staticClass:"trading-previews"},[e("li",[e("p",[t._v("浏览量(pv)")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.pv}})],1),t._v(" "),e("li",[e("p",[t._v("访客数(uv)")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.uv}})],1)]),t._v(" "),e("div",{staticClass:"trapezoid1"},[e("span",[t._v("访客")])])]),t._v(" "),e("li",{staticClass:"trading-item color2"},[e("ul",{staticClass:"trading-previews"},[e("li",[e("p",[t._v("下单人数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.ordersPeopleNum}})],1),t._v(" "),e("li",[e("p",[t._v("下单笔数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.ordersNum}})],1),t._v(" "),e("li",[e("p",[t._v("下单金额")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.ordersMoneyNum,duration:1500,decimals:2}})],1)]),t._v(" "),e("div",{staticClass:"trapezoid2"},[e("span",[t._v("下单")])])]),t._v(" "),e("li",{staticClass:"trading-item color3"},[e("ul",{staticClass:"trading-previews"},[e("li",[e("p",[t._v("付款人数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.payOrdersPeopleNum}})],1),t._v(" "),e("li",[e("p",[t._v("付款订单数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.payOrdersNum}})],1),t._v(" "),e("li",[e("p",[t._v("付款金额")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.payOrdersMoneyNum,duration:1500,decimals:2}})],1),t._v(" "),e("li",[e("p",[t._v("付款件数")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.payOrdersProductNum}})],1),t._v(" "),e("li",[e("p",[t._v("客单价")]),t._v(" "),e("count-to",{staticClass:"count-val",attrs:{endVal:t.data.customerMoneyNum,duration:1500,decimals:2}})],1)]),t._v(" "),e("div",{staticClass:"trapezoid3"},[e("span",[t._v("付款")])])]),t._v(" "),e("div",{staticClass:"trading-line"},[e("span",{staticClass:"span-1"},[t._v("\n            下单转化率"+t._s(t.data.ordersPrecent)+"%\n          ")]),t._v(" "),e("span",{staticClass:"span-2"},[t._v("\n              成交转化率"+t._s(t.data.ordersFinishPrecent)+"%\n          ")]),t._v(" "),e("span",{staticClass:"span-3"},[t._v("\n              付款转化率"+t._s(t.data.payOrdersPrecent)+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"line-chart",attrs:{id:"tradingChart"}})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stat__header"},[a("div",{staticClass:"fl"},[this._v("交易概况")])])}]};var o=e("C7Lr")(r,l,!1,function(t){e("CqfG")},"data-v-f6c01bea",null).exports,d={mixins:[i.a],data:function(){return{el:"activeChart",optionsData:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"left",containLabel:!0},xAxis:{type:"value"},yAxis:{splitLine:{show:!1},type:"category",data:["新老客户占比"]},series:[{name:"新客户",type:"bar",stack:"总量",barMaxWidth:50,label:{normal:{show:!0,position:"insideRight",formatter:function(t){return 0===t.value?"":t.value}}},data:[]},{name:"老客户",type:"bar",stack:"总量",barMaxWidth:50,label:{normal:{show:!0,position:"insideRight",formatter:function(t){return 0===t.value?"":t.value}}},data:[]}]}}},methods:{getData:function(){var t=this;this.loading=!0,Object(n.F)(this.queryParams).then(function(a){200===a.code&&(t.optionsData.series[0].data=a.data.series[0].data,t.optionsData.series[1].data=a.data.series[1].data,t.chart.setOption(t.optionsData))}).finally(function(){t.loading=!1})}}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[this._m(0),this._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"stat__body"},[a("el-col",{staticClass:"stat__inner",attrs:{span:24}},[a("div",{staticClass:"line-chart",attrs:{id:"activeChart"}})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stat__header"},[a("div",{staticClass:"fl"},[this._v("下单用户构成")])])}]};var v=e("C7Lr")(d,c,!1,function(t){e("IpV0")},"data-v-68025f4e",null).exports,u={mixins:[i.a],data:function(){return{el:"pieChart",optionsData:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"right",data:[]},series:[{name:"下单渠道",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"18",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[]}]}}},methods:{getData:function(){var t=this;this.loading=!0,Object(n.D)(this.queryParams).then(function(a){200===a.code&&(t.optionsData.series[0].data=a.data,t.optionsData.legend.data=a.data.map(function(t){return t.name}),t.chart.setOption(t.optionsData))}).finally(function(){t.loading=!1})}}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[this._m(0),this._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"stat__body"},[a("el-col",{staticClass:"stat__inner",attrs:{span:24}},[a("div",{staticClass:"line-chart",attrs:{id:"pieChart"}})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stat__header"},[a("div",{staticClass:"fl"},[this._v("下单渠道分布")])])}]};var _=e("C7Lr")(u,p,!1,function(t){e("PD80")},"data-v-368fb3e7",null).exports,h={mixins:[i.a],data:function(){return{el:"dealChart",optionsData:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"left",bottom:0,top:30,right:0,containLabel:!0},xAxis:{splitLine:{show:!1},type:"category",data:[]},yAxis:{splitLine:{show:!1},type:"value"},series:{name:"订单金额分布",type:"bar",barMaxWidth:25,barCategoryGap:"10%",data:[320,302,301,334,390,330,320]}}}},methods:{getData:function(){var t=this;this.loading=!0,Object(n.E)(this.queryParams).then(function(a){200===a.code&&(t.optionsData.xAxis.data=a.data.xAxis,t.optionsData.series.data=a.data.yAxis,t.chart.setOption(t.optionsData))}).finally(function(){t.loading=!1})}}},m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[this._m(0),this._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"stat__body"},[a("el-col",{staticClass:"stat__inner",attrs:{span:24}},[a("div",{staticClass:"line-chart",attrs:{id:"dealChart"}})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stat__header"},[a("div",{staticClass:"fl"},[this._v("订单金额分布")])])}]};var f=e("C7Lr")(h,m,!1,function(t){e("IUsE")},"data-v-2732b144",null).exports,y=e("Pg0u"),g=e.n(y),C=e("EBZi"),x={mixins:[i.a],data:function(){return{el:"areaChart",optionsData:{tooltip:{trigger:"item",formatter:function(t){var a=t.name+"<br/>",e=t.data;return t.data?a+="成交人数："+e.value[0]+"</br>访客数："+e.value[1]:a+="成交人数：0</br>访客数：0",a}},visualMap:{realtime:!1,calculable:!0,left:20,inRange:{color:["lightskyblue","yellow","orangered"]}},series:[{name:"店铺区域分布",type:"map",mapType:"china",itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:[]}]},tableData:[]}},methods:{getData:function(){var t=this;this.loading=!0,Object(n.C)(this.queryParams).then(function(a){if(200===a.code){var e=[];a.data.area.forEach(function(t){var a={name:t.areaName,value:[t.areaDealPeopleNum,t.areaVisitPeopleNum]};e.push(a)}),t.optionsData.series[0].data=e,t.tableData=a.data.area,t.chart.setOption(t.optionsData)}}).finally(function(){t.loading=!1})},initChart:function(){var t=this;this.$nextTick(function(){t.el&&""!==t.el&&(g.a.registerMap("china",C),t.chart=g.a.init(document.getElementById(t.el),"walden"))})}}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"stat__body"},[e("el-col",{staticClass:"stat__inner",attrs:{xs:24,sm:24,md:24,lg:10,xl:10}},[e("div",{staticClass:"line-chart",attrs:{id:"areaChart"}})]),t._v(" "),e("el-col",{staticClass:"border-left",attrs:{xs:24,sm:24,md:24,lg:14,xl:14}},[e("div",{staticClass:"table-box"},[e("table",{staticClass:"stat-inner__table mt-20"},[e("tr",[e("th",{staticStyle:{width:"10%"}},[t._v("序号")]),t._v(" "),e("th",{staticStyle:{width:"10%"}},[t._v("地区")]),t._v(" "),e("th",{staticStyle:{width:"20%"}},[t._v("成交金额")]),t._v(" "),e("th",{staticStyle:{width:"20%"}},[t._v("成交人数")]),t._v(" "),e("th",{staticStyle:{width:"20%"}},[t._v("访客数")]),t._v(" "),e("th",{staticStyle:{width:"20%"}},[t._v("访客成交转化率")])])]),t._v(" "),e("div",{staticClass:"table-box__inner"},[e("table",{staticClass:"stat-inner__table"},t._l(t.tableData,function(a,s){return e("tr",{key:s},[e("td",{staticStyle:{width:"10%"}},[t._v(t._s(s+1))]),t._v(" "),e("td",{staticStyle:{width:"10%"}},[t._v(t._s(a.areaName))]),t._v(" "),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(t.$cms.float(a.areaDealMoney)))]),t._v(" "),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.areaDealPeopleNum))]),t._v(" "),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.areaVisitPeopleNum))]),t._v(" "),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.areaDealPrecent)+"%")])])}),0)])])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stat__header"},[a("div",{staticClass:"fl"},[this._v("下单来源地域分布")])])}]};var w={components:{member:v,tradingSource:_,general:o,tradingMoney:f,tradingArea:e("C7Lr")(x,b,!1,function(t){e("tjdc")},"data-v-60d56da4",null).exports,timer:s.a},data:function(){return{value:["",""]}},methods:{getTime:function(t){this.value=t}}},D={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"stat__layout"},[e("timer",{on:{change:t.getTime}}),t._v(" "),e("general",{staticClass:"mt-20",attrs:{"time-data":t.value}}),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"mt-20",attrs:{xs:24,sm:24,md:12,lg:14,xl:14}},[e("member",{attrs:{"time-data":t.value}})],1),t._v(" "),e("el-col",{staticClass:"mt-20",attrs:{xs:24,sm:24,md:12,lg:10,xl:10}},[e("trading-source",{attrs:{"time-data":t.value}})],1)],1),t._v(" "),e("trading-money",{staticClass:"mt-20",attrs:{"time-data":t.value}}),t._v(" "),e("trading-area",{staticClass:"mt-20",attrs:{"time-data":t.value}})],1)},staticRenderFns:[]};var P=e("C7Lr")(w,D,!1,function(t){e("f1zx")},null,null);a.default=P.exports},f1zx:function(t,a){},tjdc:function(t,a){}});
//# sourceMappingURL=15.871ac973c1dab38ed6e8.js.map