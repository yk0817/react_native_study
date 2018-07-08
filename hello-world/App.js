import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Test extends React.Component {
  render(){
    return (
      <View style={{alignItems: 'center', marginTop: 200}}>
       <Text>Hello World</Text>
      </View>
    );
  }
}

// class Hello extends React.Component {
//   render(){
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// export default class LotsOfGreentings extends React.Component {
//   render(){
//     return (
//       <View style={{alignItems: 'center', marginTop: 200}}>
//         <Hello name='props1' />
//         <Hello name='props2' />
//         <Hello name='props3' />
//       </View>
//     );
//   }
// }

// class Blink extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {isShowingText: true};
  //
  //   setInterval(() => {
  //     // console.log(this.state);
  //     this.setState(previousState => {
  //     console.log(previousState);
  //     return { isShowingText: !previousState.isShowingText };
  //     });
  //   }, 1000);
  // }
  // render(){
    // let display = this.state.isShowingText ? this.props.text : ' ';
    // return (
    //   <Text>{display}</Text>
    // );
//   }
// }



// export default class BlinkApp extends React.Component {
//   render(){
//     return (
//       <View style={{alignItems: 'center', marginTop: 200}}>
//         <Blink text='state1' />
//         <Blink text='state2' />
//         <Blink text='state3' />
//         <Blink text='state4' />
//       </View>
//     );
//   }
// }
