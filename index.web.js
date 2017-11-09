/**
 * Created by Administrator on 2017/10/31.
 */
import {
    AppRegistry,
    Platform
} from 'react-native';
import App from './App';

AppRegistry.registerComponent('RailwayCompactionSystemMobileClient', () => App);
if (Platform.OS == 'web') {
    var app = document.createElement('div');
    document.body.appendChild(app);
    AppRegistry.runApplication('Helloworld', {
        rootTag: app
    });
}