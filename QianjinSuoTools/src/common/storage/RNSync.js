'use strict'
var Geolocation = require('Geolocation');
import RepositoryUtils from './RepositoryUtils'

let RNSync = {

    //获取天气数据
    weatherData(params) {
        let {syncParams: {resolve, reject}} = params;
        if (resolve === undefined || reject === undefined) {
            return
        }
        Geolocation.getCurrentPosition(
            location => {
                var result = "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp;
                console.log(result);

                HttpUtils.getWeather(HttpConfigs.api.weatherUrl, {
                    key: ConstantData.WEATHER_KEY,
                    location:location.coords.latitude+","+location.coords.longitude,
                }).then(response => {
                        //请求成功
                        if (response) {
                            let weatherArray=response.HeWeather6;
                            let weatherData=weatherArray[0];
                            console.log(weatherData);
                            if (weatherData.status ==='ok') {
                                resolve && resolve(weatherData);
                                RepositoryUtils.init().saveCacheDataByKey(StorageKeys.weatherData,weatherData);
                            } else {
                                reject && reject(new Error('获取天气失败'))
                            }
                        } else {
                            reject && reject(new Error('服务端返回数据为空!'))
                        }
                    }
                ).catch(err => {
                    //请求失败
                    reject && reject(err);
                })
            },
            error => {
                console.log("获取位置失败：" + error);
            }
        );

    },
}

export default RNSync;
