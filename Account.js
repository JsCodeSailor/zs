import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Button } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Message extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.txtMess}>退出界面</Text>
                <View style={styles.txtQuit}>
                <Button title={"退出登录"}
                    onPress={() => navigate('Login')}
                ></Button>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    txtMess:{
        fontSize:30,
        color:'#51A7F9',
        textAlign:'center',
        marginTop:100
    },
    txtQuit:{
    marginTop:50,
    marginLeft:100,
    marginRight:100    
    }
})