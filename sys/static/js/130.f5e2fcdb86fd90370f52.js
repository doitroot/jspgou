webpackJsonp([130],{"8pRa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("aA9S"),l=a.n(o),s=a("5HJ5"),r=a("QkjJ"),i={proposalDictType:"",page:1,size:10},n={contactName:"",contactPhone:"",description:"",id:"",spaceDatas:[]},c={mixins:[s.a],data:function(){return{interestsDialog:!1,queryParams:l()({},i),getFormData:l()({},n)}},methods:{showDialog:function(t){var e=this;this.interestsDialog=!0,Object(r.U)({id:t}).then(function(t){200===t.code?(e.getFormData=l()(n,t.data),e.getFormData.showDesc=!1):e.$errorMessage("获取失败")})}},created:function(){this.getTableData(r.V,this.queryParams)}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cms-list-layout"},[a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[t._v("展示收集的意见反馈信息")])]),t._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[t._v("意见类型")]),t._v(" "),a("el-select",{on:{change:t.query},model:{value:t.queryParams.proposalDictType,callback:function(e){t.$set(t.queryParams,"proposalDictType",e)},expression:"queryParams.proposalDictType"}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),a("el-option",{attrs:{label:"功能异常",value:1}}),t._v(" "),a("el-option",{attrs:{label:"体验问题",value:2}}),t._v(" "),a("el-option",{attrs:{label:"新功能建议",value:3}}),t._v(" "),a("el-option",{attrs:{label:"其他",value:4}})],1)],1),t._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:t.query}},[t._v("查询")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.getCheckItems,"row-click":t.checkRows}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"proposalDictType",label:"意见类型","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.proposalDictType?a("span",[t._v("功能异常")]):t._e(),t._v(" "),"2"===e.row.proposalDictType?a("span",[t._v("体验问题")]):t._e(),t._v(" "),"3"===e.row.proposalDictType?a("span",[t._v("新功能建议")]):t._e(),t._v(" "),"4"===e.row.proposalDictType?a("span",[t._v("其他")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"意见描述","min-width":"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"text-overflow",attrs:{title:e.row.description}},[t._v(t._s(e.row.description))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"contactName",label:"联系人姓名","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"text-overflow",attrs:{title:e.row.contactName}},[t._v(t._s(e.row.contactName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"contactPhone",label:"联系号码","min-width":"160"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作选项",width:"260",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("cms-button",{attrs:{icon:"edit",size:"small",type:"info"},on:{click:function(a){a.stopPropagation(),t.showDialog(e.row.id)}}},[t._v("查看")])],1)}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"详情",visible:t.interestsDialog,width:"530px"},on:{"update:visible":function(e){t.interestsDialog=e}}},[a("el-form",{staticStyle:{"padding-right":"20px"},attrs:{"label-width":"140px"}},[a("el-form-item",{attrs:{label:"意见类型:"}},["1"===t.getFormData.proposalDictType?a("span",[t._v("功能异常")]):t._e(),t._v(" "),"2"===t.getFormData.proposalDictType?a("span",[t._v("体验问题")]):t._e(),t._v(" "),"3"===t.getFormData.proposalDictType?a("span",[t._v("新功能建议")]):t._e(),t._v(" "),"4"===t.getFormData.proposalDictType?a("span",[t._v("其他")]):t._e()]),t._v(" "),a("el-form-item",{attrs:{label:"意见描述:"}},[a("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.getFormData.description))])]),t._v(" "),a("el-form-item",{attrs:{label:"附图:"}},[a("cms-picture-zone",{attrs:{data:t.getFormData.spaceDatas,disabled:!0}})],1),t._v(" "),a("el-form-item",{attrs:{label:"联系姓名:"}},[a("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.getFormData.contactName))])]),t._v(" "),a("el-form-item",{attrs:{label:"联系号码:"}},[a("span",[t._v(t._s(t.getFormData.contactPhone))])])],1)],1),t._v(" "),a("cms-pagination",{attrs:{total:t.total},on:{change:t.getPage}})],1)},staticRenderFns:[]};var u=a("C7Lr")(c,p,!1,function(t){a("YSFF")},null,null);e.default=u.exports},YSFF:function(t,e){}});
//# sourceMappingURL=130.f5e2fcdb86fd90370f52.js.map