import React, {Component} from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import {toastShort} from "../common/ToastUtils"
import {connect} from 'react-redux'
import * as WeatherAction from '../actions/WeatherAction'

class WeatherPage extends Component {
    _onBackAndroid = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
        let {getWeatherData} = this.props;
        getWeatherData();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
    }

    render() {
        let weatherData=this.props.weatherData;
        let cityName=weatherData?weatherData.basic.parent_city+":"+weatherData.basic.location:null;
        let updateTime=weatherData?weatherData.update.loc:null;
        let dailyForecastArray=weatherData?weatherData.daily_forecast:null;
        let currentTime=weatherData?dailyForecastArray[0].date:null;
        let tmpMin=weatherData?dailyForecastArray[0].tmp_min:null;
        let tmpMax=weatherData?dailyForecastArray[0].tmp_max:null;
        let windSc=weatherData?dailyForecastArray[0].wind_sc:null;
        return <View style={styles.container}>
            <Text style={styles.textStyle}>城市:{cityName}</Text>
            <Text style={styles.textStyle}>日期:{currentTime}</Text>
            <Text>最低温度:{tmpMin}</Text>
            <Text>最高温度:{tmpMax}</Text>
            <Text>风力:{windSc}</Text>
            <Text>更新时间:{updateTime}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        color:Colors.red,
        marginTop:5
    }
});

const mapStateToProps = (state, ownProps) => {
    let {navigation} = ownProps;
    let {errInfo, weatherData} = state.weather;
    return {
        errInfo: errInfo,
        weatherData: weatherData,
        navigation: navigation
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getWeatherData: () => {
            dispatch(WeatherAction.getWeatherData());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)

