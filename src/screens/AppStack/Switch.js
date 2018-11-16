import React from 'react'
import { Text } from 'react-native'

export default class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Switch'
    }
  }

  componentWillMount() {
    this.props.navigation.navigate('Camera')
  }

  render() {
    return <Text> {this.state.screen} </Text>
  }
}
