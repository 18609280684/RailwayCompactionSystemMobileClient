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

//WIFI热点设置
class WIFIHotspots extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.2,backgroundColor:'rgb(255,0,0)',flexDirection:'row',justifyContent}}>
                    <View style={{flex:0.5,flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                            机器名称
                        </Text>

                    </View>
                    <View style={{flex:0.5,flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                            机器名称
                        </Text>

                    </View>
                </View>
                <View style={{flex:0.8,backgroundColor:'rgb(0,25,0)'}}>

                </View>
            </View>
        );
    }
}

//数据同步设置
class DataSynchronizationSettings extends Component{
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

//GNSS基站配置
class BaseStationConfiguration extends Component{
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

//SIM卡管理
class SIMCardManagement extends Component{
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
    WIFIHotspots,
    DataSynchronizationSettings,
    BaseStationConfiguration,
    SIMCardManagement
};