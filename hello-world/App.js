import React, { Component } from 'react';
import { Alert, AppRegistry, Text, TextInput, View, Button } from 'react-native';

export default class PizzaTranslator extends Component {

  render(){
    return (
      <View style={{padding: 10, backgroundColor: 'gray', margin: 100}}>
        <Button
          onPress={() => {
            Alert.alert('you tapped the button!');
          }}
          title="press me"
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
