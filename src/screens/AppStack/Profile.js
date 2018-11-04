import React from 'react'
import { Text, Image, View } from 'react-native'
import { app } from '@Config/firebase'
import { User } from '@Components/styles'
import Header from '@Components/Header'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Profile'
    }
  }

  componentDidMount() {
    const user = app.auth().currentUser
    this.setState({user : user})
  }

  render() {
    const user = this.state.user
    return (
      <React.Fragment>
        <Header title={this.state.screen} />
        <View style={User.container}>
          <View style={User.avatarShadow}>
            <Image style={User.avatar} source={{ uri: `${user ? user.photoUrl : null}` }} />
          </View>
          <Text style={User.displayName}>{ user ? user.displayName : null }</Text>
        </View>
      </React.Fragment>
    )
  }
}