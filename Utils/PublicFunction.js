/**
 * Created by Administrator on 2017/10/25.
 */
'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    ActivityIndicator,
    Text,
} from 'react-native';

class Utils extends Component {
    render() {
        return (
            <View />
        );
    }
}

//加载等待的view
export function renderLoadingView() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} style={[styles.gray, {height: 80}]} color='red' size="large" />
        </View>
    );
}

//加载失败view
export function renderErrorView(error) {
    return (
        <View style={styles.container}>
            <Text>
                Fail: {error}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});