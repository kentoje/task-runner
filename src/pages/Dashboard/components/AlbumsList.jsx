import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AlbumsListItem from './AlbumsListItem'

const AlbumsList = ({ albums, navigate }) => {
  const renderItem = ({ item }) => <AlbumsListItem item={item} navigate={navigate} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albums</Text>
      <FlatList data={albums} renderItem={renderItem} keyExtractor={(album) => String(album.id)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
})

export default AlbumsList
