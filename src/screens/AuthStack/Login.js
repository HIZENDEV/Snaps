import React from 'react'
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { app } from '@Config/firebase'
import { Sign } from '@Components/styles'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Login',
      password: '',
      username: '',
      new: false
    }
  }
  handleSignUp = () => {
    const email = this.state.username + '@sna.ps'
    app.auth()
      .createUserWithEmailAndPassword(email, this.state.password)
      .then(() => this.setUserInDb())
      .catch(error => alert(error.message))
  }
  handleSignIn = () => {
    const email = this.state.username + '@sna.ps'
    app.auth()
      .signInWithEmailAndPassword(email, this.state.password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => alert(error.message))
  }

  setUserInDb = () => {
    const username = this.state.username
    const user = app.auth().currentUser
    user.updateProfile({
      displayName: username,
      photoURL: 'https://i.imgur.com/SCw99pI.png'
    })
    .then(() => 
      app.database().ref('users/' + username + '/').set({
        username: user.displayName,
        photoURL: 'https://i.imgur.com/SCw99pI.png'
      })
    )
    .then(() => this.props.navigation.navigate('App'))
  }

  render() {
    return (
      <View style={Sign.container}>
        <Image style={Sign.logo} source={require('@Assets/snaps.png')} />
        <Text style={Sign.title}>Snaps</Text>
        <Text style={Sign.subtitle}>Pictures collection</Text>
        <TextInput
          style={Sign.input}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          placeholder='Username'
        />
        <TextInput
          style={Sign.input}
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true}
          value={this.state.password}
          placeholder='Password'
        />
        {
          !this.state.new ? (
            <TouchableOpacity style={Sign.login} onPress={this.handleSignIn}>
              <Text style={Sign.buttonText}>Sign In</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Sign.login} onPress={this.handleSignUp}>
              <Text style={Sign.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          )
        }
        <View style={Sign.bottomSection}>
          <Text style={Sign.ask}>{!this.state.new ? `Don't have any account?` : `Already have an account?` }</Text>
          <TouchableOpacity onPress={() => this.setState({new: !this.state.new})}>
            <Text style={Sign.signup}>{!this.state.new ? `Sign Up Now` : `Sign In Now`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}