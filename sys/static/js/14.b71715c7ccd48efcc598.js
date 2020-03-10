webpackJsonp([14,125],{E7rg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("YmSg"),l=a("aA9S"),s=a.n(l),n=a("EOYE"),o=a("5HJ5"),i={page:1,size:10},c={mixins:[o.a],data:function(){return{queryParams:s()({},i),value:""}},methods:{deleteData:function(e){this.deleteTableData(n.e,e)},deleteDatas:function(e){this.deleteTableDatas(n.e,e)},changeData:function(){this.getTableData(n.d,this.queryParams)}},created:function(){this.getTableData(n.d,this.queryParams)}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cms-list-layout"},[a("cms-breadcrumb",{attrs:{to:"/shopMember/list",type:"list"}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),a("cms-tabs",[a("cms-tab",{attrs:{to:"/shopMember/edit"}},[e._v("基本信息")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/account"}},[e._v("账户明细")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/grow"}},[e._v("成长值明细")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/integral"}},[e._v("积分明细")])],1),e._v(" "),a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("显示商城会员账户金额所有的交易明细")]),e._v(" "),a("li",[e._v("可对交易记录进行删除操作（谨慎操作）")])]),e._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[e._v("类型")]),e._v(" "),a("el-select",{model:{value:e.tableData.changeType,callback:function(t){e.$set(e.tableData,"changeType",t)},expression:"tableData.changeType"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"收入（充值）",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"收入（退款）",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"支出（提现）",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"支出（交易）",value:"4"}})],1)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("状态")]),e._v(" "),a("el-select",{model:{value:e.tableData.state,callback:function(t){e.$set(e.tableData,"state",t)},expression:"tableData.state"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"成功",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"失败",value:"2"}})],1)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("交易方式")]),e._v(" "),a("el-select",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"支付宝",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"微信",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"银联",value:"3"}})],1)],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("交易流水号")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("业务号")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("label",[e._v("生成时间")]),e._v(" "),a("el-time-picker",{attrs:{"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("导出明细")])],1)]),e._v(" "),a("section",{staticClass:"cms-batch"},[a("cms-button",{attrs:{icon:"error",type:"error",size:"small"},on:{click:function(t){e.deleteTableDatas(e.ids)}}},[e._v("批量删除")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"会员账户","min-width":"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tradeTypeCode",label:"类型","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"businessNo",label:"业务号","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tradeNo",label:"交易流水号","min-width":"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tradeWayCode",label:"交易方式","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tradeMoney",label:"金额","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"balance",label:"余额","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},["1"===t.row.status?a("span",[e._v("待支付")]):"2"===t.row.status?a("span",[e._v("未完成")]):"3"===t.row.status?a("span",[e._v("已完成")]):"4"===t.row.status?a("span",[e._v("已取消")]):e._e()])}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"tradingTime",label:"交易时间","min-width":"170"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作选项",width:"175",fixed:"right",align:"center"}},[a("div",{},[a("cms-button",{attrs:{icon:"error",size:"small",type:"info"},on:{click:e.deleteTableData}},[e._v("删除")])],1)])],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}})],1)},staticRenderFns:[]};var u=a("C7Lr")(c,m,!1,function(e){a("Xuom")},null,null).exports,d={page:1,size:10},v={mixins:[o.a],data:function(){return{queryParams:s()({},d),value:""}},methods:{deleteData:function(e){this.deleteTableData(n.k,e)},deleteDatas:function(e){this.deleteTableDatas(n.k,e)},changeData:function(){this.getTableData(n.j,this.queryParams)}},created:function(){this.getTableData(n.j,this.queryParams)}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cms-list-layout"},[a("cms-breadcrumb",{attrs:{to:"/shopMember/list",type:"list"}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),a("cms-tabs",[a("cms-tab",{attrs:{to:"/shopMember/edit"}},[e._v("基本信息")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/account"}},[e._v("账户明细")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/grow"}},[e._v("成长值明细")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/integral"}},[e._v("积分明细")])],1),e._v(" "),a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("显示商城会员成长明细")]),e._v(" "),a("li",[e._v("可对记录进行删除操作（谨慎操作）")])]),e._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[e._v("时间")]),e._v(" "),a("el-time-picker",{attrs:{"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("导出明细")])],1)]),e._v(" "),a("cms-sticky",[a("section",{staticClass:"cms-batch"},[a("cms-button",{attrs:{icon:"error",type:"error",size:"small"},on:{click:function(t){e.deleteTableDatas(e.ids)}}},[e._v("批量删除")])],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"会员账户","min-width":"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sourceDetails",label:"来源","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"exp",label:"成长值变化","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"时间","min-width":"170"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作选项",width:"175",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{attrs:{icon:"error",size:"small",type:"info"},on:{click:e.deleteTableData}},[e._v("删除")])],1)}}])})],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}})],1)},staticRenderFns:[]};var p=a("C7Lr")(v,b,!1,function(e){a("dG3F")},null,null).exports,h={page:1,size:10},_={mixins:[o.a],data:function(){return{queryParams:s()({},h),value:""}},methods:{deleteData:function(e){this.deleteTableData(n.o,e)},deleteDatas:function(e){this.deleteTableDatas(n.o,e)},changeData:function(){this.getTableData(n.n,this.queryParams)}},created:function(){this.getTableData(n.n,this.queryParams)}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cms-list-layout"},[a("cms-breadcrumb",{attrs:{to:"/shopMember/list",type:"list"}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),a("cms-tabs",[a("cms-tab",{attrs:{to:"/shopMember/edit"}},[e._v("基本信息")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/account"}},[e._v("账户明细")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/grow"}},[e._v("成长值明细")]),e._v(" "),a("cms-tab",{attrs:{to:"/shopMember/integral"}},[e._v("积分明细")])],1),e._v(" "),a("cms-prompt",{attrs:{collapse:"true"}},[a("li",[e._v("显示商城会员积分明细")]),e._v(" "),a("li",[e._v("可对记录进行删除操作（谨慎操作）")])]),e._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[e._v("时间")]),e._v(" "),a("el-time-picker",{attrs:{"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}}})],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:e.query}},[e._v("导出明细")])],1)]),e._v(" "),a("cms-sticky",[a("section",{staticClass:"cms-batch"},[a("cms-button",{attrs:{icon:"error",type:"error",size:"small"},on:{click:function(t){e.deleteTableDatas(e.ids)}}},[e._v("批量删除")])],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.getCheckItems}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"会员账户","min-width":"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sourceName",label:"来源/用途","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"积分变化","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"时间","min-width":"170"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作选项",width:"175",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{attrs:{icon:"error",size:"small",type:"info"},on:{click:e.deleteTableData}},[e._v("删除")])],1)}}])})],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPage}})],1)},staticRenderFns:[]};var g=a("C7Lr")(_,f,!1,function(e){a("VuhM")},null,null).exports,y={name:"memberEdit",components:{edit:r.default,account:u,grow:p,integral:g},data:function(){return{status:!0,activeName:"first"}},methods:{eventChange:function(e){"edit"===e&&this.$refs.edit&&this.$refs.edit.changeData(),"account"===e&&this.$refs.account&&this.$refs.account.changeData(),"grow"===e&&this.$refs.grow&&this.$refs.grow.changeData(),"integral"===e&&this.$refs.integral&&this.$refs.integral.changeData()}},activated:function(){var e=this;"edit"===this.$route.query.type&&(this.status=!1,setTimeout(function(){e.status=!0},1))}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cms-list-layout",staticStyle:{"padding-top":"6px"}},[e.status?a("el-tabs",{ref:"memberTab",model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[a("sale",{ref:"edit",on:{change:e.eventChange}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"账户明细",name:"second",lazy:""}},[a("audit",{ref:"account",on:{change:e.eventChange}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"成长值明细",name:"third",lazy:""}},[a("shelves",{ref:"grow",on:{change:e.eventChange}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"积分明细",name:"fourth",lazy:""}},[a("recycle",{ref:"integral",on:{change:e.eventChange}})],1)],1):e._e()],1)},staticRenderFns:[]};var k=a("C7Lr")(y,D,!1,function(e){a("ncLT")},null,null);t.default=k.exports},VuhM:function(e,t){},Xuom:function(e,t){},YmSg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),l=a.n(r),s=a("x1ym"),n=a("lcoF"),o=a("EOYE"),i={mixins:[n.a],data:function(){var e=this;return{formData:{},index:0,index2:0,index3:0,rules:{email:[s.a.required("此项为必填"),s.a.email(),s.a.custom(function(t,a,r){Object(o.a)({email:a,id:e.formData.id}).then(function(e){200===e.code&&(e.data?r():r(new Error("邮箱已存在，不允许重复添加")))})})],password:[s.a.custom(function(e,t,a){""===t||/^\d{6,16}$/.test(t)?a():a(new Error("请输入6-16位数密码"))})],phone:[s.a.phone(),s.a.custom(function(t,a,r){""===a?r():/^1[3456789]\d{9}$/.test(a)?Object(o.b)({phone:a,id:e.formData.id}).then(function(e){200===e.code&&(e.data?r():r(new Error("手机已存在，不允许重复添加")))}):r(new Error("手机号码格式不正确"))})],nickname:[s.a.custom(function(e,t,a){""===t?a():/^([\u4E00-\u9FA5a-zA-Z0-9]+)$/.test(t)?a():a(new Error("昵称格式不正确"))})]},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},methods:{getFormData:function(e){var t=this;this.loading=!0,Object(o.i)({id:e}).then(function(e){if(200===e.code){e.data.memberExt.birthday&&(e.data.memberExt.birthday=t.$moment(e.data.memberExt.birthday));for(var a=0;a<e.data.memberThirds.length;a++)"wechat"===e.data.memberThirds[a].thirdTypeCode&&(t.index=1),"sina"===e.data.memberThirds[a].thirdTypeCode&&(t.index2=2),"qq"===e.data.memberThirds[a].thirdTypeCode&&(t.index3=3);t.formData=l()({resourceDataId:null,password:""},e.data),t.loading=!1}else t.loading=!1,t.$errorMessage(e.message)})},unbind:function(e){var t=this;this.$confirm("确定解除绑定?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];t.formData.memberThirds.forEach(function(t){t.thirdTypeCode===e&&a.push(parseInt(t.id))}),Object(o.p)({ids:a}).then(function(e){200===e.code?(t.$successMessage("解绑成功"),setTimeout(function(){t.getFormData(t.$route.query.id)},500)):t.errorMessage(e.message)})})},update:function(){var e={member:{email:this.formData.email,enabled:this.formData.enabled,id:this.formData.id,nickname:this.formData.nickname,password:""===this.formData.password?"":this.$cms.encrypt(this.formData.password),phone:this.formData.phone},memberExt:{resourceDataId:this.formData.resourceDataId?this.formData.resourceDataId:null,gender:this.formData.memberExt.gender,birthday:this.formData.memberExt.birthday}};this.updateForm(o.q,e,"/shopMember/list","list")}},created:function(){this.getFormData(this.$route.query.id)}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-list-layout"},[a("cms-breadcrumb",{attrs:{to:"/shopMember/list",type:"list"}},[a("li",[e._v(e._s(e.$route.name))])]),e._v(" "),e.formData.memberExt?a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.formData,"label-width":"210px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("span",[e._v(e._s(e.formData.username))])]),e._v(" "),a("el-form-item",{attrs:{label:"会员头像",prop:"resourceDataId"}},[a("cms-picture-zone",{attrs:{data:e.formData.memberExt.resourceData},model:{value:e.formData.resourceDataId,callback:function(t){e.$set(e.formData,"resourceDataId",t)},expression:"formData.resourceDataId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账户余额"}},[a("span",[e._v(e._s(e.formData.memberAccount.balance))])]),e._v(" "),a("el-form-item",{attrs:{label:"积分"}},[a("span",[e._v(e._s(e.formData.memberAccount.score))])]),e._v(" "),a("el-form-item",{attrs:{label:"会员成长值/会员等级"}},[a("span",[e._v(e._s(e.formData.memberAccount.exp))]),e._v(" /\n      "),a("span",[e._v(e._s(e.formData.memberLevel.levelName))])]),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email",error:e.errorMessage.email}},[a("el-input",{attrs:{maxlength:"20"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机",prop:"phone"}},[a("el-input",{attrs:{maxlength:"11"},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),e._v(" "),a("div",{staticClass:"gray"},[e._v("留空则不修改")])],1),e._v(" "),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{maxlength:"30"},model:{value:e.formData.nickname,callback:function(t){e.$set(e.formData,"nickname",t)},expression:"formData.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.formData.memberExt.gender,callback:function(t){e.$set(e.formData.memberExt,"gender",t)},expression:"formData.memberExt.gender"}},[a("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("女")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("保密")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{"picker-options":e.pickerOptions,type:"date",size:"small","value-format":"yyyy-MM-dd"},model:{value:e.formData.memberExt.birthday,callback:function(t){e.$set(e.formData.memberExt,"birthday",t)},expression:"formData.memberExt.birthday"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否启用"}},[a("cms-switch",{model:{value:e.formData.enabled,callback:function(t){e.$set(e.formData,"enabled",t)},expression:"formData.enabled"}}),e._v(" "),a("div",{staticClass:"gray"},[e._v("设置为黑名单后，该会员将无法登录商城")])],1)],1):e._e(),e._v(" "),a("div",{staticClass:"cms-form-footer"},[a("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:e.update}},[e._v("保存")])],1)],1)},staticRenderFns:[]};var m=a("C7Lr")(i,c,!1,function(e){a("h3g1")},"data-v-67232cbc",null);t.default=m.exports},dG3F:function(e,t){},h3g1:function(e,t){},ncLT:function(e,t){}});
//# sourceMappingURL=14.b71715c7ccd48efcc598.js.map