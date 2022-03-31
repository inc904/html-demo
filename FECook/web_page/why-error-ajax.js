/**
 * 封装请求方法
 * @param {Object} url  接口请求地址
 * @param {Object} data 接口请求参数（无需请求方式参数，则此项可以为空，否则必须传）
 * @param {Object} params 请求方式参数（可以为空）
 */
 function _ajax(url, data, params) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url,
      type: (params && params.type) || 'post',
      dataType: (params && params.dataType) || 'JSON',
      data: data,
      success: function (res) {
        resolve(res)
      },
      error: function (reason) {
        console.log(reason.message)
        reject(reason)
      }
    })
  })
}
// 使用方法
// _ajax("/package/goodslist",params).then(function(data){
//      console.log(data)
// })
