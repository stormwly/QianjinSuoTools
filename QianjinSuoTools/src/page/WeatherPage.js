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
import * as HomeListAction from '../actions/HomeListAction'

class WeatherPage extends Component {
    _onBackAndroid = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
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
        justifyContent:'center',
        alignItems:'center'
    },
});

const mapStateToProps = (state, ownProps) => {
    let {navigation} = ownProps;
    let {isLoading, financeList, errInfo, isRefreshing} = state.homeList;
    return {
        isLoading: isLoading,
        financeList: financeList,
        errInfo: errInfo,
        isRefreshing: isRefreshing,
        navigation: navigation
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeList: () => {
            dispatch(HomeListAction.getHomeList());
        },
        getNetHomeList: (financeList) => {
            dispatch(HomeListAction.getNetHomeList(financeList));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)

