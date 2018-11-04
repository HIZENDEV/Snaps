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
    return (
      <React.Fragment>
        <Text>{ this.state.screen }</Text>
      </React.Fragment>
    )
  }
}