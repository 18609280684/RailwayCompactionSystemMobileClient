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
    Banner_Imgs
} from '../Utils/Constants.js';


class  HomeDrawerNavigatorView extends Component{

    static navigationOptions = ({navigation}) => ({
        drawerLabel:'首页显示',
        drawerIcon:({ tintColor }) => (
            <Image
                source={Banner_Imgs.DRAWVIEWPAGE_TodayData}
                style={[styles.drawerNavigatorIcon, {tintColor: tintColor}]}
            />
        ),
    });

    componentDidMount() {
        this.timer = setTimeout(() => SplashScreen.hide(), 2000);
    }

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render(){
        const bianchang = 100;
        const buttonBianchang = 160;
        const {navigate} = this.props.navigation;
        return(
           <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            30
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            压实值
                        </Text>
                    </View>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            13
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            碾压遍数
                        </Text>
                    </View>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            3.2Km/h
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            行驶速度
                        </Text>
                    </View>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            60Hz
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            震动频率
                        </Text>
                    </View>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            50Kn
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            激振力
                        </Text>
                    </View>
                    <View style={styles.leftSidleLattice}>
                        <Text style={styles.leftSidleText}>
                            40mm
                        </Text>
                        <Text style={[styles.leftSidleText,{fontSize:setSpText(22)}]}>
                            振幅
                        </Text>
                    </View>
                </View>
               <View style={styles.middleContainer}>

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
                            <View style={{backgroundColor:'#fece22',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    1-10
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#fe7210',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    11-20
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#da251c',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    21-30
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#34a710',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    31-40
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#008212',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    41-50
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#085460',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    51-60
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#735998',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    61-70
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#343f84',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    71-80
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#142a74',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    81-90
                                </Text>
                            </View>

                            <View style={{backgroundColor:'#09194e',height:scaleSize(bianchang),width:scaleSize(bianchang),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:setSpText(16),color:'rgb(255,255,255)'}}>
                                    91-100
                                </Text>
                            </View>
                        </View>
                        <View style={{flex:0.4,alignContent:'space-around'}}>
                            <TouchableHighlight style={{alignItems:'center'}} onPress={() => Alert.alert('')}>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_CompactionValueNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight  style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => Alert.alert('')}>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_CompactedEdgeNumberNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => Alert.alert('')}>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_TrajectoryNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => Alert.alert('')}>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_LocateCurrentNight}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => Alert.alert('')}>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_NightMode}>
                                </Image>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center',marginTop:scaleSize(20)}} onPress={() => Alert.alert('')}>
                                <Image style={{height:scaleSize(buttonBianchang),width:scaleSize(buttonBianchang),}}
                                       source={Banner_Imgs.HOMEPAGEBUTTON_RefreshNight}>
                                </Image>
                            </TouchableHighlight>

                        </View>
                        <View style={{flex:0.3}}>
                            <TouchableHighlight style={{alignItems:'center',}} onPress={() => navigate('DrawerOpen')}>
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
    }

});

export {
    HomeDrawerNavigatorView,
};