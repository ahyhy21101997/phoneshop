import React, { Component } from 'react'
import { AppRegistry, View, Dimensions } from 'react-native'
import App from './app'
export default class phoneshop extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('phoneshop', () => phoneshop)