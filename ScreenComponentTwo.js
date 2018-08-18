import React, { Component } from 'react';
import {
  Button,
} from 'react-native';
  

export default class ScreenComponentTwo extends Component {

  render(){
      return(
          <Button title="Go to noe" onPress={()=> this.props.navigation.navigate("ScreenOne")}>

          </Button>
      );
  }
}

