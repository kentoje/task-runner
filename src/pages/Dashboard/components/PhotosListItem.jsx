import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const PhotosListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
})

export default PhotosListItem
