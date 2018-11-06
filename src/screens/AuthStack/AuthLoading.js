import React from 'react'
import { View, Image, Animated, Easing } from 'react-native'
import { app } from '@Config/firebase'
import { Sign } from '@Components/styles'

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Auth'
    }
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spiner()
    setTimeout(() => {
      app.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'App' : 'Auth')
      })
    }, 3000);
  }

  spiner() {
    this.animation = Animated.loop(
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )).start()
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={Sign.container}>
        <Animated.Image style={[Sign.logoIndicator, animatedStyle]} source={require('@Assets/snaps.png')}/>
      </View>
    )
  }
}