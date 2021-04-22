import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native'
import PhotosList from './PhotosList'
import { serializePhotos } from '../../../lib/serialize'
import { capitalize } from '../../../lib/string'
import AppText from '../../../components/AppText'

const AlbumsListItem = ({ item, navigate }) => {
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const albumsUrl = `https://jsonplaceholder.typicode.com${item.photos}`
        const response = await fetch(albumsUrl)

        if (!response.ok) {
          setPhotos([])
          return
        }

        const data = await response.json()

        setPhotos(await serializePhotos(data))
      } catch (err) {
        console.error(err)
      }
    })()
  }, [item])

  return (
    <TouchableHighlight onPress={() => navigate('Album', { photos })} underlayColor={'#E9E9E944'}>
      <View style={styles.container}>
        <AppText style={styles.title}>{capitalize(item.title)}</AppText>
        {photos ? (
          <PhotosList photos={photos} />
        ) : (
          <ActivityIndicator size="small" color="#007BC3" />
        )}
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
