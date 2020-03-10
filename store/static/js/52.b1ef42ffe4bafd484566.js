webpackJsonp([52],{No5V:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("5HJ5"),r=a("NyU8"),n={mixins:[s.a],data:function(){return{queryParams:{page:1,size:10,status:0,name:"",categoryId:"",itemCode:"",storeId:"",sellGoodsSale:"",storeCategoryId:"",brandName:"",itemNumber:""}}},methods:{productReviewPass:function(t){var e=this;this.$confirm("确定提交上架该商品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.t)({ids:[t]}).then(function(t){200===t.code?(e.$successMessage("提交成功,请耐心等待审核"),e.$emit("change","audit"),e.getTableData(r.o,e.queryParams)):e.$errorMessage(t.message)})}).catch(function(){})},deleteData:function(t){var e=this;this.$confirm("删除的商品将会放入回收站中，是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.p)({ids:[t]}).then(function(t){200===t.code?(e.$successMessage("删除成功"),e.$emit("change","recycle"),e.getTableData(r.o,e.queryParams)):e.$errorMessage("删除失败,"+t.message)})}).catch(function(){})},deleteDatas:function(){var t=this;this.batchStatus?this.$confirm("删除的商品将会放入回收站中，是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.p)({ids:t.ids}).then(function(e){200===e.code?(t.$successMessage("删除成功"),t.$emit("change","recycle"),t.getTableData(t.callback,t.queryParams,t.isPage)):t.$errorMessage("删除失败,"+e.message)})}).catch(function(){}):this.$errorMessage("至少选择一条数据")},addProduct:function(){this.$store.dispatch("clearProductInfo"),this.$store.dispatch("setCache",!1),this.$store.dispatch("setStep","step1"),this.$routerLink("/product/save","save")},updateProduct:function(t){this.$store.dispatch("clearProductInfo"),this.$store.dispatch("setCache",!1),this.$store.dispatch("setStep","step2"),this.$routerLink("/product/update","update",{productId:t})},showProductImg:function(t){if(t.length>0){var e=t.filter(function(t){return!0===t.isCover});return e[0].imageResouce?this.$cms.filterUrl(e[0].imageResouce.url):"/static/error.png"}return"/static/error.png"},changeData:function(){this.getTableData(r.o,this.queryParams)}},created:function(){this.getTableData(r.o,this.queryParams)},mounted:function(){}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cms-list-layout"},[a("cms-prompt",[a("li",[t._v("显示本店仓库中的商品列表信息")]),t._v(" "),a("li",[t._v("可对商品进行发布、修改、删除及查看详情等操作")])]),t._v(" "),a("section",{staticClass:"cms-list-query"},[a("div",{staticClass:"query-group"},[a("label",[t._v("商品名称")]),t._v(" "),a("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.query(e):null}},model:{value:t.queryParams.name,callback:function(e){t.$set(t.queryParams,"name",e)},expression:"queryParams.name"}})],1),t._v(" "),a("div",{staticClass:"query-group"},[a("label",[t._v("SPU编号")]),t._v(" "),a("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.query(e):null}},model:{value:t.queryParams.itemCode,callback:function(e){t.$set(t.queryParams,"itemCode",e)},expression:"queryParams.itemCode"}})],1),t._v(" "),a("div",{staticClass:"query-group"},[a("label",[t._v("品牌")]),t._v(" "),a("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.query(e):null}},model:{value:t.queryParams.brandName,callback:function(e){t.$set(t.queryParams,"brandName",e)},expression:"queryParams.brandName"}})],1),t._v(" "),a("div",{staticClass:"query-group"},[a("cms-button",{attrs:{size:"small",colorPicker:!0},on:{click:t.query}},[t._v("查询")])],1)]),t._v(" "),a("section",{staticClass:"cms-batch"},[a("cms-button",{attrs:{icon:"add",type:"success",size:"small"},on:{click:t.addProduct}},[t._v("添加商品")]),t._v(" "),a("cms-button",{attrs:{icon:"error",type:"error",size:"small"},on:{click:function(e){t.deleteDatas()}}},[t._v("批量删除")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.getCheckItems,"row-click":t.checkRows}},[a("el-table-column",{attrs:{type:"selection",width:"46",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemCode",label:"SPU编号",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称","min-width":"340","class-name":"is-height"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"product-table"},[a("div",{staticClass:"product-img"},[a("img",{attrs:{src:t.showProductImg(e.row.resources),alt:e.row.name}})]),t._v(" "),a("div",{staticClass:"product-desc"},[a("div",{staticClass:"product-name"},[t._v("\n              "+t._s(e.row.name)+"\n            ")]),t._v(" "),a("div",{staticClass:"product-attr"},[e.row.brand?a("span",[t._v("品牌： "+t._s(e.row.brand.name))]):t._e(),t._v(" "),a("span",[t._v("货号： "+t._s(e.row.itemNumber))])])])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"letter",label:"店铺名称","min-width":"160","class-name":"is-height"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"product-brand"},[a("div",{staticClass:"brand-title"},[t._v(t._s(e.row.store.storeName))]),t._v(" "),e.row.store.selfShop?a("span",{staticClass:"brand-shop"},[t._v("(自营店铺)")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类名称","min-width":"115","class-name":"is-height"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"product-brand"},[a("div",{staticClass:"brand-title"},[t._v(t._s(e.row.category.cateName))]),t._v(" "),e.row.category.parent?a("div",{staticClass:"brand-category"},[t._v("- "+t._s(e.row.category.parent.cateName))]):t._e(),t._v(" "),e.row.category.parent&&e.row.category.parent.parent?a("div",{staticClass:"brand-category"},[t._v("- "+t._s(e.row.category.parent.parent.cateName))]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"价格/库存/运费","min-width":"115","class-name":"is-height"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"product-price-box"},[a("div",[a("span",{staticClass:"tag"},[t._v("价格:")]),t._v(" "),a("span",{staticClass:"tag-val"},[t._v(t._s(e.row.salePrice))])]),t._v(" "),a("div",[a("span",{staticClass:"tag"},[t._v("库存:")]),t._v(" "),a("span",{staticClass:"tag-val"},[t._v(t._s(e.row.inventory)+t._s(e.row.ext.unit))])]),t._v(" "),a("div",[a("span",{staticClass:"tag"},[t._v("运费:")]),t._v(" "),a("span",{staticClass:"tag-val"},[t._v("固定运费")])])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.productReviewPass(e.row.id)}}},[t._v("提交审核")]),t._v(" "),a("el-button",{directives:[{name:"prem",rawName:"v-prem",value:"/product/update",expression:"'/product/update'"}],attrs:{type:"text"},on:{click:function(a){a.stopPropagation(),t.updateProduct(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){a.stopPropagation(),t.deleteData(e.row.id)}}},[t._v("删除")])],1)}}])})],1),t._v(" "),a("cms-pagination",{attrs:{total:t.total},on:{change:t.getPage}})],1)},staticRenderFns:[]};var o=a("C7Lr")(n,i,!1,function(t){a("Uak9")},null,null);e.default=o.exports},Uak9:function(t,e){}});
//# sourceMappingURL=52.b1ef42ffe4bafd484566.js.map