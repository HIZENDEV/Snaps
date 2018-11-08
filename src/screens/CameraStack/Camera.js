import React from 'react'
import { View, TouchableOpacity, Image  } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Snapshot } from '@Components/styles'

export default class Camera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Camera'
    }
  }

  render() {
    return (
      <View style={Snapshot.container}>
        <View style={Snapshot.cropTop}>
        </View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={Snapshot.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={Snapshot.cropBottom}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={Snapshot.capture}>
            <Image style={Snapshot.captureIcon} source={require('@Assets/snaps.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  takePicture = async function () {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, fixOrientation: true }
      const data = await this.camera.takePictureAsync(options)
      this.props.navigation.push('Preview', {
        data
      })
    }
  }
}