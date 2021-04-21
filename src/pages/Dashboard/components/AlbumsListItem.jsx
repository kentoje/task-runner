import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import PhotosList from './PhotosList'
import { serializePhotos } from '../../../lib/serialize'
import { capitalize } from '../../../lib/string'

const AlbumsListItem = ({ item, navigate }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    ;(async () => {
      const albumsUrl = `https://jsonplaceholder.typicode.com${item.photos}`
      const response = await fetch(albumsUrl)
      const data = await response.json()

      setPhotos(await serializePhotos(data))
    })()
  }, [item])

  return (
    <TouchableHighlight onPress={() => navigate('Album', { photos })} underlayColor={'#E9E9E944'}>
      <View style={styles.container}>
        <Text style={styles.title}>{capitalize(item.title)}</Text>
        {photos.length ? <PhotosList photos={photos} /> : null}
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E9E9E9',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    marginBottom: 16,
  },
})

export default AlbumsListItem
