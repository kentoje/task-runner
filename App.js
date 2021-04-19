import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router/Router'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.statusBackground} />
      <SafeAreaView style={styles.appBackground}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  statusBackground: {
    flex: 0,
    backgroundColor: 'red',
  },
  appBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
