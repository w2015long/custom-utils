  /**
    * `http`请求
    * @dec 适用`GET`和`POST`一样的拼接参数传参
    * @param {'GET'|'POST'} method 请求方法
    * @param {string} url 请求地址
    * @param {object} data 请求参数
    * @param {(result: any) => void} success 成功回调
    * @param {(error: XMLHttpRequest) => void} fail 失败回调
    */
    function ajax(method, url, data, success, fail) {
        const XHR = new XMLHttpRequest();
        /** 请求参数 */
        let sendData = '';
        // 解析对象传参
        for (const key in data) {
            sendData += '&' + key + '=' + data[key];
        }
        switch (method) {
            case 'GET':
                url = sendData ? `${url}?${sendData}` : url;
                sendData = null;
                break;

            case 'POST':
                if (sendData) {
                    sendData = sendData.slice(1);
                }
                break;
        }
        XHR.onreadystatechange = function () {
            if (XHR.readyState !== 4) return;
            if (XHR.status === 200 || XHR.status === 304) {
                if (typeof success === 'function') success(XHR.response);
            } else {
                if (typeof fail === 'function') fail(XHR);
            }
        }
        XHR.open(method, url, true);
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        XHR.send(sendData);
    }
