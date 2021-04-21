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
    padding: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E9E9E9',
  },
})

export default PhotosList
