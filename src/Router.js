import React from "react"
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'

// AuthStack screens
import AuthLoading from '@Screens/AuthStack/AuthLoading'
import Login from '@Screens/AuthStack/Login'

// AppStack screens
import Home from '@Screens/AppStack/Home'
import Switch from '@Screens/AppStack/Switch'
import Profile from '@Screens/AppStack/Profile'

// CameraStack screens
import Camera from '@Screens/CameraStack/Camera'
import Preview from '@Screens/CameraStack/Preview'

const AppStack = createBottomTabNavigator({
  Home: Home,
  Switch: Switch,
  Profile: Profile
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `home`
        } else if (routeName === 'Switch') {
          iconName = `camera`
        } else if (routeName === 'Profile') {
          iconName = `account`
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      },
      animationEnabled: true,
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        backgroundColor: '#ffffff',
        elevation: 0,
        borderTopWidth: 0
      },
      showLabel: false,
      activeTintColor: '#000000',
      inactiveTintColor: '#9F9F9F',
      gesturesEnabled: true
    },
  }
)

const AuthStack = createStackNavigator({ Login: Login }, { headerMode: 'none' })

const CameraStack = createStackNavigator({
  Preview: Preview,
  Camera: Camera
}, {
    initialRouteName: 'Camera',
    headerMode: 'none'
  }
)

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
    Camera: CameraStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
)