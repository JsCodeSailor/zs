/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class login extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      txtValue: ""
    }
  }
  _onChangeText = (text) => {
    this.setState({ txtValue: text })
  }
//   clickButton = () => {
//  const { navigate } = this.props.navigation;
//   }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.txtTitle}>
          <Text style={styles.login}>您好！请登录</Text>
        </View>
        <View style={styles.txtBorder}>
          <TextInput
            placeholder="请输入用户名："
            placeholderTextColor='#51A7F9'
            value={this.state.txtValue}
            onChangeText={this._onChangeText}
          />
        </View>
        <View style={styles.txtBorder}>
          <TextInput
            placeholder="请输入密码："
            placeholderTextColor='#51A7F9'
            secureTextEntry={true}
          />
        </View>
        <View style={styles.txtButton}>
          <Button title={"登录"}
            onPress={() => navigate('HomeScreen')}
          ></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  txtTitle: {
    alignItems: 'center',
    marginTop: 100,
  },
  login: {
    fontSize: 30,
    color:'#51A7F9',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 25,
    flexDirection: 'row'
  },
  txtBorder: {
    height: 50,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#51A7F9',
  },
  txtName: {
    color: '#51A7F9',
    fontSize: 20
  },
  txtButton: {
    marginLeft: 55,
    marginRight: 55,
    marginTop: 30,
  }
});

