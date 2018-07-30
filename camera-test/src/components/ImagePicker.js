import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Constants, Permissions, ImagePicker } from 'expo';


class ImagePickerSample extends Component {
  state = {
    image: null
  }

  // カメラ起動
  _takePhoto = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (status === 'granted') {
      ImagePicker.launchCameraAsync({
        allowsEditing: true,
      }).then(result => {
        if (!result.cancelled) {
          console.log(1);
          this.setState({image: result.uri});
        }
      })
      .catch(err => console.log(err))
    }
    // console.log(this);
    // Permissions.askAsync(Permissions.CAMERA);
    // Permissions.askAsync(Permissions.CAMERA_ROLL);
    // let result = await ImagePicker.launchCameraAsync({
    //   allowsEditing: true
    // });
    // console.log(result);
    // if (!result.canceled) {
    //   this.setState({image: result.uri});
    // }
    //
    //
  }
  // カメラロールから選択
  _pickImage = async () => {
    const { cameraRollStatus } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const { cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9]
    });
    console.log(result);

    if (!result.canceled) {
      this.setState({image: result.uri});
    }
  }

  render() {
    let { image } = this.state;

    return(
      <View style={styles.containerStyle}>
        <Text>Image Picker Sample</Text>
        <Button
          onPress={this._takePhoto}
          title="カメラを起動"
        />
      <Button
        onPress={this._pickImage}
        title="カメラロールから選択"
        />
      {
        image &&
        <Image
          source={{uri: image}}
          style={{width: 300, height: 300}}
        />
      }
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 15
  }
}

export default ImagePickerSample;
