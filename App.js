import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router/Router'
import 'react-native-get-random-values'

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App
