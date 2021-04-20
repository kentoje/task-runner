import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PhotosListItem from './PhotosListItem'

const PhotosList = ({ photos }) => {
  const renderItem = ({ item }) => <PhotosListItem item={item} />

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        horizontal
        renderItem={renderItem}
        keyExtractor={(photo) => String(photo.id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
})

export default PhotosList
