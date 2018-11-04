import { StyleSheet } from 'react-native'
import theme from '@Config/theme'

export const Item = StyleSheet.create({
  card: {
    width: theme.DEVICE_WIDTH - (theme.DEVICE_WIDTH * (10/100)),
    margin: (theme.DEVICE_WIDTH * (10 / 100)) / 2,
    borderRadius: 16,
    elevation: 8
  },
  image: {
    backgroundColor: 'lightgrey',
    width: '100%',
    resizeMode: 'cover',
    height: theme.DEVICE_WIDTH / 1.5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.BACKGROUND,
  },
  avatar: {
    backgroundColor: 'lightgrey',
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 40,
    margin: '4%'
  },
  hover: {
    position: 'absolute',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: theme.DEVICE_WIDTH / 1.7,
    marginHorizontal: '2%',
    backgroundColor: '#373A5B',
    height: 20,
    paddingLeft: 8,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    color: theme.BACKGROUND,
    fontFamily: theme.MEDIUM_FONT,
    fontSize: 12
  },
  displayName: {
    color: '#000',
    fontFamily: theme.BOLD_FONT,
    fontWeight: 'bold',
    fontSize: 16
  },
  actions: {
    backgroundColor: theme.BACKGROUND,
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  like: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  count: {
    color: theme.SOFT_GREY,
    fontFamily: theme.MEDIUM_FONT,
    marginLeft: '4%'
  },
})

export const Topbar = StyleSheet.create({
  header: {
    height: '7.68%',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    elevation: 0
  },
  left: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  back: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#000'
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000',
    paddingRight: '2%'
  }
})

export const Snapshot = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  },
  captureIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  cropTop: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    height: (theme.DEVICE_HEIGHT - theme.DEVICE_WIDTH / 1.5) / 2.5,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  cropBottom: {
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    height: (theme.DEVICE_HEIGHT - theme.DEVICE_WIDTH / 1.5) / 2.5,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export const Preview = StyleSheet.create({
  backgroundScreen: {
    width: theme.DEVICE_WIDTH,
    height: theme.DEVICE_HEIGHT,
    backgroundColor: 'black'
  },
  validationBox: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    zIndex: 999,
    height: (theme.DEVICE_HEIGHT - theme.DEVICE_WIDTH / 1.5) / 2.5,
    width: '100%',
    backgroundColor: '#fff',
  },
  indicator: {
    position: 'absolute',
    height: '5%',
    width: '10%',
    top: theme.DEVICE_HEIGHT / 2 - (5 / 100),
    left: theme.DEVICE_WIDTH / 2 - (10 / 100),
    backgroundColor: '#fff',
    borderRadius: theme.DEVICE_WIDTH,
  },
  cropTop: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
    top: 0,
    height: (theme.DEVICE_HEIGHT - theme.DEVICE_WIDTH / 1.5) / 2.5,
    width: '100%',
    backgroundColor: '#fff'
  },
  titleInput: {
    color: '#000',
    width: '100%',
    fontFamily: theme.BOLD_FONT,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#fff',
    elevation: 0
  }
})

export const Sign = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: theme.BOLD_FONT,
    fontSize: 38,
    color: '#000',
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: theme.MEDIUM_FONT,
    fontSize: 10,
    color: theme.HARD_GREY,
    textAlign: 'center',
    marginBottom: '20%'
  },
  input: {
    marginBottom: '4%',
    fontFamily: theme.REGULAR_FONT,
    fontSize: 12,
    color: theme.HARD_GREY,
    textAlign: 'center',
    backgroundColor: '#eee',
    borderRadius: 100,
    height: 35,
    width: '80%'
  },
  login: {
    backgroundColor: theme.MATERIAL_PINK,
    height: 35,
    borderRadius: 100,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    paddingVertical: -20,
    fontFamily: theme.BOLD_FONT,
    fontSize: 12,
    color: theme.BACKGROUND,
    textAlign: 'center'
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ask: {
    marginTop: '20%',
    fontFamily: theme.REGULAR_FONT,
    textAlign: 'center',
    color: '#000',
  },
  signup: {
    color: '#000',
    marginTop: '81%',
    marginLeft: '4%',
    fontFamily: theme.MEDIUM_FONT,
    textAlign: 'center',
    letterSpacing: -1
  },
})

export const User = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    backgroundColor: '#5884F0',
    borderRadius: 70,
    borderColor: '#fff',
    borderWidth: 3,
  },
  avatarShadow: {
    marginVertical: '10%',
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 70,
    elevation: 8
  },
  displayName: {
    fontFamily: theme.BOLD_FONT,
    color: theme.PRIMARY_COLOR,
    fontSize: 24,
  }
})