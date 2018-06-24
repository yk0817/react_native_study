import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component<{}> {
  navigateToOutcome(myDecision){
    this.props.navigation.navigate('Outcome', { myDecision });
  }
  
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>じゃんけんゲーム</Text>
          <View style={styles.text_wrapper}>
            <TouchableOpacity onPress={() => this.navigateToOutcome("goo") } style={styles.text1}>
              <Text style={styles.text_style}>
                グー
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.text2} onPress={() => this.navigateToOutcome("choki") }>
              <Text style={styles.text_style}>
                チョキ
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.text3} onPress={() => this.navigateToOutcome("pa") }>
              <Text style={styles.text_style}>
                パー
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text_wrapper: {
    marginTop: 30,
    backgroundColor: 'black',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  text1: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 3,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
  },
  text2: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flex: 3,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
  },
  text3: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    flex: 3,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
  },
  text_style: {
    fontWeight: 'bold',
  }
});