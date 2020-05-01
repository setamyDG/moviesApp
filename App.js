import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './navigation/MainTabNavigator/MainTabNavigator';
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    );
  }
}
