import React, { Component } from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('./imgs/avatar.png')} />
        <TextInput style={styles.name}
          placeholder='QQ号/手机号/邮箱ddd'
          numberOfLines={1}
          underlineColorAndroid='transparent'
          autoFocus={false}
          textAlign="center" />
        <View style={{ height: 1, backgroundColor: '#f4f4f4' }} />
        <TextInput style={styles.password}
          placeholder={'密码'}
          numberOfLines={1}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          textAlign="center"
        />
        <View style={styles.login}>
          <Text>登录</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'flex-end' }}>
          <Text style={{ marginLeft: 10, color: '#1E90FF' }}>
            忘记密码？
          </Text>
          <Text style={{
            marginRight: 10,
            color: '#1E90FF',
            alignItems: 'flex-end',
            textAlign: 'right',
            flex: 1
          }}>
            新用户注册
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'flex-end' }}>
          <Text>其他登录方式</Text>
          <Image style={styles.loginMethod} source={require('./imgs/qq.png')} />
          <Image style={styles.loginMethod} source={require('./imgs/wechat.png')} />
          <Image style={styles.loginMethod} source={require('./imgs/weibo.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },

  avatar: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 30
  },

  name: {
    backgroundColor: '#FFF',
    height: 50,
    marginTop: 10,
    fontSize: 15,
  },

  password: {
    backgroundColor: '#FFF',
    height: 50,
    fontSize: 15,
  },

  login: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#1E90FF',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  loginMethod:{
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 30
  }
});