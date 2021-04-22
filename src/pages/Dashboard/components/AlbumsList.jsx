import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AppText from '../../../components/AppText'
import AlbumsListItem from './AlbumsListItem'

const AlbumsList = ({ albums, navigate }) => {
  const renderItem = ({ item }) => <AlbumsListItem item={item} navigate={navigate} />

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Albums</AppText>
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
