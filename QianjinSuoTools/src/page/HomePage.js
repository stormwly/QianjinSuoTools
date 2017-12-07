import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class HomePage extends Component {

    render() {
        return <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => this.props.navigation.navigate('Weather', {title: '天气'})}>
                <Image source={ConstantData.WEATHER_ICON} style={styles.image} resizeMode={'center'}/>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}
                              onPress={() =>alert('手电筒')}>
                <Image source={ConstantData.FLASH_LIGHT_ICON} style={styles.image} resizeMode={'center'}/>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}
                              onPress={() =>alert('指南针')}>
                <Image source={ConstantData.COMPRESS_ICON} style={styles.image} resizeMode={'center'}/>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        height: 120,
        width: 120,
        marginTop:10
    }
});
