webpackJsonp([21],{"1bFy":function(t,e){},RhzO:function(t,e){},TmxG:function(t,e){},xTx5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("aA9S"),i=r.n(a),s=r("x1ym"),o=r("lcoF"),n=r("0dUi"),c=r("3cXf"),l=r.n(c),u=r("rVsN"),p=r.n(u),d=r("GqAp"),m={props:{index:{type:Number,default:1},data:{type:String,default:""}},data:function(){return{visible:!1,checkRegionId:"",checkRegions:{},cityArray:{},checkCitys:{},regionList:[],checkData:[]}},methods:{initData:function(){this.visible=!0,this.getRegionList()},getRegionList:function(){var t=this;Object(d.a)().then(function(e){200===e.code&&(t.regionList=e.data)})},getCity:function(t,e,r){var a=this;this.cityArray[e]&&this.cityArray[e].length>0?this.checkRegionId=this.checkRegionId===t?"":t:Object(d.a)({parentId:t}).then(function(i){200===i.code&&(a.$set(a.cityArray,e,i.data),r?a.$set(a.checkCitys,e,i.data.map(function(t){return t.areaCode})):(a.$set(a.checkCitys,e,[]),a.checkRegionId=t))})},changeRegion:function(t){this.cityArray[t.areaCode]&&this.cityArray[t.areaCode].length>0?this.checkCitys[t.areaCode].length>0?(this.checkCitys[t.areaCode]=[],this.checkRegions[t.areaCode]=!1):(this.checkCitys[t.areaCode]=this.cityArray[t.areaCode].map(function(t){return t.areaCode}),this.checkRegions[t.areaCode]=!0):this.getCity(t.id,t.areaCode,!0)},changeCity:function(t,e){this.checkCitys[t].length===this.cityArray[t].length?this.$set(this.checkRegions,t,!0):this.$set(this.checkRegions,t,!1)},showCity:function(t){this.getCity(t.id,t.areaCode,!1)},clearRegion:function(){this.checkRegionId=""},determine:function(){var t={},e=[],r=[];for(var a in this.cityArray)e=e.concat(this.cityArray[a]);for(var i in this.checkCitys)r=r.concat(this.checkCitys[i]);for(var s in this.checkRegions)if(this.checkRegions[s])for(var o=0;o<this.regionList.length;o++)if(this.regionList[o].areaCode===s){t[s]=this.regionList[o].areaName;break}r.forEach(function(r){for(var a=0;a<e.length;a++)if(e[a].areaCode===r){t[e[a].areaCode]=e[a].areaName;break}}),this.$emit("change",t,this.index),this.close()},close:function(){this.visible=!1,this.checkRegionId=""},stop:function(){return!1}}},f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("default",[r("el-button",{attrs:{type:"text"},on:{click:t.initData}},[t._v("设置城市")])]),t._v(" "),r("el-dialog",{attrs:{visible:t.visible,title:"选择区域","before-close":t.close}},[r("div",{staticStyle:{padding:"20px",height:"300px",overflow:"auto"},on:{click:t.clearRegion}},t._l(t.regionList,function(e){return r("div",{key:e.id,staticClass:"area-checkbox-group",on:{click:function(e){return e.stopPropagation(),t.stop(e)}}},[r("el-checkbox",{class:t.checkRegionId==e.id?"check-active":"",attrs:{label:e.areaCode,indeterminate:!(!t.checkCitys[e.areaCode]||t.checkCitys[e.areaCode].length==t.cityArray[e.areaCode].length||0===t.checkCitys[e.areaCode].length)},on:{change:function(r){t.changeRegion(e)}},model:{value:t.checkRegions[e.areaCode],callback:function(r){t.$set(t.checkRegions,e.areaCode,r)},expression:"checkRegions[item.areaCode]"}},[t._v("\n          "+t._s(e.areaName)+"\n        ")]),t._v(" "),r("span",{staticClass:"el-icon-caret-bottom show-city",on:{click:function(r){r.stopPropagation(),t.showCity(e)}}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.checkRegionId==e.id,expression:"checkRegionId==item.id"}],staticClass:"city__warpper",on:{click:function(e){e.stopPropagation(),t.stop()}}},[r("el-checkbox-group",{model:{value:t.checkCitys[e.areaCode],callback:function(r){t.$set(t.checkCitys,e.areaCode,r)},expression:"checkCitys[item.areaCode]"}},t._l(t.cityArray[e.areaCode],function(a){return r("el-checkbox",{key:a.id,staticClass:"city-checkbox__inner",attrs:{label:a.areaCode},on:{change:function(r){t.changeCity(e.areaCode,a)}}},[t._v(" "+t._s(a.areaName))])}),1)],1)],1)}),0),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.determine}},[t._v("确 定")]),t._v(" "),r("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.close}},[t._v("取 消")])],1)])],2)},staticRenderFns:[]};var h=r("C7Lr")(m,f,!1,function(t){r("TmxG")},"data-v-6681afe5",null).exports,y={props:{type:{type:[String,Number],default:1},showType:{type:[String,Number],default:1},data:{type:[Array],default:function(){return[]}}},components:{cityArea:h},data:function(){return{postForm:{postArray:[{deliveryWay:this.type,districtidList:"",firstPrice:"",firstNum:"",addPrice:"",addNum:"",isDefault:!0}]},rules:{firstNum:[s.a.required(),s.a.number()],addPrice:[s.a.required(),s.a.decimal()],addNum:[s.a.required(),s.a.number()],firstPrice:[s.a.required(),s.a.decimal()]}}},watch:{postForm:{handler:function(){this.$emit("change",this.postForm.postArray)},deep:!0}},methods:{del:function(t){this.postForm.postArray.splice(t,1)},validateRequired:function(){var t=this;return new p.a(function(e){t.$refs.dynamicValidateForm.validate(function(t){e(t)})})},addPost:function(){var t={deliveryWay:this.type,districtidList:"",firstPrice:"",firstNum:"",addPrice:"",addNum:"",isDefault:!1};this.postForm.postArray.push(t)},getArea:function(t,e){this.$set(this.postForm.postArray[e],"districtidList",l()(t))},showCity:function(t){if(""===t)return"暂未选择城市";var e=JSON.parse(t),r=[];for(var a in e)r.push(e[a]);return r.toString()},typeFilter:function(t){return["","件","立方米","kg"][parseInt(t)]}},filters:{typeFilter:function(t){return["","件","立方米","kg"][parseInt(t)]},nameFilter:function(t){return["","件","体积","重"][parseInt(t)]}},created:function(){this.data.length>0&&(this.postForm.postArray=this.$cms.deepCopy(this.data))}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"dynamicValidateForm",attrs:{model:t.postForm,"hide-required-asterisk":!0}},[r("table",{staticClass:"sku-table"},[r("tr",[r("td",{staticClass:"align-left demo-form-inline",attrs:{colspan:"6"}},[r("el-form-item",{staticClass:"inline-item",attrs:{label:"默认运费",prop:"postArray.0.firstNum",rules:[{required:!0,message:"此项必填",trigger:"blur"},{type:"number",message:"输入合法数字",trigger:"blur"}]}},[r("el-input",{staticStyle:{width:"80px"},attrs:{type:"number"},model:{value:t.postForm.postArray[0].firstNum,callback:function(e){t.$set(t.postForm.postArray[0],"firstNum",t._n(e))},expression:"postForm.postArray[0].firstNum"}})],1),t._v(" "),r("el-form-item",{staticClass:"inline-item",attrs:{label:t.typeFilter(t.showType)+"内",prop:"postArray.0.firstPrice",rules:{required:!0,message:"此项必填",trigger:"blur"}}},[r("el-input",{staticStyle:{width:"70px"},attrs:{type:"number"},model:{value:t.postForm.postArray[0].firstPrice,callback:function(e){t.$set(t.postForm.postArray[0],"firstPrice",e)},expression:"postForm.postArray[0].firstPrice"}})],1),t._v(" "),r("el-form-item",{staticClass:"inline-item",attrs:{label:"元，每增加",prop:"postArray.0.addNum",rules:{required:!0,message:"此项必填",trigger:"blur"}}},[r("el-input",{staticStyle:{width:"80px"},attrs:{type:"number"},model:{value:t.postForm.postArray[0].addNum,callback:function(e){t.$set(t.postForm.postArray[0],"addNum",e)},expression:"postForm.postArray[0].addNum"}})],1),t._v(" "),r("el-form-item",{staticClass:"inline-item",attrs:{label:t.typeFilter(t.showType)+"，增加运费",prop:"postArray.0.addPrice",rules:{required:!0,message:"此项必填",trigger:"blur"}}},[r("el-input",{staticStyle:{width:"80px"},attrs:{maxlength:"14",type:"number"},model:{value:t.postForm.postArray[0].addPrice,callback:function(e){t.$set(t.postForm.postArray[0],"addPrice",e)},expression:"postForm.postArray[0].addPrice"}}),t._v(" "),r("label",[t._v(" 元")])],1)],1)]),t._v(" "),r("tr",[r("th",[t._v("地区")]),t._v(" "),r("th",[t._v("\n        首 "+t._s(t._f("nameFilter")(t.showType))+" 数(\n        "),r("span",[t._v(t._s(t._f("typeFilter")(t.showType)))]),t._v(" )\n      ")]),t._v(" "),r("th",[t._v("首费(元)")]),t._v(" "),r("th",[t._v("\n        续\n        "),r("span",[t._v(t._s(t._f("nameFilter")(t.showType)))]),t._v(" 数(\n        "),r("span",[t._v(t._s(t._f("typeFilter")(t.showType)))]),t._v(" )\n      ")]),t._v(" "),r("th",[t._v("续费(元)")]),t._v(" "),r("th",[t._v("操作")])]),t._v(" "),t._l(t.postForm.postArray,function(e,a){return[a>0?r("tr",{key:a},[r("td",{staticStyle:{width:"30%"}},[t._v(t._s(t.showCity(e.districtidList)))]),t._v(" "),r("td",[r("el-form-item",{staticStyle:{width:"100%"},attrs:{prop:"postArray."+a+".firstNum",rules:{required:!0,message:"此项必填",trigger:"blur"}}},[r("el-input",{staticClass:"full-width",attrs:{type:"number"},model:{value:e.firstNum,callback:function(r){t.$set(e,"firstNum",r)},expression:"item.firstNum"}})],1)],1),t._v(" "),r("td",[r("el-form-item",{staticStyle:{width:"100%"},attrs:{prop:"postArray."+a+".firstPrice",rules:{required:!0,message:"此项必填",trigger:"blur"}}},[r("el-input",{staticClass:"full-width",attrs:{type:"number"},model:{value:e.firstPrice,callback:function(r){t.$set(e,"firstPrice",t._n(r))},expression:"item.firstPrice"}})],1)],1),t._v(" "),r("td",[r("el-form-item",{staticStyle:{width:"100%"},attrs:{prop:"postArray."+a+".addNum",rules:{required:!0,message:"此项必填",trigger:"blur"}}},[r("el-input",{staticClass:"full-width",attrs:{type:"number"},model:{value:e.addNum,callback:function(r){t.$set(e,"addNum",r)},expression:"item.addNum"}})],1)],1),t._v(" "),r("td",[r("el-form-item",{staticStyle:{width:"100%"},attrs:{prop:"postArray."+a+".addPrice",rules:{required:!0,message:"此项必填",trigger:"blur"}}},[r("el-input",{staticClass:"full-width",attrs:{type:"number"},model:{value:e.addPrice,callback:function(r){t.$set(e,"addPrice",r)},expression:"item.addPrice"}})],1)],1),t._v(" "),r("td",{staticStyle:{width:"20%"}},[r("city-area",{staticStyle:{display:"inline-block"},attrs:{index:a,data:e.districtidList},on:{change:t.getArea}}),t._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(e){t.del(a)}}},[t._v("删除")])],1)]):t._e()]}),t._v(" "),r("tr",[r("td",{staticClass:"align-left",attrs:{colspan:"6"}},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.addPost}},[t._v("为指定城市新增运费")])],1)])],2)])},staticRenderFns:[]};var g=r("C7Lr")(y,v,!1,function(t){r("RhzO")},"data-v-2e87dab4",null).exports,_={tpl:{expressName:"",isFree:!0,tplType:1},tplDetails:[]},b={mixins:[o.a],components:{postTable:g},data:function(){return{status:!1,formData:i()({},_),type:{courier:!0},rules:{"tpl.expressName":[s.a.required()],name:[s.a.required()],content:[s.a.required()]},courierData:[],errorMsg:""}},methods:{restData:function(t){this.errorMsg="","save"===t?(this.rest(),this.courierData=[]):this.getFormData(this.$route.query.id)},changeFree:function(t){t&&(this.courierData=[]),this.status=!t},getCourierData:function(t){this.courierData=t},getFormData:function(t){var e=this;this.loading=!0,Object(n.b)({id:t}).then(function(t){200===t.code&&(e.formData.tpl.id=t.data.id,e.formData.tpl.expressName=t.data.expressName,e.formData.tpl.isFree=t.data.isFree,e.formData.tpl.tplType=t.data.tplType,t.data.tplDetails.forEach(function(t){e.type.courier=!0,e.courierData=t.tplDetails}),e.loading=!1,e.status=!0)})},save:function(t){var e=this;this.$refs.form.validate(function(r){if(r){var a=i()({},e.formData);a.tplDetails=a.tplDetails.concat(e.courierData),a.tpl.isFree?e.saveForm(n.e,a,t,"/freight/list","list"):e.$refs.postTable.validateRequired().then(function(r){r&&e.saveForm(n.e,a,t,"/freight/list","list")})}})},update:function(){var t=this;this.$refs.form.validate(function(e){if(e){var r=i()({},t.formData);r.tplDetails=r.tplDetails.concat(t.courierData),r.tpl.isFree?t.updateForm(n.f,r,"/freight/list","list"):t.$refs.postTable.validateRequired().then(function(e){e&&t.updateForm(n.f,r,"/freight/list","list")})}})}},created:function(){"update"===this.$route.query.type?this.getFormData(this.$route.query.id):this.formData=i()({},{tpl:{expressName:"",isFree:!0,tplType:1},tplDetails:[]})}},C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("cms-breadcrumb",{attrs:{to:"/freight/list",type:"list"},on:{click:t.rest}},[r("li",[t._v(t._s(t.$route.name))])]),t._v(" "),r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-form-layout",attrs:{"element-loading-text":"正在操作"}},[r("el-form",{ref:"form",staticClass:"the-form",attrs:{rules:t.rules,model:t.formData,"label-width":"210px"}},[r("el-form-item",{attrs:{label:"名称",prop:"tpl.expressName",error:t.errorMessage.tpl_expressName}},[r("el-input",{attrs:{maxlength:"50"},model:{value:t.formData.tpl.expressName,callback:function(e){t.$set(t.formData.tpl,"expressName",e)},expression:"formData.tpl.expressName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"是否包邮",prop:"tpl.isFree",error:t.errorMessage.tpl_isFree}},[r("cms-switch",{on:{change:t.changeFree},model:{value:t.formData.tpl.isFree,callback:function(e){t.$set(t.formData.tpl,"isFree",e)},expression:"formData.tpl.isFree"}}),t._v(" "),r("span",{staticClass:"gray"},[t._v("切换至不包邮状态下,计价规则将重置")])],1),t._v(" "),r("el-form-item",{staticClass:"default",attrs:{label:"计价方式",prop:"tpl.tplType",error:t.errorMessage.content}},[r("el-radio-group",{model:{value:t.formData.tpl.tplType,callback:function(e){t.$set(t.formData.tpl,"tplType",e)},expression:"formData.tpl.tplType"}},[r("el-radio",{attrs:{label:1}},[t._v("件数")]),t._v(" "),r("el-radio",{attrs:{label:2}},[t._v("体积")]),t._v(" "),r("el-radio",{attrs:{label:3}},[t._v("重量")])],1)],1),t._v(" "),t.status?r("el-form-item",{staticClass:"default",attrs:{label:"计价规则",prop:"tpl.tplType",error:t.errorMessage.content}},[r("div",{staticClass:"gray"},[t._v("除指定地区外，其余均采用对应配送方式中的默认规则")])]):t._e(),t._v(" "),t.status?r("el-form-item",{staticClass:"the-error"},[r("post-table",{directives:[{name:"show",rawName:"v-show",value:t.type.courier,expression:"type.courier"}],ref:"postTable",attrs:{type:3,showType:t.formData.tpl.tplType,data:t.courierData},on:{change:t.getCourierData}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.errorMsg,expression:"errorMsg!=''"}],staticClass:"el-form-item__error"},[t._v(t._s(t.errorMsg))])],1):t._e()],1),t._v(" "),r("div",{staticClass:"cms-form-footer"},["update"==t.$route.query.type?r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(e){t.update()}}},[t._v("保存修改")]):t._e(),t._v(" "),"save"==t.$route.query.type?r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(e){t.save(!1)}}},[t._v("保存并新增")]):t._e(),t._v(" "),"save"==t.$route.query.type?r("cms-button",{directives:[{name:"color",rawName:"v-color"}],on:{click:function(e){t.save(!0)}}},[t._v("保存")]):t._e(),t._v(" "),r("cms-button",{attrs:{type:"rest"},on:{click:function(e){t.restData(t.$route.query.type)}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var k=r("C7Lr")(b,C,!1,function(t){r("1bFy")},null,null);e.default=k.exports}});
//# sourceMappingURL=21.3f5e242e8a1fc388eaab.js.map