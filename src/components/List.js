import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Item } from './styles'

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={Item.card}>
        <Image style={Item.image} source={{ uri: `${this.props.item.picUrl}` }} />
        <View style={Item.hover}>
          <Text style={Item.title}>{this.props.item.title ? this.props.item.title : 'This picture has no title '}</Text>
        </View>
        <View style={Item.container}>
          <Image style={Item.avatar} source={{ uri: `${this.props.item.userImage}` }} />
          <Text style={Item.displayName}>{this.props.item.from}</Text>
        </View>
        <View style={Item.actions}>
          <TouchableOpacity style={Item.like} onPress={this.props.like}>
            <Ionicons name={'heart'} size={20} color={'#F07887'} />
            <Text style={Item.count}>{this.props.item.loved ? this.props.item.loved.count : 0} like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Item.like} onPress={this.props.comment}>
            <Ionicons name={'comment'} size={20} color={'#5884F0'} />
            <Text style={Item.count}>{this.props.item.comments ? this.props.item.comments : 0} comments</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={Item.like} onPress={this.props.save}>
            <Ionicons name={'bookmark-minus'} size={20} color={'#FF9A67'} />
            <Text style={Item.count}>{this.props.item.saved ? this.props.item.saved : 0} saved</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}