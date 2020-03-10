var tipFlag=false
var cms = {
  token: localStorage.getItem('token'),
  url: '',
  imgUrl:'',
}


//vue 方法扩展

Vue.prototype.$float= function(s) {
  if(s&&s!=0){
    var n =2
    var s = parseFloat((s + '').replace(/[^\d\.-]/g, '')) + ''
    const l = s.split('.')[0].split('').reverse()
    let r = s.split('.')[1]
    var t = ''
    for (var i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
    }
    if (!r) {
      r = '0'
    }
    if (r.length < n) {
      for (let i = r.length; i < n; i++) {
        r += '0'
      }
    } else {
      r = r.substr(0, n)
    }
    return t.split('').reverse().join('') + '.' + r
  }
  else{
   
    return '0.00'
  }
}
 /**
   * @description [throttle 节流函数]
   * @param {Function} fn 延时调用函数
   * @param {Number} delay 延迟多长时间
   * @param {Number} atleast 至少多长时间触发一次
   * @return {Function} 延迟执行的方法
   */
Vue.prototype.$throttle = function(fn, delay, atleast) {
  let timer = null
  let previous = null
  return function () {
    let now = +new Date()
    if (!previous) previous = now
    if (atleast && now - previous > atleast) {
      fn()
      previous = now
      clearTimeout(timer)
    } else {
      clearTimeout(timer)
      timer = setTimeout(function () {
        fn()
        previous = null
      }, delay)
    }
  }
}


