import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Switch
} from 'react-native';

var {NativeModules} = require('react-native');
var {lightSwitchOn, lightSwitchOff} = NativeModules.FlashUtils;
var {showCompressView} = NativeModules.CompressUtils;


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switchIsOn: false,
        }
    }

    render() {
        return <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => this.props.navigation.navigate('Weather', {title: '天气'})}>
                <Image source={ConstantData.WEATHER_ICON} style={styles.image} resizeMode={'center'}/>
            </TouchableOpacity>

            <View style={styles.flashContainer}>
                <Image source={ConstantData.FLASH_LIGHT_ICON} style={styles.image} resizeMode={'center'}/>
                <Switch
                    onValueChange={(value) => this.switchFlash(value)}
                    onTintColor={Colors.yellow}
                    value={this.state.switchIsOn}/>
            </View>

            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => showCompressView()}>
                <Image source={ConstantData.COMPRESS_ICON} style={styles.image} resizeMode={'center'}/>
            </TouchableOpacity>
        </View>
    }

    switchFlash(value) {
        this.setState({switchIsOn: value});
        if (value) {
            lightSwitchOn();
        } else {
            lightSwitchOff();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    flashContainer: {
        flexDirection: 'row'
    },
    image: {
        height: 120,
        width: 120,
        marginTop: 10
    },
});
