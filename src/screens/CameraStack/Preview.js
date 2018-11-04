import React from "react"
import { TouchableOpacity, Image, View, ActivityIndicator, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Preview } from "@Components/styles"
import RNFetchBlob from 'rn-fetch-blob'
import { app } from '@Config/firebase'

// window.XMLHttpRequest = RNFetchBlob.polyfillXMLHttpRequest
// window.Blob = Blob

export default class Confirm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      uri: null,
      title: null,
      uploading: false,
      user: null
    }
  }

  getSelectedImages = (currentImage) => {

    this.setState({ uploading: true })

    const image = currentImage
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    let uploadBlob = null
    const user = app.auth().currentUser
    const title = this.state.title
    const nameArray = image.split('/')
    const filename = nameArray[nameArray.length - 1]
    const imageRef = app.storage().ref('collection').child(filename)
    let mime = 'image/jpg'
    fs.readFile(image, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        app.database().ref('collection/').push({
          userImage: user.photoURL,
          from: user.displayName,
          title: title,
          url: url
        })
        this.setState({ uploading: false })
        this.props.navigation.navigate('App')
      })
      .catch((error) => {
        alert(error)
        this.setState({ uploading: false })
        this.props.navigation.navigate('App')
      })
  }

  render() {
    const { navigation } = this.props
    const data = navigation.getParam('data', null)
    const onProgress = <ActivityIndicator style={Preview.indicator} size="large" color="#5884F0" />

    return (
      <React.Fragment>
        <View style={Preview.cropTop}>
          <TouchableOpacity style={Preview.actions} onPress={() => this.props.navigation.navigate('App')}>
            <Ionicons name={'close'} size={35} color={'#FF858A'} />
          </TouchableOpacity>
          <TouchableOpacity style={Preview.actions} onPress={() => this.getSelectedImages(data.uri)}>
            <Ionicons name={'check'} size={35} color={'#29C3B7'} />
          </TouchableOpacity>
        </View>
        <Image
          style={Preview.backgroundScreen}
          source={{ uri: `${data.uri}` }}
        />
        {this.state.uploading ? onProgress : null}
        <View style={Preview.validationBox}>
          <TextInput
            style={Preview.titleInput}
            onChangeText={(title) => this.setState({ title })}
            value={this.state.title}
            placeholder='Write Something'
          />
        </View>
      </React.Fragment>
    )
  }
}