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
import Echarts from 'native-echarts';

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

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            beiDouGnss:true,
            GLONASSGnss:false,
            GPSGnss:false,
            GalileoGnss:false,
        };
      }

    render(){
        var data = [];
        for (var i = 0; i <= 10; i++) {
            var theta = i / 100 * 300;
            var r = 10 * (1 + Math.sin(theta / 180 * Math.PI));
            data.push([r, theta]);
        }
       const option = {
            //title: {
            //    text: '极坐标双数值轴'
            //},
            //legend: {
            //    data: ['line']
            //},
            polar: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            angleAxis: {
                type: 'value',
                //startAngle: 0
            },
            radiusAxis: {
            },
            series: [{
                coordinateSystem: 'polar',
                name: 'line',
                type: 'effectScatter',
                data: data
            }]
        };

        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.3,}}>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            北纬：30°19.3430′N
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            东经：104°24.1837′E
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            高程：201.5
                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            A：30°19.3430′N
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            B：104°24.1837′E
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            利用卫星数量：24
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            PDOP：13
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            GNSS误差
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            水平：0.003 米
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            高程：0.004 米
                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            定位状态：RTK-固定
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                    </View>
                </View>
                <View style={{flex:0.7,flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1/7}}>

                        </View>
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>     BeiDou:</Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:true,
                                    GLONASSGnss:false,
                                    GPSGnss:false,
                                    GalileoGnss:false,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.beiDouGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                8
                            </Text>
                        </View>
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                GLONASS:
                            </Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:false,
                                    GLONASSGnss:true,
                                    GPSGnss:false,
                                    GalileoGnss:false,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.GLONASSGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                5
                            </Text>
                        </View>
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>            GPS:</Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:false,
                                    GLONASSGnss:false,
                                    GPSGnss:true,
                                    GalileoGnss:false,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.GPSGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                10
                            </Text>
                        </View>
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>       Galileo:</Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:false,
                                    GLONASSGnss:false,
                                    GPSGnss:false,
                                    GalileoGnss:true,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.GalileoGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                13
                            </Text>
                        </View>
                        <View style={{flex:1/7}}>

                        </View>
                        <View style={{flex:1/7}}>

                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Echarts option={option} height = {300} width = {300}/>
                    </View>
                </View>
            </View>
        );
    }
}

