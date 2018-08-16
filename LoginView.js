import React, { Component } from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;
  

export default class LoginView extends Component {

  rendPress(){
    console.log('Mouse click');
  }

  render() {
    return (
      <View style={styles.container} onPress={this.rendPress()}>
        <Image style={styles.avatar} source={require('./imgs/avatar.png')} />
        <TextInput style={styles.textInput}
          placeholder='QQ号/手机号/邮箱ddd'
          underlineColorAndroid='transparent'
          autoFocus={false} />
        <TextInput style={styles.textInput}
          placeholder={'密码'}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true} />
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.login} onPress={this.rendPress()}>
            <Text style={{ color: '#FFF' }}>登录</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.settings}>
          <Text style={{ color: '#1E90FF' }}>
            忘记密码？
          </Text>
          <Text style={{ color: '#1E90FF' }}>
            新用户注册
          </Text>
        </View>
        <View style={styles.loginMethods}>
          <Text>其他登录方式</Text>
          <Image style={styles.loginIcon} source={require('./imgs/qq.png')} />
          <Image style={styles.loginIcon} source={require('./imgs/wechat.png')} />
          <Image style={styles.loginIcon} source={require('./imgs/weibo.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center'  // all sub items align to center
  },

  avatar: {
    width: 80,
    height: 80,
    // alignSelf: 'center',   // only single sum item
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white'
  },

  textInput: {
    backgroundColor: '#FFF',
    width: width * 0.8,
    height: 38,
    marginBottom: 2,
    fontSize: 15,
    textAlign: 'center'
  },

  login: {
    height: 40,
    width: width * 0.8,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#1E90FF',
    marginTop: 15,
    borderRadius: 5,
    justifyContent: 'center',    // align sum items
    alignItems: 'center'          // align sum items
  },
  loginInnerView:{
    backgroundColor: 'red',
  },
  settings: {
    width: width * 0.8,
    flexDirection: 'row',
    marginTop: 13,
    justifyContent: 'space-between'
  },

  loginMethods: {
    flexDirection: 'row',
    marginTop: 13,
    // alignItems: 'flex-end'     // sub itmes align to bottom in the cross direction,
    alignItems: 'center',     // sub itmes align to center in the cross direction,
    position: 'absolute',
    bottom: 10,
    left: 10
  },

  loginIcon: {
    width: 40,
    height: 40,
    margin: 2,
    borderRadius: 20
  }
});