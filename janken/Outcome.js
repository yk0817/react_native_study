import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class Outcome extends React.Component {
  constructor(props) {
    super(props);
    this.whoWinner();
  }

  whoWinner(){
    let myDecision = this.props.navigation.state.params.myDecisions;
    let myJankenHash = this._formatJankenHash(myDecision);
    let compJankenHash = this._compJankenHash();

    
    this.state = {
      myJankenHash,
      compJankenHash,
    }
    return this._judge(myJankenHash, compJankenHash);
  };

  _judge(myJanken, compJanken){
    let myJankenVal = Object.values(myJanken)[0];
    let compJankenVal = Object.values(compJanken)[0];
    let judgeVal = (myJankenVal - compJankenVal + 3) % 3;

    if (judgeVal == 0) {
      return "draw"
    } else if (judgeVal == 2) {
      return "win"
    } else {
      return "lose"
    }
  };

  _compJankenHash(){
    return [{ goo: 0 }, { choki: 1 }, { pa: 2 }][ Math.floor( Math.random() * 2) ];
  };

  _formatJankenHash(myDecision){
    if (myDecision === "goo") {
      return { goo: 0 };
    } else if (myDecision === "choki") {
      return { choki: 1 };
    } else {
      return { pa: 2 };
    }
  };

  render(){
    const { navigation } = this.props;
    return (
      <View>
        <Text>{  }</Text>
        <Text>勝敗: {  }</Text>
      </View>
    );
  }
}
