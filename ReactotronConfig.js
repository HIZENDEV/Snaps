import Reactotron, { networking, overlay } from 'reactotron-react-native'

Reactotron
  .configure()
  .use(networking())
  .use(overlay())
  .useReactNative()
  .connect()
