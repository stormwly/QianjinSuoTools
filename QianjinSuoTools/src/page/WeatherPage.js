import React, {Component} from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {toastShort} from "../common/ToastUtils"
import {connect} from 'react-redux'
import * as HomeListAction from '../actions/HomeListAction'

class WeatherPage extends Component {
    componentWillMount() {
        let {getHomeList} = this.props;
        getHomeList();
        this.checkNetWork();
    }

    checkNetWork() {
        IOS ?
            NetUtils.listenerNetworkState(() => {
                NetUtils.addEventListener(NetUtils.TAG_NETWORK_CHANGE, this.handleMethod);
            })
            :
            NetUtils.listenerNetworkState((isConnected) => {
                if (!isConnected) {
                    toastShort(NetUtils.NOT_NETWORK);
                }
            });
    }

    componentWillUnmount() {
        NetUtils.removeEventListener(NetUtils.TAG_NETWORK_CHANGE, this.handleMethod);
    }

    // 检测网络状态
    handleMethod = (isConnected) => {
        if (!isConnected) {
            toastShort(NetUtils.NOT_NETWORK);
        }
    };

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

    image:{
        height:120,
        width:120,
        marginTop:20
    }
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

