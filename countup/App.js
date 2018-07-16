import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0 }
  }
  _CountUp(){
    // setStateするとrender()が描画されて、
    // Componentが再描画される。
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="press button" onPress={() => this._CountUp()}>Press Button</Button>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
