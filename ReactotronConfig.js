import Reactotron, { networking, trackGlobalErrors, overlay } from 'reactotron-react-native'

Reactotron
  .configure() // controls connection & communication settings
  .use(networking())
  .use(overlay())
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!