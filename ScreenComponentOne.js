import React, { Component } from 'react';
import {
  Button,
} from 'react-native';
  

export default class ScreenComponentOne extends Component {

  render(){
      return(
          <Button title="Go to two" onPress={()=> this.props.navigation.navigate("ScreenTwo")}>

          </Button>
      );
  }
}

