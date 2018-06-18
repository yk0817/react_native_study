import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home'


export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  }
},{
  initialRouteName: 'Home',
});
