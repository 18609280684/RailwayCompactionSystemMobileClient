/**
 * Created by Administrator on 2017/10/25.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {
    deviceWidth,
    deviceHeight,
    setSpText,
    scaleSize,
} from '../Utils/ScreenAdaptationUtil.js';
import {
    RequestUrl,
    Banner_Imgs
} from '../Utils/Constants.js'

class DaydataView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'当日数据',
        drawerIcon:({ tintColor }) => (
            <Image
            source={Banner_Imgs.DRAWVIEWPAGE_TodayData}
            style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(

            <Text>当日数据页面</Text>
        );
    }
}

class DataDownloadingView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'数据下载',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_DataDownloading}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(
            <Text>数据下载</Text>
        );
    }
}

class EquipmentDiagnosisView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'设备诊断',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_EquipmentDiagnosis}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(
            <Text>设备诊断</Text>
        );
    }
}

class SystemConfigurationView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'系统配置',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_SystemConfiguration}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(
            <Text>系统配置</Text>
        );
    }
}

class NetworkSettingsView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'网络设置',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_NetworkSettings}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(
            <Text>网络设置</Text>
        );
    }
}

class SatelliteStateView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'卫星状态',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_SatelliteState}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(
            <Text>卫星状态</Text>
        );
    }
}

class AlarmSettingView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'报警设置',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_AlarmSetting}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(
            <Text>报警设置</Text>
        );
    }
}

class SystemUpgradeView extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'系统升级',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_SystemUpgrade}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    render(){
        return(
            <Text>系统升级</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    drawerNavigatorIcon:{
        width:scaleSize(70),
        height:scaleSize(70),
    }
});


export {
    DaydataView,
    DataDownloadingView,
    EquipmentDiagnosisView,
    SystemConfigurationView,
    NetworkSettingsView,
    SatelliteStateView,
    AlarmSettingView,
    SystemUpgradeView,
};