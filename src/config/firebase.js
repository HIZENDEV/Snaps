import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAWBTgQs32Y8_WzKX_1d9Qo8e5M4GNT9J0',
  authDomain: 'snaps-a26a2.firebaseapp.com',
  databaseURL: 'https://snaps-a26a2.firebaseio.com',
  projectId: 'snaps-a26a2',
  storageBucket: 'snaps-a26a2.appspot.com',
  messagingSenderId: '333461742765'
}

export const app = firebase.initializeApp(config)