import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Outcome from './Outcome';

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Outcome: {
    screen: Outcome,
    navigationOptions: {
      title: 'Outcome',
    },
  },
},{
  initialRouteName: 'Home',
});
