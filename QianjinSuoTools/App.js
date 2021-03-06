import React, {Component} from 'react'
import store from './src/store/configureStore'
import {Provider} from 'react-redux'
import splash_screen from 'react-native-splash-screen'
import RepositoryUtils from './src/common/storage/RepositoryUtils'
import CodePush from "react-native-code-push";

// @CodePush({ checkFrequency: CodePush.CheckFrequency.MANUAL })
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };

import AppWithNavigationState from './src/routers/AppWithNavigationState'

export default class rootApp extends Component {

    /** Update is downloaded silently, and applied on restart (recommended) */
    sync() {
        CodePush.sync();
    }

    /** Update pops a confirmation dialog, and then immediately reboots the app */
    syncImmediate() {
        CodePush.sync(
            { installMode: CodePush.InstallMode.IMMEDIATE,//启动模式三种：ON_NEXT_RESUME、ON_NEXT_RESTART、IMMEDIATE
                updateDialog: {
                    appendReleaseDescription:true,//是否显示更新description，默认为false
                    descriptionPrefix:"更新内容：",//更新说明的前缀。 默认是” Description:
                    mandatoryContinueButtonLabel:"立即更新",//强制更新的按钮文字，默认为continue
                    mandatoryUpdateMessage:"",//- 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.
                    optionalIgnoreButtonLabel: '稍后',//非强制更新时，取消按钮文字,默认是ignore
                    optionalInstallButtonLabel: '后台更新',//非强制更新时，确认文字. Defaults to “Install”
                    optionalUpdateMessage: '有新版本了，是否更新？',//非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.
                    title: '更新提示'//要显示的更新通知的标题. Defaults to “Update available”.
                },
            },
        );
    }


    componentWillMount() {
        RepositoryUtils.init(true);//初始化操作
        CodePush.disallowRestart();//页面加载的禁止重启，在加载完了可以允许重启
        this.sync();
    }

    render() {
        return <Provider store={store}>
            <AppWithNavigationState/>
        </Provider>
    }

    componentDidMount() {
        splash_screen.hide();
        CodePush.allowRestart();//在加载完了可以允许重启
    }
}

rootApp = CodePush(codePushOptions)(rootApp);
