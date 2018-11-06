import React  from 'react'
import Route from './src/Router'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Setting a timer', 'ListView is deprecated'])

export default class App extends React.Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ]
  }
  render() {
    return (
      <Route />
    )
  }
}