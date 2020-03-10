

axios.interceptors.request.use(config => { // 在此处统一配置公共参数  
  config.baseURL=cms.url
  config.headers['JSPGOU-Auth-Token'] = localStorage.getItem('token')
  config.headers['Redirect-Header'] = false
  return config
}, error => {
  Promise.reject(error) // 错误提示
})
axios.interceptors.response.use(response => {
    const code = response.data.code
    if (code === 501 || code === 502 || code === 503 || code === 506) {
      localStorage.setItem('token', '')
      // location.href = '${base}/login.htm'
    }
    return response.data
  },
  err => {
    return Promise.resolve(err)
  })


// 登录
function userLogin(params) {
  return axios.post('/login',Qs.stringify(params),{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
// 手机号登录
function loginPhone(params) {
  return axios.post('/login/phone', params)
}
// 退出登录
function logout(params) {
  return axios.post('/logout', params)
}
// 上传
function memberUpload(params) {
  return axios.post('/member/upload/o_upload ', params,{
    headers: {
      'Content-Type': 'mutipart/form-data'
    }
  })
}
// 会员绑定
function bindMember(params) {
  return axios.post('/binding/member', params)
}
// 邮箱注册并绑定
function emailBindMember(params) {
  return axios.post('/register/email/bindThird', params)
}
// 手机注册并绑定
function phoneBindMember(params) {
  return axios.post('/register/phone/bindThird', params)
}

// 获取图形验证码
function getCaptcha(params) {
  return axios.get('/common/kaptcha', {params:params})
}
// 微信小程序快捷登录
function moblieLogin(params) {
  return axios.get('/thirdParty/weixin/moblie', {params:params})
}
// 获取第三方绑定信息
function getThirdInfo(params) {
  return axios.get('/third/thirdInfo', {params:params})
}
// 微信小程序-支付
function memberPay(params) {
  return axios.post('/member/pay', params)
}

// 手机是否开启消息模板-公共
function getGlobalInfo(params) {
  return axios.get('/globalInfo', {params:params}, {
    hasToken: false
  })
}
// 发送手机短信验证码-注册、登录
function sendPhoneMsg(params) {
  return axios.post('/sms/sendPhoneMsg', params)
}
// 发送邮箱验证码-注册
function sendEmailMsg(params) {
  return axios.post('/sms/sendEmailMsg', params)
}
// 检查手机号是否绑定会员
function checkPhone(params) {
  return axios.get('/register/checkPhone', {params:params})
}
// 检查邮箱是否绑定会员
function checkEmail(params) {
  return axios.get('/register/checkEmail', {params:params})
}
// 检查用户名是否存在
function checkUsername(params) {
  return axios.get('/register/checkUsername', {params:params})
}
// 发送手机短信验证码-验证身份
function sendPhone(params) {
  return axios.post('/member/memberuser/sendPhone', params)
}
// 发送邮箱验证码-验证身份
function sendEmail(params) {
  return axios.post('/member/memberuser/sendEmail', params)
}
// 验证手机号验证码-验证身份
function verificationPhoneMsg(params) {
  return axios.post('/member/memberuser/verificationPhoneMsg', params)
}
// 验证邮箱验证码-验证身份
function verificationEmailMsg(params) {
  return axios.post('/member/memberuser/verificationEmailMsg',params)
}
// 修改绑定手机号
function updatePhone(params) {
  return axios.post('/member/memberuser/updatePhone', params)
}
// 修改绑定邮箱
function updateEmail(params) {
  return axios.post('/member/memberuser/updateEmail', params)
}
// 修改登陆密码
function updatePwd(params) {
  return axios.post('/member/memberuser/updatePwd', params)
}
// 修改支付密码
function updatePayPwd(params) {
  return axios.post('/member/memberuser/updatePayPwd', params)
}
// 校验用户输入手机号
function checkPhoneMsg(params) {
  return axios.get('/member/memberuser/checkPhoneMsg', {params:params})
}
// 校验用户输入邮箱
function checkEmailMsg(params) {
  return axios.get('/member/memberuser/checkEmailMsg', {params:params})
}
// 找回登陆密码-手机
function rectrievePhone(params) {
  return axios.post('/rectrieve/phone', params)
}
// 找回登陆密码-邮箱
function rectrieveEmail(params) {
  return axios.post('/rectrieve/email', params)
}


// 会员注册-使用邮箱
function registerEmail(params) {
  return axios.post('/register/email', params)
}
// 会员注册-使用手机号码
function registerPhone(params) {
  return axios.post('/register/phone', params)
}
// 修改会员的头像，姓名、性别、生日
function updateMemberExt(params) {
  return axios.post('/member/memberuser/updateMemberExt', params)
}
// 获取登录会员地址列表
function memberaddressList(params) {
  return axios.get('/member/memberaddress/list', {params:params})
}
// 获取登录会员地址详情
function memberaddressGet(params) {
  return axios.get('/member/memberaddress/get', {params:params})
}
// 新增单个会员地址
function memberaddressSave(params) {
  return axios.post('/member/memberaddress/save', params)
}
// 修改单个会员地址
function memberaddressUpdate(params) {
  return axios.post('/member/memberaddress/update', params)
}
// 删除单个会员地址
function memberaddressDelete(params) {
  return axios.get('/member/memberaddress/delete', {params:params})
}
// 改变是否默认地址状态
function memberaddressDefault(params) {
  return axios.get('/member/memberaddress/updateDefault', {params:params})
}
// 显示账户安全信息
function memberuserGet(params) {
  return axios.get('/member/memberuser/get', {params:params})
}
// 显示手机号、邮箱
function getInformation(params) {
  return axios.get('/member/memberuser/getInformation', {params:params})
}
// 获取登录会员的修改信息
function getMember(params) {
  return axios.get('/member/memberuser/getWapDetails', {params:params})
}
// 获取登录会员的个人信息
function getWap(params) {
  return axios.get('/member/memberuser/getWap', {params:params})
}

// 账户余额详情
function memberaccountGet(params) {
  return axios.get('/member/memberaccount/get', {params:params})
}
// 账户充值
function generateBusinessNo(params) {
  return axios.get('/member/memberrecharge/generateBusinessNo', {params:params})
}
// 红包明细列表
function memberredenvedetails(params) {
  return axios.get('/member/memberredenvedetails/page', {params:params})
}
// 积分明细列表
function memberscorePage(params) {
  return axios.get('/member/memberscore/page', {params:params})
}

// 用户优惠券列表
function memberCouponPage(params) {
  return axios.get('/member/coupon/page', {params:params})
}
// 我的优惠券详情
function memberCouponGet(params) {
  return axios.get('/member/coupon/get', {params:params})
}
// 活动优惠券列表
function couponPage(params) {
  return axios.get('/coupon/page', {params:params})
}
// 获取优惠券
function getCoupon(params) {
  return axios.get('/member/coupon/getCoupon', {params:params})
}

// 商品检索信息
function getProductSearch(params) {
  return axios.get('/product/search', {params:params}, {
    hasToken: false
  })
}
// 商品分类
function productcategory(params) {
  return axios.get('/productcategory/list', {params:params}, {
    hasToken: false
  })
}
// 商品-推荐列表
function recommendList(params) {
  return axios.get('/product/recommendList',{
    params:params},{
    hasToken: false
  })
}
// 商品信息详情
function productGet(params) {
  return axios.get('/product/get', {params:params}, {
    hasToken: false
  })
}
//添加商品到足迹
function myTracksSave(params) {
  return axios.post('/member/myTracks/save', params)
}

// 系统消息列表分页
function messageSyspage(params) {
  return axios.get('/member/message/syspage', {params:params})
}
// 查看系统消息详情
function messageGet(params) {
  return axios.get('/member/message/get', {params:params})
}
// 私人信息列表分页
function messagePripage(params) {
  return axios.get('/member/message/pripage', {params:params})
}
// 未读消息数量
function messageUnread(params) {
  return axios.get('/member/message/unread', {params:params})
}
// 删除消息
function messageDelete(params) {
  return axios.post('/member/message/delete', {params:params})
}
// 购买咨询
function productconsultation(params) {
  return axios.get('/member/productconsultation/pageMoblie', {params:params})
}
// 咨询详情
function getMobile(params) {
  return axios.get('/member/productconsultation/getMobile', {params:params})
}

// 关注商品
function memberfollowproductPage(params) {
  return axios.get('/member/memberfollowproduct/page', {params:params})
}
// 关注店铺
function followStorePage(params) {
  return axios.get('/member/followStore/page', {params:params})
}
// 取消关注商品
function memberfollowproductDelete(params) {
  return axios.get('/member/memberfollowproduct/delete', {params:params})
}
// 取消关注店铺
function followStoreDelete(params) {
  return axios.get('/member/followStore/delete', {params:params})
}
// 获取用户浏览的商品的全部分类
function getCategory(params) {
  return axios.get('/member/myTracks/getCategory', {params:params})
}
// 显示我的足迹的信息
function myTracksPage(params) {
  return axios.get('/member/myTracks/page', {params:params})
}
// 删除我的足迹
function myTracksDelete(params) {
  return axios.get('/member/myTracks/delete', {params:params})
}
// 商品规格列表
function producttypeattrList(params) {
  return axios.get('/producttypeattr/list', {params:params}, {
    hasToken: false
  })
}
// 商品评价信息
function ordercommentdfrontBasicInfo(params) {
  return axios.get('/ordercommentdfront/basicInfo', {params:params}, {
    hasToken: false
  })
}
// 店主推荐
function productStoreRecommends(params) {
  return axios.get('/product/storeRecommends', {params:params}, {
    hasToken: false
  })
}
// 评论列表分页
function ordercommentdfrontPage(params) {
  return axios.get('/ordercommentdfront/page', {params:params}, {
    hasToken: false
  })
}
// 获取店铺信息
function storeGet(params) {
  return axios.get('/store/get', {params:params}, {
    hasToken: false
  })
}
// 店铺头部信息
function storeHeadGet(params) {
  return axios.get('/storeHead/get', {params:params})
}
// 店铺头部信息
function storePromotionGet(params) {
  return axios.get('/storePromotion/get', {params:params})
}
// 店铺商品分类信息
function storeProCategorys(params) {
  return axios.get('/storeProductCate/proCategorys', {params:params})
}
// 收藏店铺
function followStoreSave(params) {
  return axios.get('/member/followStore/save', {params:params})
}
// 查询当前商品规格参数
function productAttrlist(params) {
  return axios.get('/product/attrList', {params:params}, {
    hasToken: false
  })
}
// 加入购物车
function cartAddProduct(params) {
  return axios.post('/member/cart/addProduct', params)
}
// 立即购买-下单
function orderSubmit(params) {
  return axios.post('/member/order/submit', params)
}

// 购物车信息
function memberCartGet(params) {
  return axios.get('/member/cart/get', {params:params})
}
// 移除购物车商品
function memberCartDelete(params) {
  return axios.post('/member/cart/delete', params)
}
// 修改购物车商品数量
function memberCartUpdateItem(params) {
  return axios.post('/member/cart/updateItem', params)
}
// 购物车商品移入收藏
function memberfollowproductSaveAll(params) {
  return axios.post('/member/memberfollowproduct/saveAll', params)
}

//获取订单全部列表
function memberOrderPage(params) {
  return axios.get('/member/order/page', {params:params})
}
//获取订单详情
function memberOrderGet(params) {
  return axios.get('/member/order/get', {params:params})
}
//订单预结算
function memberOrderPrePay(params) {
  return axios.post('/member/order/getPrePay', params)
}
// 订单预结算调整
function getPrePayAfterChange(params) {
  return axios.post('/member/order/getPrePayAfterChange', params)
}
// 取消订单
function orderCancel(params) {
  return axios.get('/member/order/cancel', {params:params})
}
// 提醒卖家发货
function orderRemind(params) {
  return axios.get('/member/order/remind', {params:params})
}
// 确认收货
function orderConfirm(params) {
  return axios.get('/member/order/confirm', {params:params})
}
// 延迟收货
function orderExtend(params) {
  return axios.get('/member/order/extendReceive', {params:params})
}
// 评价-商品信息
function getSaveComment(params) {
  return axios.get('/member/orderComment/getSaveComment', {params:params})
}
// 评价-新增
function saveComment(params) {
  return axios.post('/member/orderComment/save', params)
}
// 删除订单
function orderDelete(params) {
  return axios.post('/member/order/userCycle', params)
}
// 查询订单物流消息
function orderflowInfo(params) {
  return axios.get('/member/orderflow/info', {params:params})
}
// 售后撤销服务单
function refundRevoke(params) {
  return axios.get('/member/refund/revoke', {params:params})
}
// 查询订单物流消息
function logisticscompanyList(params) {
  return axios.get('/logisticscompany/list', {params:params})
}
// 买家发货
function refundDeliver(params) {
  return axios.post('/member/refund/deliver', params)
}
// 申请平台介入
function refundApplyIntervent(params) {
  return axios.post('/member/refund/applyIntervent', params)
}
// 买家收货-售后
function refundReceive(params) {
  return axios.get('/member/refund/receive', {params:params})
}

// 通过订单id查询支付状态
function queryOrderStatus(params) {
  return axios.post('/member/order/query', params)
}

// 退换货列表
function refundPage(params) {
  return axios.get('/member/refund/page', {params:params})
}
// 退换货详情
function refundGet(params) {
  return axios.get('/member/refund/get', {params:params})
}
// 申请售后
function refundApply(params) {
  return axios.post('/member/refund/apply', params)
}
// 修改售后申请
function refundUpateApply(params) {
  return axios.post('/member/refund/upateApply', params)
}

// 品牌专区列表
function brandpage(params) {
  return axios.get('/brandpage', {
    params: params
  })
}

// 品牌专区列表
function indexCateList(params) {
  return axios.get('/indexnavi/list', {
    params: params
  })
}
function getAreaCodeList(params){
  return axios.get('/area/findAll', {
    params: params
  })
}
function messageRead(params){
  return axios.post('/member/message/read',  params)
}



