import * as ActionTypes from '../contants/ActionTypes'

const initState = {
    weatherData:null,
    errInfo: null
}

export default function WeatherReducers(state = initState, action) {
    switch (action.type) {
        case ActionTypes.GET_WEATHER_SUCCESS:
            return Object.assign(
                {}, state, {
                    weatherData: action.weatherData,
                    errInfo: null,
                });
        case ActionTypes.GET_WEATHER_FAILURE:
            return Object.assign(
                {}, state, {
                    weatherData: action.weatherData,
                    errInfo: action.errInfo
                });
        default:
            return state;
    }

}
