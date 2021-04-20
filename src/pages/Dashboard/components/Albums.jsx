import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Album = ({ albums }) => {
  return (
    <View style={styles.container}>
      <Text>{albums[0].title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})

export default Album
