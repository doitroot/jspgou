webpackJsonp([89],{Quw4:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=s("IGnx"),i={data:function(){return{formData:{userName:"",password:"",captcha:"",sessionId:""},captchaImg:"",isCaptcha:!1,activeName:"name",errorStatus:!1,errorMsg:"",isLogin:!1,storeInfo:{}}},methods:{getGobalInfo:function(){var t=this;Object(o.c)().then(function(a){t.storeInfo=a.data})},login:function(){var t=this;if(!this.isLogin){if(this.errorStatus=!1,this.errorMsg="",""===this.formData.userName)return this.errorStatus=!0,this.errorMsg="请输入用户名",!1;if(""===this.formData.password)return this.errorStatus=!0,this.errorMsg="请输入密码",!1;this.isLogin=!0,this.$store.dispatch("login",this.formData).then(function(a){200===a.code?t.$store.dispatch("setRouter",a.data.auth).then(function(a){t.$router.addRoutes(a),t.$routerLink("/index")}):(t.isLogin=!1,10512===a.code&&(t.errorStatus=!0,t.errorMsg="账户名或者密码错误",a.data.nextNeedCaptcha&&(t.isCaptcha=!0),t.getCaptcha()),504===a.code&&(t.errorStatus=!0,t.errorMsg="验证码错误",t.getCaptcha()))})}},changeValue:function(){this.errorStatus=!1},getFocus:function(t){this.activeName=t},getCaptcha:function(){var t=this;Object(o.b)().then(function(a){t.captchaImg="data:image/jpeg;base64,"+a.img,t.formData.sessionId=a.sessionId})}},created:function(){this.getGobalInfo(),this.getCaptcha()},mounted:function(){document.querySelector("#loading").style.display="none"}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cms-login__container"},[s("div",{staticClass:"cms-login__warpper"},[s("div",{staticClass:"login__element"}),t._v(" "),s("div",{staticClass:"cms-login__inner"},[s("div",{staticClass:"cms-login__logo"},[s("img",{staticClass:"logo__img",attrs:{src:t.$cms.filterUrl(t.storeInfo.businessLoginLogoUrl)}})]),t._v(" "),s("div",{staticClass:"login-form"},[s("form",{staticStyle:{position:"relative"}},[s("div",{staticClass:"login-form__group"},[s("span",{staticClass:"login-form__suffix"},[s("i",{staticClass:"iconfont icon-yonghu1 login-icon",class:"name"==t.activeName?"login-icon--active":""})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.userName,expression:"formData.userName"}],staticClass:"login-form__input",attrs:{type:"text",autofocus:"autofocus",placeholder:"请输入用户名",spellcheck:"false"},domProps:{value:t.formData.userName},on:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.login(a):null},input:[function(a){a.target.composing||t.$set(t.formData,"userName",a.target.value)},t.changeValue],focus:function(a){t.getFocus("name")}}})]),t._v(" "),s("div",{staticClass:"login-form__group"},[s("span",{staticClass:"login-form__suffix"},[s("i",{staticClass:"iconfont icon-mima1 login-icon",class:"password"==t.activeName?"login-icon--active":""})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"login-form__input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.formData.password},on:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.login(a):null},input:[function(a){a.target.composing||t.$set(t.formData,"password",a.target.value)},t.changeValue],focus:function(a){t.getFocus("password")}}})]),t._v(" "),t.isCaptcha?s("div",{staticClass:"login-form__group"},[s("span",{staticClass:"login-form__suffix"},[s("i",{staticClass:"iconfont icon-dunpai login-icon",class:"captcha"==t.activeName?"login-icon--active":""})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],staticClass:"login-form__input login-form__input--captcha",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.formData.captcha},on:{input:[function(a){a.target.composing||t.$set(t.formData,"captcha",a.target.value)},t.changeValue],focus:function(a){t.getFocus("captcha")}}}),t._v(" "),s("img",{staticClass:"login-form__captcha",attrs:{src:t.captchaImg},on:{click:t.getCaptcha}})]):t._e(),t._v(" "),t.errorStatus?s("div",{staticClass:"login-form__error animated"},[s("i",{staticClass:"el-icon-warning"}),t._v("\n            "+t._s(t.errorMsg))]):t._e(),t._v(" "),s("button",{staticClass:"login-form__submit",class:t.isLogin?"login-form__submit--active":"",attrs:{type:"button"},on:{click:t.login}},[t.isLogin?s("span",[s("i",{staticClass:"el-icon-loading"}),t._v("\n            登录中...\n          ")]):s("span",[t._v("登录")])])])])])]),t._v(" "),s("div",{staticClass:"copyright"},[t._v(t._s(t.storeInfo.icp))])])},staticRenderFns:[]},n=s("C7Lr")(i,e,!1,null,null,null);a.default=n.exports}});
//# sourceMappingURL=89.ff57936a92cb190e4e7f.js.map