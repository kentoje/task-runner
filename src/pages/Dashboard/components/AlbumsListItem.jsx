import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native'
import PhotosList from './PhotosList'
import { remodelPhotos } from '../../../lib/remodel'
import { capitalize } from '../../../lib/string'
import AppText from '../../../components/AppText'
import PHOTOS from '../../../mocks/photos'

const AlbumsListItem = ({ item, navigate }) => {
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const albumsUrl = `https://jsonplaceholder.cypress.io${item.photos}`
        const response = await fetch(albumsUrl)

        if (!response.ok || global.mocks) {
          const [albumId] = item.photos.match(/[0-9]/)
          setPhotos(
            await remodelPhotos(PHOTOS.filter((photo) => photo.albumId === Number(albumId)))
          )
          // setPhotos([])
          return
        }

        const data = await response.json()

        setPhotos(await remodelPhotos(data))
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
