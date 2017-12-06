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
    TextInput,
    ScrollView,
    KeyboardAvoidingView
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
import ModalDropdown from 'react-native-modal-dropdown';

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
                        <Image style={{width:scaleSize(425),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                            <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(80)}}
                                    onChangeText={(text) => this.state.machineName = text}
                                    placeholder = "机器名称"
                                    placeholderTextColor  = 'gray'
                                    secureTextEntry  = {false}
                                    defaultValue = '4'
                                    underlineColorAndroid = 'transparent'
                            />
                        </Image>
                    </View>
                    <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                            机器类型
                        </Text>
                        <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                            <ModalDropdown
                                options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                                onSelect={(op) => Alert.alert('op:' + op)}
                                defaultValue = ' 请选择机器类型'
                                dropdownStyle = {{width:scaleSize(500)}}
                                textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                            />
                        </Image>
                    </View>
                </View>
                <View style={{flex:0.8,}}>
                    <View style={{flex:0.8,flexDirection:'row'}}>
                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:setSpText(30),color:'#333333'}}>
                                传感设备
                            </Text>
                        </View>
                        <View style={{flex:0.2,}}>
                            <Text style={{fontSize:setSpText(30),color:'#333333',flex:0.2,textAlignVertical:'center'}}>
                                机器类型
                            </Text>
                            <Text style={{fontSize:setSpText(24),color:'#333333',flex:0.2,textAlignVertical:'center'}}>
                                GNSS天线-左
                            </Text>
                            <Text style={{fontSize:setSpText(24),color:'#333333',flex:0.2,textAlignVertical:'center'}}>
                                GNSS天线-右
                            </Text>
                            <Text style={{fontSize:setSpText(24),color:'#333333',flex:0.2,textAlignVertical:'center'}}>
                                压实传感器
                            </Text>
                            <Text style={{fontSize:setSpText(24),color:'#333333',flex:0.2,textAlignVertical:'center'}}>
                                平板显示器
                            </Text>
                        </View>
                        <View style={{flex:0.5,}}>
                            <View style={{flex:0.2,justifyContent:'center'}}>
                                <Text style={{fontSize:setSpText(30),color:'#333333',}}>
                                    接口
                                </Text>
                            </View>
                            <View style={{flex:0.2,justifyContent:'center'}}>
                                <Image style={{width:scaleSize(500),height:scaleSize(80)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                                    <ModalDropdown
                                        options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                                        onSelect={(op) => Alert.alert('op:' + op)}
                                        defaultValue = ' 未设置'
                                        dropdownStyle = {{width:scaleSize(500)}}
                                        textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',textAlignVertical:'center',marginLeft:scaleSize(5)}}
                                    />
                                </Image>
                            </View>
                            <View style={{flex:0.2,justifyContent:'center'}}>
                                <Image style={{width:scaleSize(500),height:scaleSize(80)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                                    <ModalDropdown
                                        options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                                        onSelect={(op) => Alert.alert('op:' + op)}
                                        defaultValue = ' 未设置'
                                        dropdownStyle = {{width:scaleSize(500)}}
                                        textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666', textAlignVertical:'center',marginLeft:scaleSize(5)}}
                                    />
                                </Image>
                            </View>
                            <View style={{flex:0.2,justifyContent:'center'}}>
                                <Image style={{width:scaleSize(500),height:scaleSize(80)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                                    <ModalDropdown
                                        options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                                        onSelect={(op) => Alert.alert('op:' + op)}
                                        defaultValue = ' 未设置'
                                        dropdownStyle = {{width:scaleSize(500)}}
                                        textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666', textAlignVertical:'center',marginLeft:scaleSize(5)}}
                                    />
                                </Image>
                            </View>
                            <View style={{flex:0.2,justifyContent:'center'}}>
                                <Image style={{width:scaleSize(500),height:scaleSize(80),}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                                    <ModalDropdown
                                        options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                                        onSelect={(op) => Alert.alert('op:' + op)}
                                        defaultValue = ' 未设置'
                                        dropdownStyle = {{width:scaleSize(500)}}
                                        textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666', textAlignVertical:'center',marginLeft:scaleSize(5)}}
                                    />
                                </Image>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.2,flexDirection:'row'}}>
                        <View style={{flex:0.5,}}>

                        </View>
                        <View style={{flex:0.5,flexDirection:'row',justifyContent:'space-around'}}>
                            <TouchableHighlight style={{height:scaleSize(120),flex: 0.4,backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    保存并应用
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{height:scaleSize(120),flex: 0.4,backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(50),marginRight:scaleSize(50)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    高级配置
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

//机器信息
class MachineInformation extends Component{
    render(){
        var _scrollView: ScrollView;
        return(

            <View style={{flex:1,backgroundColor:'#eeeeee'}}>

                <View style={{flex:0.2,}}>

                </View>
                <View style={{flex:0.8,flexDirection:'row'}}>
                    <View style={{flex:0.4,}}>
                        <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                A:
                            </Text>
                            <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>

                                <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder = " GNSS2天线到地面的距离"
                                            placeholderTextColor  = 'gray'
                                            secureTextEntry  = {false}
                                            underlineColorAndroid = 'transparent'
                                />

                            </Image>
                        </View>
                        <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                B:
                            </Text>
                            <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>

                                <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder = " 直径"
                                            placeholderTextColor  = 'gray'
                                            secureTextEntry  = {false}

                                            underlineColorAndroid = 'transparent'
                                />

                            </Image>
                        </View>
                        <View style={{flex:0.6,justifyContent:'center',alignItems:'center'}}>
                            <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    保存并应用
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex:0.7}}>

                    </View>
                </View>
            </View>

        );
    }
}

//设备校验
class EquipmentCalibration extends Component{
    render(){
        var _scrollView: ScrollView;
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.2,flexDirection:'row'}}>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                             测距传感器
                        </Text>
                    </View>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center',}}>

                    </View>
                </View>
                <View style={{flex:0.8,flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:0.7}}>
                            <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                    滑轮读数（圈）:
                                </Text>
                                <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                    <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                                onChangeText={(text) => this.state.machineName = text}
                                                placeholder = " 滑轮读数"
                                                placeholderTextColor  = 'gray'
                                                secureTextEntry  = {false}
                                                underlineColorAndroid = 'transparent'
                                    />
                                </Image>
                            </View>
                            <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                    低点读数（圈）:
                                </Text>
                                <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                    <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                                onChangeText={(text) => this.state.machineName = text}
                                                placeholder = " 滑轮读数"
                                                placeholderTextColor  = 'gray'
                                                secureTextEntry  = {false}
                                                underlineColorAndroid = 'transparent'
                                    />
                                </Image>
                            </View>
                            <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                    高点读数（圈）:
                                </Text>
                                <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                    <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                                onChangeText={(text) => this.state.machineName = text}
                                                placeholder = " 滑轮读数"
                                                placeholderTextColor  = 'gray'
                                                secureTextEntry  = {false}
                                                underlineColorAndroid = 'transparent'
                                    />
                                </Image>
                            </View>
                            <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                    桩管高差（米）:
                                </Text>
                                <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                    <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                                onChangeText={(text) => this.state.machineName = text}
                                                placeholder = " 滑轮读数"
                                                placeholderTextColor  = 'gray'
                                                secureTextEntry  = {false}
                                                underlineColorAndroid = 'transparent'
                                    />
                                </Image>
                            </View>
                            <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                    计算结果(M/圈):
                                </Text>
                                <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                    <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                                onChangeText={(text) => this.state.machineName = text}
                                                placeholder = " 滑轮读数"
                                                placeholderTextColor  = 'gray'
                                                secureTextEntry  = {false}
                                                underlineColorAndroid = 'transparent'
                                    />
                                </Image>
                            </View>
                        </View>
                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                            <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    提交数据
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                    </View>
                </View>
            </View>
        );
    }
}

//施工工艺
class ConstructionTechnology extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                    <View style={{flex:0.8,flexDirection:'row'}}>
                        <View style={{flex:0.5}}>
                            <View style={{flex:0.2,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',textAlign:'center',textAlignVertical:'center',marginRight:scaleSize(20)}}>
                                    导入设计文件
                                </Text>
                                <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                    <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                         选择文件
                                    </Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{flex:0.8,}}>

                            </View>
                        </View>
                        <View style={{flex:0.5}}>
                            <View style={{flex:0.2,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',textAlign:'center',textAlignVertical:'center',marginRight:scaleSize(20)}}>
                                    工地校验文件的导入
                                </Text>
                                <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                    <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                        选择文件
                                    </Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{flex:0.8,}}>

                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                保存
                            </Text>
                        </TouchableHighlight>
                    </View>
            </View>
        );
    }
}

//主页配置
class HomePageConfiguration extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                        位置1
                    </Text>
                    <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                        <ModalDropdown
                            options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                            onSelect={(op) => Alert.alert('op:' + op)}
                            defaultValue = ' 请选择机器类型'
                            dropdownStyle = {{width:scaleSize(500)}}
                            textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                        />
                    </Image>
                </View>
                <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                        位置2
                    </Text>
                    <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                        <ModalDropdown
                            options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                            onSelect={(op) => Alert.alert('op:' + op)}
                            defaultValue = ' 请选择机器类型'
                            dropdownStyle = {{width:scaleSize(500)}}
                            textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                        />
                    </Image>
                </View>
                <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                        位置3
                    </Text>
                    <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                        <ModalDropdown
                            options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                            onSelect={(op) => Alert.alert('op:' + op)}
                            defaultValue = ' 请选择机器类型'
                            dropdownStyle = {{width:scaleSize(500)}}
                            textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                        />
                    </Image>
                </View>
                <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                        位置4
                    </Text>
                    <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                        <ModalDropdown
                            options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                            onSelect={(op) => Alert.alert('op:' + op)}
                            defaultValue = ' 请选择机器类型'
                            dropdownStyle = {{width:scaleSize(500)}}
                            textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                        />
                    </Image>
                </View>
                <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                       位置5
                    </Text>
                    <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                        <ModalDropdown
                            options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                            onSelect={(op) => Alert.alert('op:' + op)}
                            defaultValue = ' 请选择机器类型'
                            dropdownStyle = {{width:scaleSize(500)}}
                            textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                        />
                    </Image>
                </View>
                <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                        位置6
                    </Text>
                    <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                        <ModalDropdown
                            options={['单钢轮单刚轮压路机-双天线', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                            onSelect={(op) => Alert.alert('op:' + op)}
                            defaultValue = ' 请选择机器类型'
                            dropdownStyle = {{width:scaleSize(500)}}
                            textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                        />
                    </Image>
                </View>
                <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                        <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                            保存
                        </Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

class MachineSize extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectButton:true,
        };
      }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.1,backgroundColor:'#ffffff',flexDirection:'row'}}>
                    <View style={{flex:0.5,flexDirection:'row',justifyContent:'center'}}>
                        <TouchableHighlight style={{height:scaleSize(120),flex: 0.4,backgroundColor:(this.state.selectButton?'#fece22':'#393939'),alignItems:'center',justifyContent:'center'}} onPress={() => this.setState({
                            selectButton:true,
                        })} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:(this.state.selectButton?'#000000':'#ffffff')}}>
                                机器尺寸
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{height:scaleSize(120),flex: 0.4,backgroundColor:(!this.state.selectButton?'#fece22':'#393939'),alignItems:'center',justifyContent:'center',marginLeft:scaleSize(50),}} onPress={() => this.setState({
                             selectButton:false,
                        }) } underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:(!this.state.selectButton?'#000000':'#ffffff')}}>
                                天线位置
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:0.5}}>

                    </View>
                </View>

                { this.state.selectButton ?
                    <View style={{flex:0.9,flexDirection:'row'}}>

                        <View style={{flex:0.6}}>
                            <View style={{flex:0.6}}>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        D:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="振动轮直径"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        E:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="振动轮宽度"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        G:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="振动轮轴心到震动轮托盘的最前面"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        H:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="振动轮轴心到车头部的距离"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex:0.4,alignItems:'center'}}>
                                <TouchableHighlight
                                    style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}}
                                    onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                    <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                        保存
                                    </Text>
                                </TouchableHighlight>
                                <Text style={{fontSize:setSpText(18),color:'#333333'}}>D：振动轮直径 E：振动轮宽度</Text>
                                <Text style={{fontSize:setSpText(18),color:'#333333'}}>G：振动轮轴心到振动轮拖盘的最前面距离</Text>
                                <Text style={{fontSize:setSpText(18),color:'#333333'}}>H：振动轮轴心到车头部的距离</Text>
                            </View>
                        </View>
                        < View style={{flex:0.4,}}>

                        </View>
                    </View>
                    :
                    <View style={{flex:0.9,flexDirection:'row'}}>
                        <View style={{flex:0.6}}>
                            <View style={{flex:0.6}}>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        A:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="振动轮轴心到天线的横向距离"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        B:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="天线到震动轮底部的垂直距离"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        C1:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="天线1与振动轮右侧水平距离"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                                <View
                                    style={{flex:1/4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                        C2:
                                    </Text>
                                    <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}
                                           source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                        <TextInput
                                            style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                            onChangeText={(text) => this.state.machineName = text}
                                            placeholder="天线2与振动轮右侧水平距离"
                                            placeholderTextColor='gray'
                                            secureTextEntry={false}
                                            underlineColorAndroid='transparent'
                                        />
                                    </Image>
                                    <Text style={{fontSize:setSpText(18),color:'gray'}}>
                                        数字（两位小数）、不为空
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex:0.4,alignItems:'center'}}>
                                <TouchableHighlight
                                    style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}}
                                    onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                    <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                        保存
                                    </Text>
                                </TouchableHighlight>
                                <Text style={{fontSize:setSpText(18),color:'#333333'}}>A：振动轮轴心到天线的横向距离</Text>
                                <Text style={{fontSize:setSpText(18),color:'#333333'}}>B：天线到振动轮底部的垂直距离</Text>
                                <Text style={{fontSize:setSpText(18),color:'#333333'}}>C1、C2：天线与振动轮右侧水平距离</Text>
                            </View>
                        </View>
                        < View style={{flex:0.4,}}>

                        </View>
                    </View>
                }
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
    MachineSize,
};