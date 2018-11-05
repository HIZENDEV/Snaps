import React from 'react'
import { Text, Image, View, ListView } from 'react-native'
import { app } from '@Config/firebase'
import { User } from '@Components/styles'
import Gallery from '@Components/Gallery'
import Header from '@Components/Header'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Profile',
      posts: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
    this.postRef = app.database()
  }

  componentDidMount() {
    const user = app.auth().currentUser
    this.setState({ user: user })
    this.listenForPost(this.postRef, user.displayName)
  }

  componentWillUnmount() {
    this.mounted = false
  }

  _renderItem(item) {
    return (
      <Gallery item={item} />
    )
  }

  listenForPost(postRef, user) {
    this.mounted = true
    postRef.ref('/users/' + user + '/posts/').on('value', (snap) => {
      let posts = []
      snap.forEach((child) => {
        posts.unshift({
          picUrl: child.val().url,
          _key: child.key
        })
      })
      if (this.mounted) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(posts)
        })
      }
    })
  }

  render() {
    const user = this.state.user
    console.log(user)
    return (
      <React.Fragment>
        <Header title={this.state.screen} />
        <View style={User.container}>
          <View style={User.avatarShadow}>
            <Image style={User.avatar} source={{ uri: `${user ? user.photoURL : null}` }} />
          </View>
          <Text style={User.displayName}>{ user ? user.displayName : null }</Text>
          <Text style={User.email}>{user ? user.email : null}</Text>
          <View style={User.listContainer}>
          { this.state.dataSource.rowIdentities[0].length >= 1 ? (
            <ListView
              contentContainerStyle={User.listView}
              dataSource={this.state.dataSource}
              renderRow={this._renderItem.bind(this)}
              enableEmptySections={true} />
          ) : (
            <Text style={User.noPics}>You have no pictures yet</Text>
          )}
            <Text style={User.noPics}>You have no pictures yet</Text>
          </View>
        </View>
      </React.Fragment>
    )
  }
}