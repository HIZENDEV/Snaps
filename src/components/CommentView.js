import React from "react"
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Comments, Topbar } from "@Components/styles"
import Modal from "react-native-modal"

export default class CommentsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { comment: '' }
  }

  render() {
    const comments = this.props.comments
    return (
      <Modal
        style={Comments.modal}
        isVisible={this.props.isModalVisible}
        avoidKeyboard={true}>
        <View style={Comments.container}>
        <StatusBar translucent={false} backgroundColor="white" barStyle="dark-content" />
        <View style={Topbar.header}>
            <TouchableOpacity onPress={this.props.onPress} style={Topbar.left}>
            <Ionicons name={'chevron-left'} size={30} color={'#000000'} />
            <Text style={Topbar.back}>back</Text>
          </TouchableOpacity>

          <View style={Topbar.right}>
            <Text style={Topbar.title}>Comments</Text>
          </View>
        </View>
          {
            comments ? (
              Object.keys(comments).map(key =>
                (
                  comments[key].username ? (
                    <View key={key} style={Comments.content}>
                      <Image style={Comments.avatar} source={{ uri: `${comments[key].userImage}` }} />
                      <View style={Comments.right}>
                        <Text style={Comments.displayName}>{comments[key].username}</Text>
                        <Text style={Comments.message}>{comments[key].comment}</Text>
                      </View>
                    </View>
                  ) : null
                ))
            ) : null
          }
        </View>
      </Modal>
    )
  } 

}