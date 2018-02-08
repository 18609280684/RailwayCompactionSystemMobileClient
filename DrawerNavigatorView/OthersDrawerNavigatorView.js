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
    FlatList,
    TextInput,
    StatusBar,
    WebView
} from 'react-native';
import {
    deviceWidth,
    deviceHeight,
    setSpText,
    scaleSize,
} from '../Utils/ScreenAdaptationUtil.js';
import  {
    MachineConfiguration,
    MachineInformation,
    EquipmentCalibration,
    ConstructionTechnology,
    HomePageConfiguration,
    MachineSize
} from './SystemConfiguration';
import {
    WIFIHotspots,
    DataSynchronizationSettings,
    BaseStationConfiguration,
    SIMCardManagement
} from  './NetworkSettings';
import {
    GnssOne,
    GnssTwo,
    TestGnss,
    DifferentialDataConnection
} from './SatelliteState';
import {
    RequestUrl,
    Banner_Imgs
} from '../Utils/Constants.js';
import Echarts from 'native-echarts';
import ModalDropdown from 'react-native-modal-dropdown';
import createInvoke from 'react-native-webview-invoke/native';

class DaydataView extends Component{

    webview: WebView;
    invoke = createInvoke(() => this.webview);
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'当日数据',
        drawerIcon:({ tintColor }) => (
            <Image
            source={Banner_Imgs.DRAWVIEWPAGE_TodayData}
            style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            //yashichengdu:true,
            //yashizhuangtai:false,
            //junyundu:false,
            currentState:1,
            canada: '',
        };
    }

    onShouldStartLoadWithRequest = (event) => {
        // Implement any custom loading logic here, don't forget to return!
        return true;
    };

    render(){
        const bianchang = 100;
        var setScene = this.invoke.bind('setSceneState');
        const option = {
            color: ['#3398DB'],
            title: {
                show:false,
                text: '特性示例：渐变色 阴影 点击缩放',
                subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
            },
            legend:{
                type:'scroll',
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.1,backgroundColor:'rgb(255,255,255)',flexDirection:'row'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            当日数据
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-around',}}>
                            <Text style={{fontSize:setSpText(22),color:'#666666'}}>
                                从
                            </Text>
                            <Image style={{width:scaleSize(300),height:scaleSize(60)}}  source={Banner_Imgs.DRAWVIEWPAGE_DropDownButton}>
                                <ModalDropdown
                                    options={['8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00FM', '2:00FM', '3:00FM']}
                                    onSelect={(op) => Alert.alert('op:' + op)}
                                    defaultValue = ' 请选择起始时间'
                                    dropdownStyle = {{width:scaleSize(300)}}
                                    textStyle = {{fontSize:setSpText(22),height:scaleSize(60),color:'#666666',marginLeft:scaleSize(5)}}
                                />
                            </Image>
                            <Text style={{fontSize:setSpText(22),color:'#666666'}}>
                                到现在的数据
                            </Text>
                        </View>
                        <View style={{flex:0.6,flexDirection:'row'}}>
                            <TouchableHighlight style={{flex:0.15,backgroundColor:'#393939',
                            justifyContent:'center',alignItems:'center',height:scaleSize(80)}}
                                                onPress={() => Alert.alert('') } underlayColor = '#fece22'>
                                <Text style={{fontSize:setSpText(22),color:'#ffffff'}}>
                                    统计
                                </Text>
                            </TouchableHighlight>
                            <View style={{flex:0.6,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>
                                    压实面积：3200m
                                </Text>
                            </View>
                            <View style={{flex:0.25,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigate('Home') } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.9,backgroundColor:'rgb(0,0,0)',flexDirection:'row'}}>
                    <View style={{flex:0.18,backgroundColor:'#292929'}}>

                        <View style={{flex:(10/3),backgroundColor:(this.state.currentState == 1 ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        currentState:1,
                                });
                                setScene('1')
                                .then(function(data){
                                 console.log("this.state.currentState:");
                                    console.log(data);
                                });
                            }}
                                                underlayColor = '#fece22'>
                                <Text style={{fontSize:setSpText(26),color:(this.state.currentState == 1? '#222222' : '#ffffff')}}>
                                    压实程度
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(10/3),backgroundColor:(this.state.currentState == 2 ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {

                                this.setState({
                                        currentState:2,
                                });
                                setScene('2')
                                .then(function(data){
                                 console.log("this.state.currentState:");
                                    console.log(data);
                                });
                            }} underlayColor = '#fece22'>
                                <Text style={{fontSize:setSpText(26),color:(this.state.currentState == 2 ? '#222222' : '#ffffff')}}>
                                    压实状态
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(10/3),backgroundColor:(this.state.currentState == 3 ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {

                                this.setState({
                                        currentState:3,
                                });
                                setScene('3')
                                .then(function(data){
                                 //console.log("this.state.currentState:" + this.state.currentState);
                                 console.log("this.state.currentState:");
                                    console.log(data);
                                });

                            }} underlayColor = '#fece22'>
                                <Text style={{fontSize:setSpText(26),color:(this.state.currentState == 3 ? '#222222' : '#ffffff')}}>
                                    均匀度
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    </View>
                    <View style={{flex:0.82,backgroundColor:'rgb(0,255,0)'}}>
                        <View style={{flex:0.2,backgroundColor:'#eeeeee',flexDirection:'row'}}>
                            {this.state.currentState == 1?
                                <View
                                    style={{flex:0.7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <View
                                        style={{backgroundColor:'#fece22',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            1-10
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#fe7210',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            11-20
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#da251c',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            21-30
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#34a710',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            31-40
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#008212',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            41-50
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#085460',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            51-60
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#735998',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            61-70
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#343f84',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            71-80
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#142a74',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            81-90
                                        </Text>
                                    </View>

                                    <View
                                        style={{backgroundColor:'#09194e',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            91-100
                                        </Text>
                                    </View>
                                </View>
                                :this.state.currentState == 2
                                ?<View  style={{flex:0.7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{backgroundColor:'#ff0000',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            不合格
                                        </Text>
                                    </View>
                                     <View style={{backgroundColor:'#ff0000',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            35%
                                         </Text>
                                    </View>
                                    <View style={{backgroundColor:'#00ff00',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            合格
                                        </Text>
                                    </View>
                                    <View style={{backgroundColor:'#00ff00',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                            65%
                                        </Text>
                                     </View>
                                </View>

                                :<View  style={{flex:0.7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <View style={{backgroundColor:'#ff0000',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                        >0.8VCV
                                    </Text>
                                </View>
                                <View style={{backgroundColor:'#ff0000',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                        40%
                                    </Text>
                                </View>
                                <View style={{backgroundColor:'#00ff00',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                       《= 0.8VCV
                                    </Text>
                                </View>
                                <View style={{backgroundColor:'#00ff00',height:scaleSize(100),width:scaleSize(200),justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                        60%
                                    </Text>
                                </View>
                            </View>
                            }
                            <View style={{flex:0.3,}}>
                                <Echarts option={option} height={150} width = {200} />
                            </View>
                        </View>
                        <View style={{flex:0.8,backgroundColor:'rgb(255,255,0)'}}>
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
                                injectedJavaScript = "
                                    var ele = document.getElementById('gameCanvas');
                                    ele.width = 800;
                                    ele.height = 380;
                                    "
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

var ITEM_HEIGHT = 100;
class DataDownloadingView extends Component{

    _flatList;
    _keyExtractor = (item, index) => index;

    static navigationOptions = ({navigation}) => ({
        drawerLabel:'数据下载',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_DataDownloading}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:[{beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},{beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},
                {beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},{beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},
                {beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},{beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},
                {beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},{beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},
                {beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},{beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},
                {beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},{beginTime:'2017-11-08 12:32:05',endTime:'2017-11-15 01:32:08',dataSize:'50K',},
            ],
            selectAll:false,
            selectArry:[false,false,true,false,false,false,true,false,false,false,false,false],
        };
      }

    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex:1,}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.11,flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            数据下载
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:setSpText(26),color:'#da251c'}}>
                                 剩余容量：80MB
                            </Text>
                        </View>
                        <View style={{flex:0.7,flexDirection:'row'}}>
                            <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color: '#333333'}}>
                                    已使用容量：420MB
                                </Text>
                            </View>
                            <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>
                                    剩余（%）：30%
                                </Text>
                            </View>
                            <View style={{flex:0.3,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigation.goBack() } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                    <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.09,flexDirection:'row',backgroundColor:'#eeeeee'}}>
                    <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                              序号
                          </Text>
                    </View>
                    <View style={{flex:0.25,justifyContent:'center',alignItems:'flex-start'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            开始时间
                        </Text>
                    </View>
                    <View style={{flex:0.25,justifyContent:'center',alignItems:'flex-start'}}>
                       <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                           结束时间
                       </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            数据大小
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                        <TouchableHighlight onPress={() => {
                               var middleArray =[];
                               for(var i = 0;i<this.state.selectArry.length;i++)
                               {
                                    middleArray[i] = !this.state.selectAll;
                               }
                               this.setState({
                                    selectAll:!this.state.selectAll,
                                    selectArry:middleArray,
                               });

                        }} underlayColor = '#eeeeee'>
                            <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                   source={this.state.selectAll?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                        </TouchableHighlight>
                        <Text style={{fontSize:setSpText(24),color:'#333333',marginLeft:scaleSize(20)}}>
                               全选
                        </Text>
                    </View>
                </View>
                <View style={{flex:0.7,flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        //ListHeaderComponent={this._header}
                        //ItemSeparatorComponent={this._separator}
                        getItemLayout={(item, index) => ( {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index} )}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        //ListEmptyComponent={this._createEmptyView()}
                        data = {this.state.data}
                    />
                </View>
                <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#eeeeee',}}>
                    <View style={{flex:0.5,justifyContent:'center',}}>
                        <Text style={{fontSize:setSpText(26),color:'#333333',marginLeft:scaleSize(50)}}>
                            已选择数据大小：4000K
                        </Text>
                    </View>
                    <View style={{flex:0.5,flexDirection:'row',justifyContent:'flex-end'}}>
                        <TouchableHighlight style={{flex: 0.25,backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                下载
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{flex: 0.25,backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(50),marginRight:scaleSize(50)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                下载并删除
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }

    _header = () =>{
        return(
            <View>

            </View>
        );
    }

    _renderItem = (item,index) =>{
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:(((item.index + 1)%2 == 1)?'#ffffff':'#eeeeee'),height:scaleSize(ITEM_HEIGHT)}}>
                <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.index + 1}
                    </Text>
                </View>
                <View style={{flex:0.25,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.beginTime}
                    </Text>
                </View>
                <View style={{flex:0.25,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.endTime}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.dataSize}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                    <TouchableHighlight onPress={() => {
                          var middleArry = this.state.selectArry;
                            middleArry[(item.index)] = !middleArry[(item.index)];
                               this.setState({
                                    selectArry:middleArry,
                               });

                        }} underlayColor = '#eeeeee'>
                        <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                               source={this.state.selectArry[(item.index)]?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                    </TouchableHighlight>
                    <Text style={{fontSize:setSpText(22),color:'#333333',marginLeft:scaleSize(20)}}>
                        全选
                    </Text>
                </View>
            </View>
        );
    }


}

class EquipmentDiagnosisView extends Component{

    _flatList;
    _keyExtractor = (item, index) => index;
    static navigationOptions = ({navigation}) => ({
        drawerLabel:'设备诊断',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_EquipmentDiagnosis}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:[{equipmentName:'显示器',pN:'',sN:'',versionNumber:'',states:'1'},{equipmentName:'GNSS天线1',pN:'',sN:'',versionNumber:'',states:'1'},
                {equipmentName:'GNSS天线2',pN:'',sN:'',versionNumber:'',states:'0'},{equipmentName:'流量传感器',pN:'',sN:'',versionNumber:'',states:'1'},
                {equipmentName:'电流互感传感器',pN:'',sN:'',versionNumber:'',states:'1'},{equipmentName:'主控盒',pN:'',sN:'',versionNumber:'',states:'0'},
            ],
            selectAll:false,
            selectArry:[false,false,true,false,false,false,true,false,false,false,false,false],
        };
    }

    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex:1,}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.11,flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            设备诊断
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:setSpText(26),color:'#da251c'}}>

                            </Text>
                        </View>
                        <View style={{flex:0.7,flexDirection:'row'}}>
                            <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color: '#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.3,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigation.goBack() } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                    <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.09,flexDirection:'row',backgroundColor:'#eeeeee'}}>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            设备名称
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            PN
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            SN
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            版本号
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

                        <Text style={{fontSize:setSpText(24),color:'#333333',marginLeft:scaleSize(20)}}>
                            状态
                        </Text>
                    </View>
                </View>
                <View style={{flex:0.7,flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        //ListHeaderComponent={this._header}
                        //ItemSeparatorComponent={this._separator}
                        getItemLayout={(item, index) => ( {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index} )}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        //ListEmptyComponent={this._createEmptyView()}
                        data = {this.state.data}
                    />
                </View>
                <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#eeeeee',}}>
                    <View style={{flex:0.5,justifyContent:'center',}}>
                        <Text style={{fontSize:setSpText(26),color:'#333333',marginLeft:scaleSize(50)}}>
                            机器名称:PDS100-987526
                        </Text>
                    </View>
                    <View style={{flex:0.5,flexDirection:'row',justifyContent:'flex-end'}}>

                    </View>
                </View>
            </View>
        );
    }

    _header = () =>{
        return(
            <View>

            </View>
        );
    }

    _renderItem = (item,index) =>{
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:((item.item.states == 1)?'#ffffff':'rgb(255,0,0)'),height:scaleSize(ITEM_HEIGHT)}}>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.equipmentName}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.pN}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.sN}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.versionNumber}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333',marginLeft:scaleSize(20)}}>
                        {(item.item.states == 1)?'未连接':'已连接'}
                    </Text>
                </View>
            </View>
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

    constructor(props) {
        super(props);
        this.state = {
            jiqipeizhi:true,
            jiqixingxi:false,
            shebeixiaoyan:false,
            shigonggongyi:false,
            zhuyepeizhi:false,
            jiqichicun:false,
            canada: '',
        };
    }

    render(){
        const bianchang = 100;
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.1,backgroundColor:'rgb(255,255,255)',flexDirection:'row'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            系统配置
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-around',}}>

                        </View>
                        <View style={{flex:0.6,flexDirection:'row'}}>
                            <View style={{flex:0.15}}>

                            </View>
                            <View style={{flex:0.6,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.25,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigate('Home') } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                    <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.9,backgroundColor:'rgb(0,0,0)',flexDirection:'row'}}>
                    <View style={{flex:0.18,backgroundColor:'#292929'}}>

                        <View style={{flex:(1/6),backgroundColor:(this.state.jiqipeizhi ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        jiqipeizhi:true,
                                        jiqixingxi:false,
                                        shebeixiaoyan:false,
                                        shigonggongyi:false,
                                        zhuyepeizhi:false,
                                        jiqichicun:false,
                                });
                            }}
                                                underlayColor = '#fece22'>
                                <Text style={{fontSize:setSpText(26),color:(this.state.jiqipeizhi ? '#222222' : '#ffffff')}}>
                                    机器配置
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/6),backgroundColor:(this.state.jiqixingxi ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        jiqipeizhi:false,
                                        jiqixingxi:true,
                                        shebeixiaoyan:false,
                                        shigonggongyi:false,
                                        zhuyepeizhi:false,
                                        jiqichicun:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.jiqixingxi ? '#222222' : '#ffffff')}}>
                                    机器信息
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/6),backgroundColor:(this.state.shebeixiaoyan ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        jiqipeizhi:false,
                                        jiqixingxi:false,
                                        shebeixiaoyan:true,
                                        shigonggongyi:false,
                                        zhuyepeizhi:false,
                                        jiqichicun:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.shebeixiaoyan ? '#222222' : '#ffffff')}}>
                                    设备校准
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/6),backgroundColor:(this.state.shigonggongyi ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        jiqipeizhi:false,
                                        jiqixingxi:false,
                                        shebeixiaoyan:false,
                                        shigonggongyi:true,
                                        zhuyepeizhi:false,
                                        jiqichicun:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.shigonggongyi ? '#222222' : '#ffffff')}}>
                                    施工工艺
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/6),backgroundColor:(this.state.jiqichicun ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        jiqipeizhi:false,
                                        jiqixingxi:false,
                                        shebeixiaoyan:false,
                                        shigonggongyi:false,
                                        zhuyepeizhi:false,
                                        jiqichicun:true,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.jiqichicun ? '#222222' : '#ffffff')}}>
                                    机器尺寸
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/6),backgroundColor:(this.state.zhuyepeizhi ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        jiqipeizhi:false,
                                        jiqixingxi:false,
                                        shebeixiaoyan:false,
                                        shigonggongyi:false,
                                        zhuyepeizhi:true,
                                        jiqichicun:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.zhuyepeizhi ? '#222222' : '#ffffff')}}>
                                    主页配置
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    </View>
                    <View style={{flex:0.82,backgroundColor:'rgb(0,255,0)'}}>

                        {this.state.jiqipeizhi?<MachineConfiguration />:this.state.jiqixingxi?<MachineInformation />:this.state.shebeixiaoyan?<EquipmentCalibration />:
                            this.state.shigonggongyi?<ConstructionTechnology />:this.state.zhuyepeizhi?<HomePageConfiguration />:this.state.jiqichicun?<MachineSize />:<Text>无数据</Text>}
                    </View>
                </View>
            </View>
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

    constructor(props) {
        super(props);
        this.state = {
            WIFIredian:true,
            shujutongbu:false,
            GNSSjizhan:false,
            SIMkaguanli:false,
            canada: '',
        };
    }

    render(){
        const bianchang = 100;
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.1,backgroundColor:'rgb(255,255,255)',flexDirection:'row'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            网络设置
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-around',}}>

                        </View>
                        <View style={{flex:0.6,flexDirection:'row'}}>
                            <View style={{flex:0.15}}>

                            </View>
                            <View style={{flex:0.6,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.25,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigate('Home') } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                    <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.9,backgroundColor:'rgb(0,0,0)',flexDirection:'row'}}>
                    <View style={{flex:0.18,backgroundColor:'#292929'}}>

                        <View style={{flex:(1/4),backgroundColor:(this.state.WIFIredian ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        WIFIredian:true,
                                        shujutongbu:false,
                                        GNSSjizhan:false,
                                        SIMkaguanli:false,
                                });
                            }}
                                                underlayColor = '#fece22'>
                                <Text style={{fontSize:setSpText(26),color:(this.state.WIFIredian ? '#222222' : '#ffffff')}}>
                                    WIFI热点设置
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/4),backgroundColor:(this.state.shujutongbu ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        WIFIredian:false,
                                        shujutongbu:true,
                                        GNSSjizhan:false,
                                        SIMkaguanli:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.shujutongbu ? '#222222' : '#ffffff')}}>
                                    数据同步设置
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/4),backgroundColor:(this.state.GNSSjizhan ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        WIFIredian:false,
                                        shujutongbu:false,
                                        GNSSjizhan:true,
                                        SIMkaguanli:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.GNSSjizhan ? '#222222' : '#ffffff')}}>
                                    GNSS基站配置
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/4),backgroundColor:(this.state.SIMkaguanli ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        WIFIredian:false,
                                        shujutongbu:false,
                                        GNSSjizhan:false,
                                        SIMkaguanli:true,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.SIMkaguanli ? '#222222' : '#ffffff')}}>
                                    SIM卡管理
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    </View>
                    <View style={{flex:0.82,backgroundColor:'rgb(0,255,0)'}}>
                        {this.state.WIFIredian?<WIFIHotspots />:this.state.shujutongbu?<DataSynchronizationSettings />:this.state.GNSSjizhan?<BaseStationConfiguration />:
                            this.state.SIMkaguanli?<SIMCardManagement />:<Text>无数据</Text>}
                    </View>
                </View>
            </View>
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

    constructor(props) {
        super(props);
        this.state = {
            GNSS1:true,
            GNSS2:false,
            ceshiGNSS:false,
            chafenshuju:false,
            canada: '',
        };
    }

    render(){
        const bianchang = 100;
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.1,backgroundColor:'rgb(255,255,255)',flexDirection:'row'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            卫星状态
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-around',}}>

                        </View>
                        <View style={{flex:0.6,flexDirection:'row'}}>
                            <View style={{flex:0.15}}>

                            </View>
                            <View style={{flex:0.6,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.25,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigate('Home') } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                    <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.9,backgroundColor:'rgb(0,0,0)',flexDirection:'row'}}>
                    <View style={{flex:0.18,backgroundColor:'#292929'}}>

                        <View style={{flex:(1/4),backgroundColor:(this.state.GNSS1 ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        GNSS1:true,
                                        GNSS2:false,
                                        ceshiGNSS:false,
                                        chafenshuju:false,
                                });
                            }}
                                                underlayColor = '#fece22'>
                                <Text style={{fontSize:setSpText(26),color:(this.state.GNSS1 ? '#222222' : '#ffffff')}}>
                                    GNSS1
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/4),backgroundColor:(this.state.GNSS2 ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        GNSS1:false,
                                        GNSS2:true,
                                        ceshiGNSS:false,
                                        chafenshuju:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.GNSS2 ? '#222222' : '#ffffff')}}>
                                    GNSS2
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/4),backgroundColor:(this.state.ceshiGNSS ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        GNSS1:false,
                                        GNSS2:false,
                                        ceshiGNSS:true,
                                        chafenshuju:false,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.ceshiGNSS ? '#222222' : '#ffffff')}}>
                                    测试GNSS
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                        <View style={{flex:(1/4),backgroundColor:(this.state.chafenshuju ? '#fece22' : '#292929'),}}>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => {
                                this.setState({
                                        GNSS1:false,
                                        GNSS2:false,
                                        ceshiGNSS:false,
                                        chafenshuju:true,
                                });
                            }}>
                                <Text style={{fontSize:setSpText(26),color:(this.state.chafenshuju ? '#222222' : '#ffffff')}}>
                                    差分数据连接
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Image style={{height:scaleSize(4),}} source={Banner_Imgs.HOMEPAGECELL_Cell}/>
                    </View>
                    <View style={{flex:0.82,backgroundColor:'rgb(0,255,0)'}}>

                        {this.state.GNSS1?<GnssOne />:this.state.GNSS2?<GnssTwo />:this.state.ceshiGNSS?<TestGnss />:
                            this.state.chafenshuju?<DifferentialDataConnection />:<Text>无数据</Text>}
                    </View>
                </View>
            </View>
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

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            SingleLocation:true,
            Gps:false,
            RTKFloat:false,
            RTKFixed:false,
        };
      }

    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.11,flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            报警设置
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:setSpText(26),color:'#da251c'}}>

                            </Text>
                        </View>
                        <View style={{flex:0.7,flexDirection:'row'}}>
                            <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color: '#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.3,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigation.goBack() } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                    <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.79}}>
                   <View style={{flex:0.6,}}>
                        <View style={{flex:1/3,flexDirection:'row'}}>
                            <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                                    超速报警(KM/H)
                                </Text>
                                <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                    <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                                onChangeText={(text) => this.state.machineName = text}
                                                placeholder = " 4"
                                                placeholderTextColor  = 'gray'
                                                secureTextEntry  = {false}
                                                underlineColorAndroid = 'transparent'
                                    />
                                </Image>
                            </View>
                            <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                                    躲避区域报警距离(米)
                                </Text>
                                <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                    <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                                onChangeText={(text) => this.state.machineName = text}
                                                placeholder = "不能为空"
                                                placeholderTextColor  = 'gray'
                                                secureTextEntry  = {false}
                                                underlineColorAndroid = 'transparent'
                                    />
                                </Image>
                            </View>
                        </View>
                       <View style={{flex:1/3,flexDirection:'row'}}>
                           <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                           </View>
                           <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                               <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                                   未上传数据报警值(M)
                               </Text>
                               <Image style={{width:scaleSize(480),height:scaleSize(90),marginLeft:scaleSize(20)}}  source={Banner_Imgs.SYSTEMCONFIGURR_INPUTTEXT}>
                                   <TextInput  style={{width:scaleSize(400),fontSize:setSpText(18),color:'#333333', height:scaleSize(100)}}
                                               onChangeText={(text) => this.state.machineName = text}
                                               placeholder = "不能为空"
                                               placeholderTextColor  = 'gray'
                                               secureTextEntry  = {false}
                                               underlineColorAndroid = 'transparent'
                                   />
                               </Image>
                           </View>
                       </View>
                       <View style={{flex:1/3,}}>
                           <View style={{flex:0.5,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                               <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                                  定位状态报警:
                               </Text>
                               <View style={{flexDirection:'row'}}>
                                   <TouchableHighlight onPress={() => {
                                    this.setState({
                                        SingleLocation:true,
                                        Gps:false,
                                        RTKFloat:false,
                                        RTKFixed:false,
                                 });

                                    }} underlayColor = '#000000'>
                                       <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                              source={this.state.SingleLocation?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                                   </TouchableHighlight>
                                   <Text style={{fontSize:setSpText(22),color: '#333333'}}>
                                       单点定位
                                   </Text>
                               </View>
                               <View style={{flexDirection:'row'}}>
                                   <TouchableHighlight onPress={() => {
                                    this.setState({
                                        SingleLocation:false,
                                        Gps:true,
                                        RTKFloat:false,
                                        RTKFixed:false,
                                 });

                                    }} underlayColor = '#000000'>
                                       <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                              source={this.state.Gps?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                                   </TouchableHighlight>
                                   <Text style={{fontSize:setSpText(22),color: '#333333'}}>
                                       GPS
                                   </Text>
                               </View>
                               <View style={{flexDirection:'row'}}>
                                   <TouchableHighlight onPress={() => {
                                    this.setState({
                                        SingleLocation:false,
                                        Gps:false,
                                        RTKFloat:true,
                                        RTKFixed:false,
                                 });

                                    }} underlayColor = '#000000'>
                                       <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                              source={this.state.RTKFloat?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                                   </TouchableHighlight>
                                   <Text style={{fontSize:setSpText(22),color: '#333333'}}>
                                       RTK浮动
                                   </Text>
                               </View>
                               <View style={{flexDirection:'row'}}>
                                   <TouchableHighlight onPress={() => {
                                    this.setState({
                                        SingleLocation:false,
                                        Gps:false,
                                        RTKFloat:false,
                                        RTKFixed:true,
                                 });

                                    }} underlayColor = '#000000'>
                                       <Image style={{height:scaleSize(50),width:scaleSize(50)}}
                                              source={this.state.RTKFixed?Banner_Imgs.DATADOWNLOADING_SELECTONURL:Banner_Imgs.DATADOWNLOADING_SELECTOFFURL}/>
                                   </TouchableHighlight>
                                   <Text style={{fontSize:setSpText(22),color: '#333333'}}>
                                       RTK固定
                                   </Text>
                               </View>
                           </View>

                       </View>

                   </View>
                    <View style={{flex:0.4,}}>

                    </View>
                </View>
                <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#ffffff',}}>
                    <View style={{flex:0.5,justifyContent:'center',}}>
                        <Text style={{fontSize:setSpText(26),color:'#333333',marginLeft:scaleSize(50)}}>

                        </Text>
                    </View>
                    <View style={{flex:0.5,flexDirection:'row',justifyContent:'flex-end'}}>

                        <TouchableHighlight style={{flex: 0.25,backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(50),marginRight:scaleSize(50)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(26),color:'#ffffff'}}>
                                保存
                            </Text>
                        </TouchableHighlight>
                        <View style={{flex:0.1}}>

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class SystemUpgradeView extends Component{

    _flatList;
    _keyExtractor = (item, index) => index;

    static navigationOptions = ({navigation}) => ({
        drawerLabel:'系统升级',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_SystemUpgrade}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:[{equipmentName:'显示器',pN:'',sN:'',versionNumber:'',states:'1'},{equipmentName:'压实传感器',pN:'',sN:'',versionNumber:'',states:'1'},
                {equipmentName:'主控盒',pN:'',sN:'',versionNumber:'',states:'0'},
            ],
            auto:true,
            selectAll:false,
            selectArry:[false,false,true,false,false,false,true,false,false,false,false,false],

        };
    }

    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex:1,}}>
                <StatusBar
                    hidden = {true}
                />
                <View style={{flex:0.11,flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
                    <Image style={{width:deviceWidth,height:scaleSize(140),flexDirection:'row'}}  source={Banner_Imgs.DRAWVIEWPAGE_NavigationBg}>
                    <View style={{flex:0.18,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:setSpText(36),color:'#333333'}}>
                            系统升级
                        </Text>
                    </View>
                    <View style={{flex:0.82,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:setSpText(26),color:'#da251c'}}>

                            </Text>
                        </View>
                        <View style={{flex:0.7,flexDirection:'row'}}>
                            <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color: '#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(26),color:'#333333'}}>

                                </Text>
                            </View>
                            <View style={{flex:0.3,alignItems:'flex-end'}}>
                                <TouchableHighlight onPress={() =>navigation.goBack() } style={{marginRight:scaleSize(50)}} underlayColor='#fece22'>
                                    <Image style={{height:scaleSize(100),width:scaleSize(100)}} source = {Banner_Imgs.DRAWVIEWPAGE_BackArrowButton}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    </Image>
                </View>
                <View style={{flex:0.09,flexDirection:'row',backgroundColor:'#eeeeee'}}>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            设备名称
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            PN
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            SN
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(24),color:'#333333'}}>
                            版本号
                        </Text>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

                        <Text style={{fontSize:setSpText(24),color:'#333333',marginLeft:scaleSize(20)}}>
                            状态
                        </Text>
                    </View>
                </View>
                <View style={{flex:0.7,flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        //ListHeaderComponent={this._header}
                        //ItemSeparatorComponent={this._separator}
                        getItemLayout={(item, index) => ( {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index} )}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        //ListEmptyComponent={this._createEmptyView()}
                        data = {this.state.data}
                    />
                </View>
                <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#eeeeee',}}>
                    <View style={{flex:0.3,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:setSpText(27),color:'#333333',marginLeft:scaleSize(50)}}>
                            自动升级
                        </Text>
                        <TouchableHighlight style={{width:scaleSize(250),height:scaleSize(120),alignItems:'center',justifyContent:'center'}} onPress={() => this.setState({
                                auto:!this.state.auto,
                            }) } underlayColor='#eeeeee'>
                            <Image style={{width:scaleSize(190),height:scaleSize(90),marginLeft:scaleSize(20),}}  source={this.state.auto?Banner_Imgs.NETWORKSETTINGPAGE_SlideOnButton:Banner_Imgs.NETWORKSETTINGPAGE_SlideOffButton}/>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:0.7,flexDirection:'row',justifyContent:'space-around'}}>
                        <TouchableHighlight style={{flex: 0.25,backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(22),color:'#ffffff'}}>
                                系统日志下载
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{flex: 0.25,backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(50),marginRight:scaleSize(50)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(22),color:'#ffffff'}}>
                                导入配置文件升级
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{flex: 0.25,backgroundColor:'#393939',alignItems:'center',justifyContent:'center'}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(22),color:'#ffffff'}}>
                                导出配置文件
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{flex: 0.25,backgroundColor:'#393939',alignItems:'center',justifyContent:'center',marginLeft:scaleSize(50),marginRight:scaleSize(50)}} onPress={() => Alert.alert('')} underlayColor='#fece22'>
                            <Text style={{fontSize:setSpText(22),color:'#ffffff'}}>
                                升级日志
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }

    _header = () =>{
        return(
            <View>

            </View>
        );
    }

    _renderItem = (item,index) =>{
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:((item.item.states != 1)?'#ffffff':'rgb(255,0,0)'),height:scaleSize(ITEM_HEIGHT)}}>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.equipmentName}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.pN}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.sN}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333'}}>
                        {item.item.versionNumber}
                    </Text>
                </View>
                <View style={{flex:0.2,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:setSpText(22),color:'#333333',marginLeft:scaleSize(20)}}>
                        {(item.item.states == 1)?'未升级':'已升级'}
                    </Text>
                </View>
            </View>
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