import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    message: 'Message',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <HelloWorld message={this.state.message} />
        <Text
          onPress={() => this.setState({ message: 'Press' })}
        >
        {this.state.message}
        </Text>
      </View>
    );
  }
}

class HelloWorld extends React.Component {
  render(){
    return (<Text>Hello World {this.props.message}</Text>);
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
