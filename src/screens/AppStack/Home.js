import React from 'react'
import { Text, ListView } from 'react-native'
import { app } from '@Config/firebase'
import ListItem from '@Components/List'
import Header from '@Components/Header'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Feed',
      collections: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
    this.collectionRef = app.database().ref('/collection')
  }

  _renderItem(item) {
    return (
      <ListItem item={item} />
    )
  }

  listenForCollection(collectionRef) {
    this.mounted = true
    collectionRef.on('value', (snap) => {
      let collections = []
      snap.forEach((child) => {
        collections.unshift({
          from: child.val().from,
          picUrl: child.val().url,
          loved: child.val().loved,
          title: child.val().title,
          userImage: child.val().userImage,
          _key: child.key
        })
      })
      if (this.mounted) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(collections)
        })
      }
    })
  }

  componentWillUnmount() {
    this.mounted = false
  }

  componentDidMount() {
    const { currentUser } = app.auth()
    this.setState({ currentUser })
    this.listenForCollection(this.collectionRef)
  }

  render() {
    return (
      <React.Fragment>
        <Header title={this.state.screen} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}/>
      </React.Fragment>
    )
  }
}