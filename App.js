import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router/Router'
import 'react-native-get-random-values'
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font'
import Loader from './src/components/Loader'
import './config/global'

const App = () => {
  const [isLoaded] = useFonts({ Montserrat_500Medium, Montserrat_700Bold })

  return (
    <>
      {isLoaded ? (
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default App
