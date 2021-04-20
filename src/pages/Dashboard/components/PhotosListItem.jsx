import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

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
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
})

export default PhotosListItem
