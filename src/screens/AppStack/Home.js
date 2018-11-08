import React from 'react'
import { Alert, ListView, PermissionsAndroid } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import { app } from '@Config/firebase'
import ListItem from '@Components/List'
import Header from '@Components/Header'
import CommentInput from '@Components/CommentInput'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Feed',
      isModalVisible: false,
      collections: null,
      postKey: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
    this.collectionRef = app.database().ref('/collection')
  }

  async requestStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': 'Snaps Camera Permission',
          'message': 'Snaps needs access to your storage'
        }
      )
      return granted === PermissionsAndroid.RESULTS.GRANTED || false
    } catch (err) {
      alert(err)
    }
  }

  likePost(itemKey) {
    const postLoved = this.collectionRef.child(itemKey + '/loved/count')
    const currentUserLike = this.collectionRef.child(itemKey + '/loved/' + this.state.currentUser.uid)
    currentUserLike.transaction(function (isTruthy) {
      if (!isTruthy) {
        postLoved.transaction(function (count) {return count + 1})
        return true
      } else {
        currentUserLike.remove()
        postLoved.transaction(function (count) { return count - 1 })
      }
    })
  }

  commentPost(itemKey) {
    this.setState({postKey: itemKey})
    this.toggleModal()
  }

  async savePicture(itemKey) {
    const allowed = await this.requestStoragePermission()
    const postSaved = this.collectionRef.child(itemKey + '/saved/')
    const postRef = this.collectionRef.child(itemKey)
    let post = {}
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: RNFetchBlob.fs.dirs.PictureDir + '/' + Date.now(),
        description: 'Downloading image.'
      }
    }
    if (allowed) {
      postRef.once('value', function (snapshot) {
        post.url = snapshot.val().url
      })
      await RNFetchBlob.config(options).fetch('GET', `${post.url}`)
      postSaved.transaction(function (count) {
        return count + 1
      })
    } else {
      Alert.alert('Oops!', 'You should allow storage write permission', [{ text: 'OK' }])
    }
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  sendComment = (message) => {
    this.toggleModal()
    const itemKey = this.state.postKey
    const currentUser = this.state.currentUser
    if (message !== '' && itemKey) {
      const commentCount = this.collectionRef.child(itemKey + '/comments/count')
      const userComment = this.collectionRef.child(itemKey + '/comments')
      userComment.push({
        username: currentUser.displayName,
        userImage: currentUser.photoURL,
        comment: message
      }).then(() => {
        commentCount.transaction(function (count) {
          return count + 1
        })
      })
    }
  }

  _renderItem(item) {
    const like = () => {
      this.likePost(item._key)
    }
    const comment = () => {
      this.commentPost(item._key)
    }
    const save = async () => {
      await this.savePicture(item._key)
    }
    return (
      <ListItem item={item} like={like} comment={comment} save={save} />
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
          comments: child.val().comments,
          saved: child.val().saved,
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
          enableEmptySections={true} />
        <CommentInput isModalVisible={this.state.isModalVisible} onPress={this.sendComment} />
      </React.Fragment>
    )
  }
}