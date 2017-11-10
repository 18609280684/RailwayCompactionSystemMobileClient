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
    Alert,
    TextInput
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

class SystemConfiguration extends Component{
    render(){
        return(
            <Text>SystemConfiguration</Text>
        );
    }
}

//机器配置
class MachineConfiguration extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            machineName:''
        };
      }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.2,justifyContent:'space-around',flexDirection:'row'}}>
                    <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                            机器名称
                        </Text>
                        <TextInput  style={{width:scaleSize(360),fontSize:setSpText(11),color:'#F3D671'}}
                                    onChangeText={(text) => this.state.machineName = text}
                                    placeholder = "机器名称"
                                    placeholderTextColor  = 'gray'
                                    secureTextEntry  = {false}
                                    underlineColorAndroid = 'transparent'
                        />
                    </View>
                    <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                            机器类型
                        </Text>

                    </View>
                </View>
                <View style={{flex:0.8,backgroundColor:'rgb(0,25,0)'}}>

                </View>
            </View>
        );
    }
}

//机器信息
class MachineInformation extends Component{
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

//设备校验
class EquipmentCalibration extends Component{
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

//施工工艺
class ConstructionTechnology extends Component{
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

//主页配置
class HomePageConfiguration extends Component{
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
    MachineConfiguration,
    MachineInformation,
    EquipmentCalibration,
    ConstructionTechnology,
    HomePageConfiguration,
};