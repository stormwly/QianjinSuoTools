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
        return <View style={styles.container}>
            <Text>天气预报</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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

