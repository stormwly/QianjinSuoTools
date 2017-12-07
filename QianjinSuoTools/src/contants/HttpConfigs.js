'use strict'

 let HttpConfigs= {
    api: {
        baseUrl: 'http://rapapi.org/mockjs/26579/',
        weatherUrl:'https://free-api.heweather.com/s6/weather/forecast'

    },

    //基础请求参数
    baseParams: {
        accessToken: 'qjsToken',
        app_version: 100000,
    },

    map: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    },

    timeout:30000,
};

export default HttpConfigs;