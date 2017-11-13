/**
 * Created by lzq on 2017/5/8.
 * fetch 替代ajax
 */

let fetchJsonp = require('fetch-jsonp');
export default async (url = "", type = 'GET', reqData = {},flag = true,cb = null) => {//flag区别是jsonp还是ajax cors,当时ajax cors时需要cb

  type = type.toUpperCase();
  // 检测url
  if(type === 'GET') {
    let dataStr = '';
    Object.keys(reqData).forEach(key => {
      dataStr += key + '=' + reqData[key] +'&' ;
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  if(flag){
      //alert('fetchRes01');
    let fetchRes = await fetchJsonp(url, {
      // jsonpCallback: 'callback'
    });

    let res = await fetchRes.json();
    return res;
  }else{
    let requestConfig;
    if(false){//由于兼容性的问题不使用这种方法  || window.fetch && method === 'fetch'
      requestConfig = {

        method: type,   //请求方法
        headers: {
          'Accept': 'application/json',
          /*'Content-Type': 'application/json',
          'Access-Control-Allow-Methods':'GET, POST',
          'Access-Control-Allow-Origin':'*'*/
        },
        mode: "cors",
        cache: "force-cache"  // 缓存
      };
      if (type === 'POST') {
        Object.defineProperty(requestConfig, 'body', {
          value: JSON.stringify(reqData)
        });
      }
      let responseJson;
      try{
        let response = await fetch(url, requestConfig);
        responseJson = await response.json();
      }catch(error){
        console.log('fetch请求发生错误'+error);
      }

      return responseJson;

    }else{
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject();
      }

      let sendData = '';
      if (type === 'POST') {
        sendData = JSON.stringify(reqData);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response;
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            cb && cb(obj);
            //return obj
          } else {
            throw new Error(requestObj)
          }
        }
      }
    }

  }
}
