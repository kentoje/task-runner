import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import PhotosList from './PhotosList'
import { serializePhotos } from '../../../lib/serialize'

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
    <TouchableHighlight onPress={() => navigate('Album', { photos })}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        {photos.length ? <PhotosList photos={photos} /> : null}
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 16,
  },
})

export default AlbumsListItem
