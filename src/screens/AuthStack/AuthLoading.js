import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { app } from '@Config/firebase'
import { Sign } from '@Components/styles'

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Auth'
    }
  }

  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth')
    })
  }

  render() {
    return (
      <View style={Sign.container}>
        <ActivityIndicator />
      </View>
    )
  }
}