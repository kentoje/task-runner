import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from './AppText'

const Error = ({ error }) => {
  return (
    <View style={styles.container}>
      <AppText>API responded with an error! What a shame...</AppText>
      <AppText style={styles.status}>Status: {error.status}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  status: {
    fontSize: 36,
    fontWeight: 'bold',
  },
})

export default Error
