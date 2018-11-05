import React from 'react'
import { View, Text, Image } from 'react-native'
import { PostImg } from './styles'

export default class Gallery extends React.Component {
  render() {
    return (
      <View style={PostImg.card}>
        <Image style={PostImg.image} source={{ uri: `${this.props.item.picUrl}` }} />
      </View>
    );
  }
}