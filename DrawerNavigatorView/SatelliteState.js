/**
 * Created by Administrator on 2017/11/10.
 */
/**
 * Created by Administrator on 2017/11/10.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
    deviceWidth,
    deviceHeight,
    setSpText,
    scaleSize,
} from '../Utils/ScreenAdaptationUtil.js';
import {
    RequestUrl,
    Banner_Imgs,
    Constants
} from '../Utils/Constants.js';

class NetworkSettings extends Component{
    render(){
        return(
            <Text>
                NetworkSettings
            </Text>
        );
    }
}

//GNSS1
class GnssOne extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.2,backgroundColor:'rgb(255,0,0)'}}>

                </View>
                <View style={{flex:0.8,backgroundColor:'rgb(0,25,0)'}}>

                </View>
            </View>
        );
    }
}

//GNSS2
class GnssTwo extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.2,backgroundColor:'rgb(255,0,0)'}}>

                </View>
                <View style={{flex:0.8,backgroundColor:'rgb(0,25,0)'}}>

                </View>
            </View>
        );
    }
}

//测试GNSS
class TestGnss extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.2,backgroundColor:'rgb(255,0,0)'}}>

                </View>
                <View style={{flex:0.8,backgroundColor:'rgb(0,25,0)'}}>

                </View>
            </View>
        );
    }
}

//差分数据连接
class DifferentialDataConnection extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.2,backgroundColor:'rgb(255,0,0)'}}>

                </View>
                <View style={{flex:0.8,backgroundColor:'rgb(0,25,0)'}}>

                </View>
            </View>
        );
    }
}

export {
    GnssOne,
    GnssTwo,
    TestGnss,
    DifferentialDataConnection
};