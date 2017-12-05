import React from 'react';
import {View} from 'react-native'
import {StackNavigator} from 'react-navigation'
//公共配置文件
import Global from '../common/Global'
import StackOptions from './StackOptions'
import ThemeStyles from '../../res/styles/ThemeStyles'

import HomePage from '../page/HomePage'
import WeatherPage from '../page/WeatherPage'
/*
 *初始化StackNavigator，
 * RouteConfigs 参数表示各个页面路由配置，
 * 类似于android原生开发中的 AndroidManifest.xml ，
 * 它是让导航器知道需要导航的路由对应的页面
 * Home 为路由名称,screen 属性值HomePage,
 */
export default RouteConfigs = StackNavigator({
    //默认加载第一个界面,这里用来注册要跳转的界面,类似于android中的Manifest.xml文件
    Home: {
        screen: HomePage,
        navigationOptions:{
            headerTitle:'工具集',
            headerStyle:ThemeStyles.headerStyle,
            headerTitleStyle:ThemeStyles.headerTitleStyle,
            gestureResponseDistance:{horizontal: 300}
        }
    },

    Weather:{
        screen:WeatherPage,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
},)

