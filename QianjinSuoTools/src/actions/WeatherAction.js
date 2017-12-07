'use strict'
import * as ActionTypes from '../contants/ActionTypes'
import RepositoryUtils from '../common/storage/RepositoryUtils'
import {toastShort} from "../common/ToastUtils"

export const getWeatherData = () => {
    return dispatch => {
        RepositoryUtils.init().getCacheDataByKey(StorageKeys.weatherData).then(weatherData => {
            dispatch(getWeatherDataSuccess(weatherData));
        }).catch(err => {
            console.log(err)
            dispatch(getWeatherDataFail(err.message));
        });
    }

}

let getWeatherDataSuccess = (weatherData) => {
    return {
        type: ActionTypes.GET_WEATHER_SUCCESS,
        weatherData
    }
}

let getWeatherDataFail = (errInfo) => {
    return {
        type: ActionTypes.GET_WEATHER_FAILURE,
        errInfo,
    }
}