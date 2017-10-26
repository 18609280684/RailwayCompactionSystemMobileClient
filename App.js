/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';
import {
    HomeDrawerNavigatorView,
} from  './DrawerNavigatorView/HomeDrawerNavigatorView.js';
import {
    DaydataView,
    DataDownloadingView,
    EquipmentDiagnosisView,
    SystemConfigurationView,
    NetworkSettingsView,
    SatelliteStateView,
    AlarmSettingView,
    SystemUpgradeView,
} from './DrawerNavigatorView/OthersDrawerNavigatorView.js';
import {
    deviceWidth,
    deviceHeight,
    setSpText,
    scaleSize,
} from './Utils/ScreenAdaptationUtil.js';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <RootStackNavigator />
    );
  }
}

const RootDrawerNavigator = DrawerNavigator({
    Home:{
        screen:HomeDrawerNavigatorView,
    },
    Daydata:{
        screen:DaydataView,
    },
    DataDownloading:{
        screen:DataDownloadingView,
    },
    EquipmentDiagnosis:{
        screen:EquipmentDiagnosisView,
    },
    SystemConfiguration:{
        screen:SystemConfigurationView,
    },
    NetworkSettings:{
        screen:NetworkSettingsView,
    },
    SatelliteState:{
        screen:SatelliteStateView,
    },
    AlarmSetting:{
        screen:AlarmSettingView,
    },
    SystemUpgrade:{
        screen:SystemUpgradeView,
    },
},{
    drawerWidth: scaleSize(400),
    drawerPosition: 'right',
    //drawerBackgroundColor:'#292929',
    contentOptions:{
        labelStyle:{
            fontSize:setSpText(26),
            color:'rgb(255,255,255)',
            justifyContent:'flex-start',
            backgroundColor:'#292929',
        },
    },
});

const RootStackNavigator = StackNavigator({
    Home:{
         screen:RootDrawerNavigator,
     },
    Daydata:{
        screen:DaydataView,
    },
    DataDownloading:{
        screen:DataDownloadingView,
    },
    EquipmentDiagnosis:{
        screen:EquipmentDiagnosisView,
    },
    SystemConfiguration:{
        screen:SystemConfigurationView,
    },
    NetworkSettings:{
        screen:NetworkSettingsView,
    },
    SatelliteState:{
        screen:SatelliteStateView,
    },
    AlarmSetting:{
        screen:AlarmSettingView,
    },
    SystemUpgrade:{
        screen:SystemUpgradeView,
    },
},{
    navigationOptions:({navigation}) => ({
            header:false,
    }),
});

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
});
