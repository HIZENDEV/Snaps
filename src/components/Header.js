import React from "react"
import { View, Text, TouchableOpacity, StatusBar } from "react-native"
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import { navigation } from 'react-navigation'
import { Topbar } from './styles'
import { app } from '@Config/firebase'

export default class Header extends React.Component {

  signOut = () => {
    app.auth().signOut().then(function() {
      navigation.navigate('AuthLoading')
    }).catch(function(error) {
      navigation.navigate('AuthLoading')
    })
  }


  render() {
    return (
      <React.Fragment>
        <StatusBar translucent={false} backgroundColor="white" barStyle="dark-content" />
        <View style={Topbar.header}>
          <TouchableOpacity onPress={this.signOut} style={Topbar.left}>
            <Ionicons name={'chevron-left'} size={30} color={'#000000'} />
            <Text style={Topbar.back}>Sign Out</Text>
          </TouchableOpacity>

          <View style={Topbar.right}>
            <Text style={Topbar.title}>{this.props.title}</Text>
          </View>
        </View>
      </React.Fragment>
    )
  }
}