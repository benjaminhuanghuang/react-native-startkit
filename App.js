/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
//
import LoginView from './LoginView.js';
import ScrollViewDemo from './ScrollViewDemo.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <LoginView />
      <ScrollViewDemo />
    );
  }
}
