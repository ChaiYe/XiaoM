import axios from 'axios'
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default function (url, data = {}, type = 'GET',) {
  let promise
  if (type === 'GET') {
    let queryStr = '';
    if (JSON.stringify(data) !== '{}') {
      Object.keys(data).forEach(item => {
        queryStr += item + '=' + data[item] + '&'
      })
    }
    url += '?' + queryStr.substring(0,queryStr.lastIndexOf('&'))
    promise = axios.get(url)
  }else if(type === 'POST'){
    promise = axios.post(url, data)
  }
  return promise
}
