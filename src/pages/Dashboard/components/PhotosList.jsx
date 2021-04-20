import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PhotosListItem from './PhotosListItem'

const PhotosList = ({ photos }) => {
  const renderItem = ({ item }) => <PhotosListItem item={item} />

  return (
    <View style={styles.container}>
      <Text>Photos</Text>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(photo) => String(photo.id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})

export default PhotosList
