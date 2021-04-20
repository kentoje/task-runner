import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AlbumsListItem from './AlbumsListItem'

const AlbumsList = ({ albums }) => {
  const renderItem = ({ item }) => <AlbumsListItem item={item} />

  return (
    <View style={styles.container}>
      <Text>Albums</Text>
      <FlatList
        data={albums}
        renderItem={renderItem}
        keyExtractor={(album) => String(album.id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})

export default AlbumsList
