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
    WebView,
    StatusBar
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
import Orientation from 'react-native-orientation';
import createInvoke from 'react-native-webview-invoke/native';

class  HomeDrawerNavigatorView extends Component{
    _isMounted = true;

    webview: WebView;
    invoke = createInvoke(() => this.webview);
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
            gpsStateOne:true,
            //GPS2状态
            gpsStateTwo:true,
            //压实传感器
            CompactingSensor:true,
            //信号强度
            signalIntensity:'',
            //当前页面状态
            currentState:1,

            webViewData: '',
        };
          Orientation.lockToLandscape();
      }



    componentDidMount() {
        this.timer = setTimeout(() => SplashScreen.hide(), 2000);

    }

    componentWillMount() {

        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            // do something
            console.log( 'PORTRAIT');
        } else {
            // do something else
            console.log( 'OthersPORTRAIT');
        }

        this._isMounted = true;
        this.timer && clearTimeout(this.timer);
        //侧边栏运行状态数据
        ServiceApi.request("Cache.get",{
            "key":"roller:showinfo"

        },($seq, $result, $info, $value) => {
            if(this.state.evc !=  $value.ecv && this._isMounted)
            {
                this.setState({
                    evc:$value.ecv,
                });
            }
            if(this.state.rollingPasses !=  $value.times && this._isMounted)
            {
                this.setState({
                    rollingPasses:$value.times,
                });
            }

            if(this.state.frequency !=  $value.hz && this._isMounted)
            {
                this.setState({
                    frequency:$value.hz,
                });
            }
            if(this.state.excitingForce !=  $value.force && this._isMounted)
            {
                this.setState({
                    excitingForce:$value.force,
                });
            }
            if(this.state.amplitude !=  $value.hi && this._isMounted)
            {
                this.setState({
                    amplitude:$value.hi,
                });
            }
            if(this.state.travelSpeed !=  $value.speed && this._isMounted) {
                this.setState({
                    travelSpeed: $value.speed,
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
        //ServiceApi.request("Cache.get",{
        //    "key":"Sensor:GPS0:data"
        //},($seq, $result, $info, $value) => {
        //
        //},1000);


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
            //console.log('asdasdasdasdasds');
            //console.log($value);
            //console.log('asdasdasdasdasds');
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
        //source={{uri: 'http://192.168.0.35/html5/index.html'}}
        const bianchang = 100;
        const buttonBianchang = 160;
        const numberTextSize = 10;
        const leftTextSize = 22;
        const {navigate} = this.props.navigation;
        var webWannaGet = this.invoke.bind('webGet');
        var webWannaSet = this.invoke.bind('webSet');
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

               <StatusBar
                   hidden = {true}
               />
                <View style={styles.leftContainer}>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.evc}
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(leftTextSize)}]}>
                            压实值
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.rollingPasses}
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(leftTextSize)}]}>
                            碾压遍数
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.travelSpeed}Km/h
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(leftTextSize)}]}>
                            行驶速度
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.frequency}Hz
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(leftTextSize)}]}>
                            震动频率
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.excitingForce}Kn
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(leftTextSize)}]}>
                            激振力
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            {this.state.amplitude}m
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(leftTextSize)}]}>
                            高程
                        </Text>
                    </View>
                    <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                </View>
               <View style={styles.middleContainer}>
                       <WebView
                           ref={webview => this.webview = webview}
                           onMessage={this.invoke.listener}
                           style={{backgroundColor: 'rgba(255,255,255,0.8)',flex: 1}}
                           source={{uri: 'http://192.168.0.64:8080/RailwayCompactionSystemMobileCocos2dJSWeb/index.html'}}
                           javaScriptEnabled={true}
                           domStorageEnabled={true}
                           decelerationRate="normal"
                           automaticallyAdjustContentInsets={false}
                           onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                           startInLoadingState={true}
                           scalesPageToFit={true}
                           scrollEnabled = {false}
                       />
               </View>
               <View style={styles.rightContainer}>
                   <View style={{flex:0.1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <Image style={[styles.rightStateIcon,{opacity:this.state.gpsStateOne?1:0.3}]}
                               source = {Banner_Imgs.HOMEPAGE_SatelliteStateOne}>
                        </Image>

                       <Image style={[styles.rightStateIcon,{opacity:this.state.gpsStateTwo?1:0.3}]}
                              source = {Banner_Imgs.HOMEPAGE_SatelliteStateTwo}>
                       </Image>

                       <Image style={[styles.rightStateIcon,{opacity:this.state.CompactingSensor?1:0.3}]}
                              source = {Banner_Imgs.HOMEPAGE_CompactionSensorState}>
                       </Image>

                       <Image style={styles.rightStateIcon}
                              source = {this.state.signalIntensity == 1?Banner_Imgs.HOMEPAGE_G4State:this.state.signalIntensity == 2?Banner_Imgs.HOMEPAGE_G4State:
                       this.state.signalIntensity == 3?Banner_Imgs.HOMEPAGE_G4State:this.state.signalIntensity == 4?Banner_Imgs.HOMEPAGE_G4State:this.state.signalIntensity == 5?Banner_Imgs.HOMEPAGE_G4State:Banner_Imgs.HOMEPAGE_G4State}>
                       </Image>
                   </View>
                   <View style={{flex:0.9,flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:0.3}}>
                            <View style={{backgroundColor:'#BA1126',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'1-10':'1-2'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#D93329',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'11-20':'3-4'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#F77346',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'21-30':'5-6'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#FBB265',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'31-40':'7-8'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#FFE495',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'41-50':'9-10'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#D7EEF4',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'51-60':'11-12'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#A2D2E6',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'61-70':'13-14'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#699FCB',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'71-80':'15-16'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#4269AE',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'81-90':'17-18'}
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#353991',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(numberTextSize),color:'rgb(255,255,255)'}}>
                                    {this.state.currentState == 1?'91-100':'>=19'}
                                </Text>
                            </View>
                        </View>
                        <View style={{flex:0.4,alignContent:'space-around'}}>
                            <TouchableHighlight style={{alignItems:'center'}} onPress={() => {
                                this.setState({
                                    currentState:1,
                                   });
                                webWannaSet(1)
                                     .then(function (data) {
                                        console.log(data);
                                    });
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_CompactionValueNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight  style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                this.setState({
                                    currentState:2,
                                   });
                                 webWannaSet(2)
                                     .then(function (data) {
                                        console.log(data);
                                    });
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_CompactedEdgeNumberNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                this.setState({
                                    currentState:3,
                                   });
                               webWannaSet(3)
                                     .then(function (data) {
                                        console.log(data);
                                    });
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_TrajectoryNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                               webWannaGet(1)
                               .then(function(data) {
                                    console.log('data set success!');
                               });
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_LocateCurrentNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                webWannaGet(2)
                               .then(function(data) {
                                    console.log('data set success!');
                               });
                            } }>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_NightMode}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => {
                                webWannaGet(3)
                               .then(function(data) {
                                    console.log('data set success!');
                               });
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