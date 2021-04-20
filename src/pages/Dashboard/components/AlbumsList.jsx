import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AlbumsListItem from './AlbumsListItem'

const AlbumsList = ({ albums }) => {
  const renderItem = ({ item }) => <AlbumsListItem item={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albums</Text>
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
    padding: 16,
    backgroundColor: 'lavender',
    borderRadius: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 24,
  },
})

export default AlbumsList