//GNSS2
class GnssTwo extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            beiDouGnss:false,
            GLONASSGnss:false,
            GPSGnss:false,
            GalileoGnss:true,
        };
    }

    render(){

        var data = [];
        for (var i = 0; i <= 5; i++) {
            var theta = i / 100 * 300;
            var r = 10 * (1 + Math.sin(theta / 180 * Math.PI));
            data.push([r, theta]);
        }
        const option = {
            //title: {
            //    text: '极坐标双数值轴'
            //},
            //legend: {
            //    data: ['line']
            //},
            polar: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            angleAxis: {
                type: 'value',
                //startAngle: 0
            },
            radiusAxis: {
            },
            series: [{
                coordinateSystem: 'polar',
                name: 'line',
                type: 'effectScatter',
                data: data
            }]
        };
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.3,}}>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            北纬：30°19.3430′N
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            东经：104°24.1837′E
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            高程：201.5
                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            A：30°19.3430′N
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            B：104°24.1837′E
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            利用卫星数量：24
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            PDOP：13
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            GNSS误差
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            水平：0.003 米
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            高程：0.004 米
                        </Text>
                    </View>
                    <View style={{flex:1/5,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                            定位状态：RTK-固定
                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                        <Text style={{fontSize:setSpText(27),color: '#333333'}}>

                        </Text>
                    </View>
                </View>
                <View style={{flex:0.7,flexDirection:'row'}}>
                    <View style={{flex:0.5}}>


                        <View style={{flex:1/7}}>

                        </View>

                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>     BeiDou:</Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:true,
                                    GLONASSGnss:false,
                                    GPSGnss:false,
                                    GalileoGnss:false,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.beiDouGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                8
                            </Text>
                        </View>
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                GLONASS:
                            </Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:false,
                                    GLONASSGnss:true,
                                    GPSGnss:false,
                                    GalileoGnss:false,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.GLONASSGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                5
                            </Text>
                        </View>
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>            GPS:</Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:false,
                                    GLONASSGnss:false,
                                    GPSGnss:true,
                                    GalileoGnss:false,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.GPSGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                10
                            </Text>
                        </View>
                        <View style={{flex:1/7,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>       Galileo:</Text>
                            <TouchableHighlight onPress={() => {
                               this.setState({
                                    beiDouGnss:false,
                                    GLONASSGnss:false,
                                    GPSGnss:false,
                                    GalileoGnss:true,
                               });

                                }} underlayColor = '#000000'>
                                <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                       source={this.state.GalileoGnss?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                            </TouchableHighlight>
                            <Text style={{fontSize:setSpText(27),color: '#333333'}}>
                                13
                            </Text>
                        </View>
                        <View style={{flex:1/7}}>

                        </View>
                        <View style={{flex:1/7}}>

                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Echarts option={option} height = {300} width = {300}/>
                    </View>
                </View>
            </View>
        );
    }
}

//测试GNSS
class TestGnss extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            GNSS1CurrentLocation:true,
            GNSS1Information:false,
            GNSS1Restart:false,
            GNSS2CurrentLocation:false,
            GNSS2Information:false,
            GNSS2Restart:false,
        };
      }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{flex:0.2,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{flex:0.1}}>
                    </View>
                    <View style={{flex:0.1,height:scaleSize(120),backgroundColor:(this.state.GNSS1CurrentLocation ? '#fece22' : '#292929'),}}>
                        <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                 GNSS1CurrentLocation:true,
                                 GNSS1Information:false,
                                 GNSS1Restart:false,
                                 GNSS2CurrentLocation:false,
                                 GNSS2Information:false,
                                 GNSS2Restart:false,
                                });
                            }}
                                            underlayColor = '#fece22'>
                            <Text style={{fontSize:setSpText(22),textAlign:'center',color:(this.state.GNSS1CurrentLocation ? '#222222' : '#ffffff')}}>GNSS1      当前位置</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{flex:0.1,height:scaleSize(120),backgroundColor:(this.state.GNSS1Information ? '#fece22' : '#292929'),}}>
                        <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                         GNSS1CurrentLocation:false,
                                         GNSS1Information:true,
                                         GNSS1Restart:false,
                                         GNSS2CurrentLocation:false,
                                         GNSS2Information:false,
                                         GNSS2Restart:false,
                                });
                            }}>
                            <Text style={{fontSize:setSpText(22),textAlign:'center',color:(this.state.GNSS1Information ? '#222222' : '#ffffff')}}>
                                GNSS1      信息
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{flex:0.1,height:scaleSize(120),backgroundColor:(this.state.GNSS1Restart ? '#fece22' : '#292929'),}}>
                        <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                         GNSS1CurrentLocation:false,
                                         GNSS1Information:false,
                                         GNSS1Restart:true,
                                         GNSS2CurrentLocation:false,
                                         GNSS2Information:false,
                                         GNSS2Restart:false,
                                });
                            }}>
                            <Text style={{fontSize:setSpText(22),textAlign:'center',color:(this.state.GNSS1Restart ? '#222222' : '#ffffff')}}>
                                重启     GNSS1
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{flex:0.1,height:scaleSize(120),backgroundColor:(this.state.GNSS2CurrentLocation ? '#fece22' : '#292929'),}}>
                        <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                         GNSS1CurrentLocation:false,
                                         GNSS1Information:false,
                                         GNSS1Restart:false,
                                         GNSS2CurrentLocation:true,
                                         GNSS2Information:false,
                                         GNSS2Restart:false,
                                });
                            }}>
                            <Text style={{fontSize:setSpText(22),textAlign:'center',color:(this.state.GNSS2CurrentLocation ? '#222222' : '#ffffff')}}>
                                GNSS2      当前位置
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{flex:0.1,height:scaleSize(120),backgroundColor:(this.state.GNSS2Information ? '#fece22' : '#292929'),}}>
                        <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                         GNSS1CurrentLocation:false,
                                         GNSS1Information:false,
                                         GNSS1Restart:false,
                                         GNSS2CurrentLocation:false,
                                         GNSS2Information:true,
                                         GNSS2Restart:false,
                                });
                            }}>
                            <Text style={{fontSize:setSpText(22),textAlign:'center',color:(this.state.GNSS2Information ? '#222222' : '#ffffff')}}>
                                GNSS2      信息
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{flex:0.1,height:scaleSize(120),backgroundColor:(this.state.GNSS2Restart ? '#fece22' : '#292929'),}}>
                        <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                         GNSS1CurrentLocation:false,
                                         GNSS1Information:false,
                                         GNSS1Restart:false,
                                         GNSS2CurrentLocation:false,
                                         GNSS2Information:false,
                                         GNSS2Restart:true,
                                });
                            }}>
                            <Text style={{fontSize:setSpText(22),textAlign:'center',color:(this.state.GNSS2Restart ? '#222222' : '#ffffff')}}>
                                重启GNSS2
                            </Text>
                        </TouchableHighlight>
                    </View>

                </View>
                <View style={{flex:0.8,}}>

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