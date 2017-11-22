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
    FlatList

} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import ModalDropdown from 'react-native-modal-dropdown';
import Echarts from 'native-echarts';
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
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.2,flexDirection:'row',}}>
                    <View style={{flex:0.5,flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>

                        </Text>

                    </View>
                    <View style={{flex:0.5,flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>

                        </Text>

                    </View>
                </View>
                <View style={{flex:0.8,}}>
                    <View style={{flex:1/5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                            网络名称SSID:
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
                        <Text style={{fontSize:setSpText(24),color: '#333333',}}>                密码:</Text>
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
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                           最大连接数(个)
                        </Text>
                        <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                            <ModalDropdown
                                options={['1', '2', '3', '4', '5', '6', '7', '8']}
                                onSelect={(op) => Alert.alert('op:' + op)}
                                defaultValue = ' 密码至少应包含8个字母'
                                dropdownStyle = {{width:scaleSize(500)}}
                                textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                            />
                        </Image>
                    </View>
                    <View style={{flex:1/5,justifyContent:'center',alignItems:'center'}}>
                        <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                保存并应用
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

//数据同步设置
class DataSynchronizationSettings extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            slideButtonOne:false,
            slideButtonTwo:false,
            selectButtonOne:true,
            selectButtonTwo:false,
        };
      }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.2,flexDirection:'row'}}>
                    <View style={{flex:0.5,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333',marginLeft:scaleSize(30)}}>
                            设备名称：PDS100-071729
                        </Text>

                    </View>
                    <View style={{flex:0.5,flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>

                        </Text>

                    </View>
                </View>
                <View style={{flex:0.8,flexDirection:'row'}}>
                    <View style={{flex:0.5,justifyContent:'center',backgroundColor:'#ffffff'}}>
                        <View style={{flex:1/7,justifyContent:'center',alignItems:'center',marginLeft:scaleSize(50)}}>
                            <Text style={{fontSize:setSpText(28),color:'#333333',textAlignVertical:'center'}}>
                                ENH服务器设置
                            </Text>
                        </View>
                        <View style={{flex:1/7,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:scaleSize(50)}}>
                                <Text style={{fontSize:setSpText(24),color: '#333333',textAlign:'center',textAlignVertical:'center'}}>
                                   服务名称
                                </Text>
                                <Image style={{width:scaleSize(500),height:scaleSize(80),marginLeft:scaleSize(20),}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButtonLong}>
                                    <ModalDropdown
                                        options={['1号服务器', '2号服务器', '3号服务器', '4号服务器', '5号服务器', '6号服务器', '7号服务器', '8号服务器']}
                                        onSelect={(op) => Alert.alert('op:' + op)}
                                        defaultValue = '请选择服务器'
                                        dropdownStyle = {{width:scaleSize(500)}}
                                        textStyle = {{fontSize:setSpText(22),height:scaleSize(80),color:'#666666',marginLeft:scaleSize(5), textAlignVertical:'center'}}
                                    />
                                </Image>
                        </View>
                        <View style={{flex:1/7,flexDirection:'row',alignItems:'center',marginLeft:scaleSize(50),}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                自动同步
                            </Text>
                            <TouchableHighlight style={{width:scaleSize(250),height:scaleSize(120),alignItems:'center',justifyContent:'center'}} onPress={() => this.setState({
                                slideButtonOne:!this.state.slideButtonOne,
                            }) } underlayColor='#ffffff'>
                                <Image style={{width:scaleSize(188),height:scaleSize(90),marginLeft:scaleSize(20),}}  source={this.state.slideButtonOne?Banner_Imgs.NETWORKSETTINGPAGE_SlideOnButton:Banner_Imgs.NETWORKSETTINGPAGE_SlideOffButton}/>
                            </TouchableHighlight>
                        </View>
                        <View style={{flex:1/7,justifyContent:'center',alignItems:'center',marginLeft:scaleSize(50)}}>
                            <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    保存并应用
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{flex:1/7,alignItems:'center',marginLeft:scaleSize(50),flexDirection:'row'}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                                联通状态:
                            </Text>
                            <Image style={{width:scaleSize(90),height:scaleSize(90),marginLeft:scaleSize(20),}}  source={this.state.selectButtonOne?Banner_Imgs.NETWORKSETTINGPAGE_SelectOnButton:Banner_Imgs.NETWORKSETTINGPAGE_SelectOffButton}/>
                            <Text style={{fontSize:setSpText(24),color: '#333333'}}>
                                已连通
                            </Text>
                        </View>
                        <View style={{flex:1/7,justifyContent:'center',alignItems:'center'}}>
                        </View>
                        <View style={{flex:1/7,justifyContent:'center',alignItems:'center'}}>
                        </View>
                    </View>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff'}}>
                        <View style={{flex:1/7,justifyContent:'center',alignItems:'center',marginLeft:scaleSize(50)}}>
                            <Text style={{fontSize:setSpText(28),color:'#333333',textAlignVertical:'center'}}>
                                客户服务器设置
                            </Text>
                        </View>
                        <View style={{flex:1/7,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:scaleSize(50)}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                IP或域名:
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
                        <View style={{flex:1/7,flexDirection:'row',alignItems:'center',marginLeft:scaleSize(50),}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333',}}>        端口:</Text>
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
                        <View style={{flex:1/7,flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:scaleSize(50)}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333',}}>        密码:</Text>
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
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',}}>
                            <Text style={{fontSize:setSpText(26),color:'#333333'}}>
                                接口协议
                            </Text>
                            <TouchableHighlight style={{height:scaleSize(100),width:scaleSize(150),backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(30)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    选择
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{height:scaleSize(100),width:scaleSize(150),backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(80)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    上传
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{flex:1/7,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:setSpText(24),color: '#333333',}}>
                                自动同步
                            </Text>
                            <TouchableHighlight style={{width:scaleSize(250),height:scaleSize(120),alignItems:'center',justifyContent:'center'}} onPress={() => this.setState({
                                slideButtonTwo:!this.state.slideButtonTwo,
                            }) } underlayColor='#ffffff'>
                                <Image style={{width:scaleSize(188),height:scaleSize(90),marginLeft:scaleSize(20),}}  source={this.state.slideButtonTwo?Banner_Imgs.NETWORKSETTINGPAGE_SlideOnButton:Banner_Imgs.NETWORKSETTINGPAGE_SlideOffButton}/>
                            </TouchableHighlight>
                        </View>
                        <View style={{flex:1/7,justifyContent:'center',alignItems:'center'}}>
                            <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(300),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                                <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                    保存并应用
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

var ITEM_HEIGHT = 100;
//GNSS基站配置
class BaseStationConfiguration extends Component{


    _flatList;
    _keyExtractor = (item, index) => index;

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectButtonFengwo:false,
            selectButtonshuchuan:true,
            slideButton:'1',
            data:[{iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},{iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},
                {iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},{iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},
                {iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},{iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},
                {iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},{iP:'192.168.0.1',port:'3374',password:'*******',isdefault:''},],
        };
      }

    _header = () =>{
        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                        域名或IP地址
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                        端口
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                         密码
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                        是否默认
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <TouchableHighlight style={{height:scaleSize(80),width:scaleSize(150),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                        <Text style={{fontSize:setSpText(22),color:'#ffffff'}}>
                            新增
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    _renderItem = (item,index) =>{
        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.iP}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.port}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.password}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <TouchableHighlight style={{width:scaleSize(250),height:scaleSize(120),alignItems:'center',justifyContent:'center'}} onPress={() => this.setState({
                                slideButton:item.index + 1,
                            }) } underlayColor='#ffffff'>
                        <Image style={{width:scaleSize(188),height:scaleSize(90),marginLeft:scaleSize(20),}}  source={(this.state.slideButton == item.index + 1) ?Banner_Imgs.NETWORKSETTINGPAGE_SlideOnButton:Banner_Imgs.NETWORKSETTINGPAGE_SlideOffButton}/>
                    </TouchableHighlight>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <TouchableHighlight style={{height:scaleSize(80),width:scaleSize(150),backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                        <Text style={{fontSize:setSpText(22),color:'#ffffff'}}>
                            删除
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.15,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View style={{flex:0.5,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333',marginLeft:scaleSize(30)}}>
                            RTK通讯方式：
                        </Text>
                            <TouchableHighlight style={{width:scaleSize(110),height:scaleSize(110),alignItems:'center',justifyContent:'center'}} onPress={() => this.setState({
                                    selectButtonFengwo:true,
                                }) } underlayColor='#eeeeee'>
                                <Image style={{width:scaleSize(80),height:scaleSize(80),marginLeft:scaleSize(20),}}  source={this.state.selectButtonFengwo?Banner_Imgs.NETWORKSETTINGPAGE_SelectOnButton:Banner_Imgs.NETWORKSETTINGPAGE_SelectOffButton}/>
                            </TouchableHighlight>
                        <Text style={{fontSize:setSpText(24),color: '#333333',marginLeft:scaleSize(30)}}>
                            蜂窝网络
                        </Text>
                        <TouchableHighlight style={{width:scaleSize(110),height:scaleSize(110),alignItems:'center',justifyContent:'center'}} onPress={() => this.setState({
                                    selectButtonFengwo:false,
                                }) } underlayColor='#eeeeee'>
                             <Image style={{width:scaleSize(80),height:scaleSize(80),marginLeft:scaleSize(20),}}  source={this.state.selectButtonFengwo?Banner_Imgs.NETWORKSETTINGPAGE_SelectOffButton:Banner_Imgs.NETWORKSETTINGPAGE_SelectOnButton}/>
                        </TouchableHighlight>
                        <Text style={{fontSize:setSpText(24),color: '#333333',marginLeft:scaleSize(30)}}>
                            数传电台
                        </Text>
                    </View>
                    <View style={{flex:0.5,}}>
                        <Text style={{fontSize:setSpText(24),color: '#333333'}}>

                        </Text>

                    </View>
                </View>
                {this.state.selectButtonFengwo?
                <View style={{flex:0.85,}}>
                    <View style={{flex:0.15,backgroundColor:'#d4d4d4',justifyContent:'center',}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333',marginLeft:scaleSize(30)}}>
                            网络基站服务器
                        </Text>
                    </View>
                    <View style={{flex:0.7}}>
                        <FlatList
                            ref={(flatList)=>this._flatList = flatList}
                            ListHeaderComponent={this._header}
                            //ItemSeparatorComponent={this._separator}
                            getItemLayout={(item, index) => ( {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index} )}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                            //ListEmptyComponent={this._createEmptyView()}
                            data = {this.state.data}
                        />
                    </View>
                    <View style={{flex:0.15,flexDirection:'row',justifyContent:'center'}}>
                        <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(240),backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(30)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                测试
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{height:scaleSize(120),width:scaleSize(240),backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(80)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                保存
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                : <View style={{flex:0.85,alignItems:'center',justifyContent:'center'}}>
                    <View style={{flex:0.1,flexDirection:'row',justifyContent:'center',}}>
                        <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                            数传电台串口:COM
                        </Text>
                    </View>
                    <View style={{flex:0.1,flexDirection:'row',justifyContent:'center',}}>
                        <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                           波特率:9600
                        </Text>
                    </View>
                </View>
                }
            </View>
        );
    }
}

//SIM卡管理
class SIMCardManagement extends Component{

    render(){
        const option = {
            title : {
                text: '流量管理:',
                subtext: '日流量'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:[]
            },
            toolbox: {
                show : false,
                //feature : {
                //    mark : {show: true},
                //    dataView : {show: true, readOnly: false},
                //    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                //    restore : {show: true},
                //    saveAsImage : {show: true}
                //}
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'使用',
                    type:'line',
                    smooth:false,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[10, 12, 21, 54, 260, 830, 700]
                },

            ]
        };
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.2,}}>
                    <Text style={{fontSize:setSpText(27),color: '#333333',marginLeft:scaleSize(30)}}>
                        运营商:中国移动
                    </Text>
                    <Text style={{fontSize:setSpText(27),color: '#333333',marginLeft:scaleSize(30)}}>    网络:2G / 3G / 4G</Text>
                    <Text style={{fontSize:setSpText(27),color: '#333333',marginLeft:scaleSize(30)}}>    卡号:1064885230274</Text>
                </View>
                <View style={{flex:0.8,}}>
                    <View style={{flex:0.8,flexDirection:'row'}}>
                        <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                            <Echarts option={option} height = {300} width = {300}/>
                        </View>
                        <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                            <Echarts option={option} height = {300} width = {300}/>
                        </View>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                            提示：运营商的流量计算方式可能与本设备的计算方式不同，只记录我们自己设备上传的数据
                        </Text>
                    </View>
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