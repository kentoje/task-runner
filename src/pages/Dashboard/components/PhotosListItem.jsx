import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const PhotosListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.url }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
})

export default PhotosListItem
