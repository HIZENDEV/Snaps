import React from "react"
import { TouchableOpacity, View, TextInput } from "react-native"
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import { InputActivity } from "@Components/styles"
import Modal from "react-native-modal"

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { comment: '' }
  }

  render() {
    return (
      <Modal
        style={InputActivity.modal}
        isVisible={this.props.isModalVisible}
        avoidKeyboard={true}>
        <View style={InputActivity.content}>
          <TextInput
            style={InputActivity.input}
            returnKeyType={'send'}
            autoFocus={true}
            maxLength={140}
            onChangeText={(comment) => this.setState({ comment })}
            onSubmitEditing={() => this.props.onPress(this.state.comment)}
            value={this.state.comment}
            placeholder='Write your comment'
          />
          <TouchableOpacity style={InputActivity.send} onPress={() => this.props.onPress(this.state.comment)}>
            <Ionicons style={InputActivity.icon} name={'comment-check'} size={25} color={'#5884F0'} />
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}
