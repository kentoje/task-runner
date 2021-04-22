import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../../../components/AppText'
import AlbumsListItem from './AlbumsListItem'

const AlbumsList = ({ albums, navigate }) => {
  const renderItem = (item) => <AlbumsListItem item={item} navigate={navigate} key={item.id} />

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Albums</AppText>
      {albums.map(renderItem)}
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
