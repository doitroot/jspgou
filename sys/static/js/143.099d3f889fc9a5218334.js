webpackJsonp([143],{aaWd:function(t,e){},k74o:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("aA9S"),l=a.n(s),i=a("5HJ5"),r=a("QkjJ"),o={"store.storeName":"","product.name":"",status:"",reportDictType:"",page:1,size:10,startTime:"",endTime:""},n={mixins:[i.a],data:function(){return{interestsDialog:!1,queryParams:l()({},o),timer:[],details:{},isSolve:!1,rules:{dealResult:[{required:!0,message:"请输入处理结果",trigger:"blur"}]}}},filters:{typeFilter:function(t){return["","虚假宣传","信息有误","违禁品","侵权","价格违规","政治有害","滥发信息","其他"][t]}},methods:{showAttr:function(t){var e="";return t.forEach(function(t){e+=t.attrName+":"+t.attrValueName}),e},cancel:function(){this.interestsDialog=!1,this.isSolve=!1,this.details.dealResult="",this.$refs.result.clearValidate()},submit:function(t){var e=this;this.$refs.form.validate(function(a){if(!a)return!1;Object(r.Y)({id:t,dealResult:e.details.dealResult}).then(function(t){200===t.code?(e.$successMessage("提交成功"),e.getTableData(r.X,e.queryParams),e.interestsDialog=!1):e.$errorMessage(t.message)})})},setTimer:function(t){this.queryParams.startTime=t[0],this.queryParams.endTime=t[1],this.query()},showDialog:function(t,e){var a=this;"solve"===e&&(this.isSolve=!0),Object(r.W)({id:t}).then(function(t){a.interestsDialog=!0,200===t.code?a.details=t.data:a.$errorMessage(t.message)})}},created:function(){this.getTableData(r.X,this.queryParams)}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cms-list-layout"},[a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[t._v("展示用户的投诉信息")]),t._v(" "),a("li",[t._v("可对投诉信息进行处理，结果将发送至用户信息")])]),t._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[t._v("商品名称")]),t._v(" "),a("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.query(e):null}},model:{value:t.queryParams["product.name"],callback:function(e){t.$set(t.queryParams,"product.name",e)},expression:"queryParams['product.name']"}})],1),t._v(" "),a("div",{staticClass:"query-group"},[a("label",[t._v("店铺名称")]),t._v(" "),a("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.query(e):null}},model:{value:t.queryParams["store.storeName"],callback:function(e){t.$set(t.queryParams,"store.storeName",e)},expression:"queryParams['store.storeName']"}})],1),t._v(" "),a("div",{staticClass:"query-group"},[a("label",[t._v("处理状态")]),t._v(" "),a("el-select",{on:{change:t.query},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),a("el-option",{attrs:{label:"未处理",value:1}}),t._v(" "),a("el-option",{attrs:{label:"已处理",value:2}})],1)],1),t._v(" "),a("div",{staticClass:"query-group"},[a("label",[t._v("提交时间")]),t._v(" "),a("cms-picker",{on:{change:t.setTimer},model:{value:t.timer,callback:function(e){t.timer=e},expression:"timer"}})],1),t._v(" "),a("div",{staticClass:"query-group"},[a("label",[t._v("投诉类型")]),t._v(" "),a("el-select",{on:{change:t.query},model:{value:t.queryParams.reportDictType,callback:function(e){t.$set(t.queryParams,"reportDictType",e)},expression:"queryParams.reportDictType"}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),a("el-option",{attrs:{label:"虚假宣传",value:1}}),t._v(" "),a("el-option",{attrs:{label:"信息有误",value:2}}),t._v(" "),a("el-option",{attrs:{label:"违禁品",value:3}}),t._v(" "),a("el-option",{attrs:{label:"侵权",value:4}}),t._v(" "),a("el-option",{attrs:{label:"价格违规",value:5}}),t._v(" "),a("el-option",{attrs:{label:"政治有害",value:6}}),t._v(" "),a("el-option",{attrs:{label:"滥发信息",value:7}}),t._v(" "),a("el-option",{attrs:{label:"其他",value:8}})],1)],1),t._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:t.query}},[t._v("查询")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.getCheckItems,"row-click":t.checkRows}},[a("el-table-column",{attrs:{prop:"product.name",label:"投诉商品","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.product?a("div",{staticClass:"comment__inner"},[a("div",{staticStyle:{display:"inline-block",width:"60px",height:"60px"}},[e.row.product.resources[0]?a("img",{staticClass:"product-img",attrs:{src:t.$cms.filterUrl(e.row.product.resources[0].imageResouce.url)}}):t._e()]),t._v(" "),a("div",{staticStyle:{display:"inline-block",width:"80%"}},[a("h3",{staticClass:"comment-title-h text-overflow",staticStyle:{display:"inline-block",width:"100%",position:"relative",top:"10px","line-height":"24px"},attrs:{title:e.row.product.name}},[t._v(t._s(e.row.product.name))]),t._v(" "),e.row.product.skuAttrs?a("p",{staticClass:"comment-title-h text-overflow",staticStyle:{display:"inline-block",width:"230px",color:"#666","line-height":"20px"},attrs:{title:t.showAttr(e.row.product.skuAttrs)}},[e.row.product.skuAttrs.length>0?a("span",{staticStyle:{"font-size":"12px","padding-left":"3px"}},[t._v("规格：")]):t._e(),t._v(" "),t._l(e.row.product.skuAttrs,function(e,s){return a("span",{key:s,staticStyle:{"font-size":"12px","padding-left":"3px"}},[t._v(t._s(e.attrName)+":"+t._s(e.attrValueName))])})],2):t._e()])]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"reportDictType",label:"投诉类型","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("typeFilter")(e.row.reportDictType)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"specificDescription",label:"描述","min-width":"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"text-overflow",attrs:{title:e.row.specificDescription}},[t._v(t._s(e.row.specificDescription))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("span",[t._v("未处理")]):t._e(),t._v(" "),2===e.row.status?a("span",[t._v("已处理")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"240",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticStyle:{"text-align":"center"}},[a("cms-button",{attrs:{icon:"edit",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),t.showDialog(e.row.id,"nosolve")}}},[t._v("详情")]),t._v(" "),1==e.row.status?a("cms-button",{attrs:{icon:"edit",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),t.showDialog(e.row.id,"solve")}}},[t._v("处理")]):t._e()],1)}}])})],1),t._v(" "),a("cms-pagination",{attrs:{total:t.total},on:{change:t.getPage}}),t._v(" "),a("el-dialog",{attrs:{title:"投诉处理",visible:t.interestsDialog,width:"50%"},on:{"update:visible":function(e){t.interestsDialog=e}}},[a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.details,"label-width":"140px"}},[a("div",{staticStyle:{"padding-right":"20px"}},[a("el-form-item",{attrs:{label:"投诉商品:"}},[t.details.product?a("div",{staticStyle:{display:"inline-block",width:"60px",height:"60px"}},[t.details.product.resources[0]?a("img",{staticClass:"product-img",attrs:{src:t.$cms.filterUrl(t.details.product.resources[0].imageResouce.url)}}):t._e()]):t._e(),t._v(" "),t.details.product?a("span",{staticClass:"complaint-title"},[t._v(t._s(t.details.product.name))]):t._e()]),t._v(" "),a("el-form-item",{attrs:{label:"投诉类型:"}},[a("span",[t._v(t._s(t._f("typeFilter")(t.details.reportDictType)))])]),t._v(" "),a("el-form-item",{attrs:{label:"描述:"}},[a("span",{staticClass:"comment-title"},[t._v(t._s(t.details.specificDescription))])]),t._v(" "),a("el-form-item",{attrs:{label:"附图:"}},[a("cms-picture-zone",{attrs:{data:t.details.spaceDatas,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态:"}},[1==t.details.status?a("span",[t._v("未处理")]):t._e(),t._v(" "),2==t.details.status?a("span",[t._v("已处理")]):t._e()]),t._v(" "),a("el-form-item",{attrs:{label:"提交时间:"}},[a("span",[t._v(t._s(t.$moment(t.details.createTime)))])]),t._v(" "),a("el-form-item",{ref:"result",staticClass:"com-result",staticStyle:{"margin-bottom":"20px"},attrs:{label:"处理结果:",prop:"dealResult",rules:1==t.details.status?[{required:!0,message:"请输入处理结果",trigger:"blur"}]:[]}},[2==t.details.status?a("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.details.dealResult))]):t._e(),t._v(" "),t.isSolve&&2!=t.details.status?a("el-input",{attrs:{type:"textarea",placeholder:"处理结果在0-255个字符之间",maxlength:"255"},model:{value:t.details.dealResult,callback:function(e){t.$set(t.details,"dealResult",e)},expression:"details.dealResult"}}):t._e()],1)],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[1===t.details.status&&t.isSolve?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submit(t.details.id)}}},[t._v("提交")]):t._e(),t._v(" "),a("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};var u=a("C7Lr")(n,c,!1,function(t){a("aaWd")},"data-v-54782315",null);e.default=u.exports}});
//# sourceMappingURL=143.099d3f889fc9a5218334.js.map