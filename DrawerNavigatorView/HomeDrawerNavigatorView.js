/**
 * Created by Administrator on 2017/10/25.
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
    WebView
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
import {
    ServiceApi
} from '../Utils/ApiServer.js';
import Echarts from 'native-echarts';

class  HomeDrawerNavigatorView extends Component{
    _isMounted = true;

    static navigationOptions = ({navigation}) => ({
        drawerLabel:'首页显示',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_TodayData}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    // 构造
      constructor(props) {
        super(props);

        // 初始状态
        this.state = {
            //压实值
            evc:40,
            //碾压遍数
            rollingPasses:10,
            //行驶速度
            travelSpeed:5.3,
            //震动频率
            frequency:60,
            //激振力
            excitingForce:12,
            //振幅
            amplitude:0.3,
            //GPS1状态
            gpsStateOne:'',
            //GPS2状态
            gpsStateTwo:'',
            //信号强度
            signalIntensity:'',
            //当前页面状态
            currentState:1,
            webViewData: '',
        };
      }



    componentDidMount() {
        this.timer = setTimeout(() => SplashScreen.hide(), 2000);

    }

    componentWillMount() {
        this._isMounted = true;
        this.timer && clearTimeout(this.timer);
        //侧边栏运行状态数据
        ServiceApi.request("Cache.get",{
            "key":"Sensor:Dense:data"

        },($seq, $result, $info, $value) => {
            if(this.state.evc !=  $value.ecv && this._isMounted)
            {
                this.setState({
                    evc:$value.ecv,
                });
            }
            if(this.state.rollingPasses !=  $value.ecv && this._isMounted)
            {
                this.setState({
                    rollingPasses:$value.ecv,
                });
            }

            if(this.state.frequency !=  $value.ecv && this._isMounted)
            {
                this.setState({
                    frequency:$value.freq,
                });
            }
            if(this.state.excitingForce !=  $value.ecv && this._isMounted)
            {
                this.setState({
                    excitingForce:$value.force,
                });
            }
            if(this.state.amplitude !=  $value.ecv && this._isMounted)
            {
                this.setState({
                    amplitude:$value.amp,
                });
            }
        },1000);

        //GPS0状态
        ServiceApi.request("Cache.get",{
            "key":"Sensor:GPS0:status"
        },($seq, $result, $info, $value) => {
            if(this._isMounted) {
                this.setState({
                    gpsStateOne: $value,
                });
            }
        },10000);
        //GPS1状态
        ServiceApi.request("Cache.get",{
            "key":"Sensor:GPS1:status"
        },($seq, $result, $info, $value) => {
            if(this._isMounted) {
            this.setState({
                gpsStateTwo:$value,
            });
            }
        },10000);

        //定位信息
        ServiceApi.request("Cache.get",{
            "key":"Sensor:GPS0:data"
        },($seq, $result, $info, $value) => {

            if(this.state.travelSpeed !=  $value.speed && this._isMounted)
            {
                this.setState({
                    travelSpeed:$value.speed,
                });
            }
        },1000);

        ServiceApi.request("Cache.get",{
            "key":"sys:dialup"
        },($seq, $result, $info, $value) => {
            console.log("$value.status.signal_quality:" + $value.status.signal_quality);
            if(this.state.signalIntensity !=  $value.status.signal_quality && this._isMounted)
            {
                this.setState({
                    signalIntensity:$value.status.signal_quality,
                });
            }
        },0);

        ServiceApi.request("ProduceData.get_batches_list",{

        },($seq, $result, $info, $value) => {
            console.log('asdasdasdasdasds');
            console.log($value);
            console.log('asdasdasdasdasds');
        },2000);
    }


    onShouldStartLoadWithRequest = (event) => {
        // Implement any custom loading logic here, don't forget to return!
        return true;
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){

        const bianchang = 100;
        const buttonBianchang = 160;
        const {navigate} = this.props.navigation;
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        const option = {
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data:['速度', '2016 降水量']
            },
            grid: {
                top: 70,
                bottom: 50
            },
            xAxis: [
                {
                    type: 'value',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '降水量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                },
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '降水量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name:'2015 降水量',
                    type:'line',
                    xAxisIndex: 1,
                    smooth: true,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],

                    markLine : {
                        data : [
                            // 纵轴，默认
                            {type : 'max', name: '最大值', itemStyle:{normal:{color:'#dc143c'}}},
                            {type : 'min', name: '最小值', itemStyle:{normal:{color:'#dc143c'}}},
                            {type : 'average', name : '平均值', itemStyle:{normal:{color:'#dc143c'}}},

                        ]
                    }

                },


            ]
        };
        return(
           <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.evc}
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            压实值
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.rollingPasses}
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            碾压遍数
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.travelSpeed}Km/h
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            行驶速度
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.frequency}Hz
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            震动频率
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.excitingForce}Kn
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            激振力
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.amplitude}mm
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            振幅
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                </View>
               <View style={styles.middleContainer}>

                       <WebView
                           ref={'webview'}
                           style={{backgroundColor: 'rgba(255,255,255,0.8)',flex: 1}}
                           source={{uri: 'http://192.168.0.139:8080/RailwayCompactionSystemMobileCocos2dJSWeb/index.html'}}
                           javaScriptEnabled={true}
                           domStorageEnabled={true}
                           decelerationRate="normal"
                           automaticallyAdjustContentInsets={false}
                           onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                           startInLoadingState={true}
                           scalesPageToFit={true}
                       />


               </View>
               <View style={styles.rightContainer}>
                   <View style={{flex:0.1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <Image style={styles.rightStateIcon}
                               source = {Banner_Imgs.HOMEPAGE_SatelliteStateOne}>
                        </Image>

                       <Image style={styles.rightStateIcon}
                              source = {Banner_Imgs.HOMEPAGE_SatelliteStateTwo}>
                       </Image>

                       <Image style={styles.rightStateIcon}
                              source = {Banner_Imgs.HOMEPAGE_CompactionSensorState}>
                       </Image>

                       <Image style={styles.rightStateIcon}
                              source = {Banner_Imgs.HOMEPAGE_G4State}>
                       </Image>
                   </View>
                   <View style={{flex:0.9,flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:0.3}}>
                            <View style={{backgroundColor:'#BA1126',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    1-10
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#D93329',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    11-20
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#F77346',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    21-30
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#FBB265',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    31-40
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#FFE495',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    41-50
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#D7EEF4',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    51-60
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#A2D2E6',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    61-70
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#699FCB',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    71-80
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#4269AE',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    81-90
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#353991',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    91-100
                                </Text>
                            </View>
                        </View>
                        <View style={{flex:0.4,alignContent:'space-around'}}>
                            <TouchableHighlight style={{alignItems:'center'}} onPress={() => {
                                this.setState({
                                    currentState:1,
                                   });

                                ServiceApi.request("Cache.set", {
                                   "key": "gameState",
                                   "val":'1'
                                    }, function($seq, $result, $info, $value) {
                                },0);

                                   this.sendMessage();
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_CompactionValueNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight  style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                this.setState({
                                    currentState:2,
                                   });

                                ServiceApi.request("Cache.set", {
                                   "key": "gameState",
                                   "val":'2'
                                    }, function($seq, $result, $info, $value) {
                                    },0);

                                   this.sendMessage();
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_CompactedEdgeNumberNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                this.setState({
                                    currentState:3,
                                   });

                                ServiceApi.request("Cache.set", {
                                   "key": "gameState",
                                   "val":'3'
                                    }, function($seq, $result, $info, $value) {
                                },0);

                                   this.sendMessage();
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_TrajectoryNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                this.setState({
                                    currentState:4,
                                   });
                                   this.sendMessage();
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_LocateCurrentNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                this.setState({
                                    currentState:5,
                                   });
                                   this.sendMessage();
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_NightMode}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                this.setState({
                                    currentState:6,
                                   });
                                   this.sendMessage();
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_RefreshNight}>
                                </Image>
                            </TouchableHighlight>

                        </View>
                        <View style={{flex:0.3}}>
                            <TouchableHighlight style={{alignItems:'center',}} onPress={() => navigate('DrawerOpen',{picture:'xxxxxxxxxx'})}>
                                <Image style={{height:scaleSize(108),width:scaleSize(74),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTN_Arrow}>
                                </Image>
                            </TouchableHighlight>
                        </View>
                   </View>
               </View>
           </View>
        );
    }

    handleMessage(e){
        const message = e.nativeEvent.data
    }

    sendMessage() {
        console.log("bbbbbbbbbbbbbbbbb");
        if (this.webview) {
            console.log("mmmmmmmmmmmmmmmmmmmmmmm");
            this.refs.webview.postMessage('sssssssssssssss');
    }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(0,0,0)',
        flexDirection:'row',
    },
    leftContainer:{
        flex:0.15,
        backgroundColor:'rgb(255,0,0)',
    },
    middleContainer:{
        flex:0.65,
        backgroundColor:'rgb(255,255,0)',
    },
    rightContainer:{
        flex:0.2,
        backgroundColor:'rgb(255,255,255)',
    },
    rightStateIcon:{
        height:scaleSize(84),
        width:scaleSize(84),
    },
    leftSidleText:{
        fontSize:setSpText(42),
        color:'#ffffff',
    },
    leftSidleLattice:{
        flex: 1/6,
        backgroundColor:'#292929',
        alignItems:'center',
        justifyContent:'center',
    },
    drawerNavigatorIcon:{
        width:scaleSize(70),
        height:scaleSize(70),
    },
    webView: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        flex:1,
    },

});



export {
    HomeDrawerNavigatorView,
};