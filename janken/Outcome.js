import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class Outcome extends React.Component {
  render(){
    const { navigation } = this.props;
    return (
      <Text>{ navigation.state.params.myDecision }</Text>
    );
  }
}