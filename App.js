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
  View,
  Image,
  TouchableHighlight,
  Alert,
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
import {
    RequestUrl,
    Banner_Imgs,
    Constants
} from './Utils/Constants.js';


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
        activeBackgroundColor:'#fece22',
        labelStyle:{
            fontSize:setSpText(26),
            color:'rgb(255,255,255)',
            justifyContent:'flex-start',
            backgroundColor:'#222222',

        },
    },

    contentComponent: props =>{
        //console.log(props.navigation);
        return (
            <SideBarView Myprops = {props}/>
        );
    },
});

class SideBarView extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            myText:'chenjianhui',
        };
      }

    render(){
        console.log('nnnnnnnnnnnnnnnnnnnnnnnnnn');
        const textSize = 16;
        return(
            <View style={{flex:1,backgroundColor:'#292929'}}>
                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('Daydata')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                       <Image
                           source={Banner_Imgs.DRAWVIEWPAGE_TodayData}
                           style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                       />
                       <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                           当日数据
                       </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>

                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('DataDownloading')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                        <Image
                            source={Banner_Imgs.DRAWVIEWPAGE_DataDownloading}
                            style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                        />
                        <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                            数据下载
                        </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>

                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('EquipmentDiagnosis')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                        <Image
                            source={Banner_Imgs.DRAWVIEWPAGE_EquipmentDiagnosis}
                            style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                        />
                        <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                            设备诊断
                        </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>

                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('SystemConfiguration')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                        <Image
                            source={Banner_Imgs.DRAWVIEWPAGE_SystemConfiguration}
                            style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                        />
                        <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                            系统配置
                        </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>

                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('NetworkSettings')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                        <Image
                            source={Banner_Imgs.DRAWVIEWPAGE_NetworkSettings}
                            style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                        />
                        <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                            网络设置
                        </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>

                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('SatelliteState')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                        <Image
                            source={Banner_Imgs.DRAWVIEWPAGE_SatelliteState}
                            style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                        />
                        <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                            卫星状态
                        </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>

                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('AlarmSetting')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                        <Image
                            source={Banner_Imgs.DRAWVIEWPAGE_AlarmSetting}
                            style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                        />
                        <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                            报警设置
                        </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>

                <TouchableHighlight style={{flex:1/8}} onPress={() => this.props.Myprops.navigation.navigate('SystemUpgrade')} underlayColor = '#fece22'>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                        <Image
                            source={Banner_Imgs.DRAWVIEWPAGE_SystemUpgrade}
                            style={{width:scaleSize(64),height:scaleSize(64),marginLeft:scaleSize(60)}}
                        />
                        <Text style={{fontSize:setSpText(textSize),color:'#ffffff',marginLeft:scaleSize(10)}}>
                            系统升级
                        </Text>
                    </View>
                </TouchableHighlight>
                <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
            </View>
        );
    }
}

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
            mode:'card',
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
