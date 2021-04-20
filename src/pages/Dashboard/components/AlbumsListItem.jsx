import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import PhotosList from './PhotosList'
import { serializePhotos } from '../../../lib/serialize'

const AlbumsListItem = ({ item }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    ;(async () => {
      const albumsUrl = `https://jsonplaceholder.typicode.com${item.photos}`
      const response = await fetch(albumsUrl)
      const data = await response.json()

      setPhotos(serializePhotos(data))
    })()
  }, [item])

  return (
    <View>
      <Text>{item.title}</Text>
      {photos.length ? <PhotosList photos={photos} /> : null}
    </View>
  )
}

export default AlbumsListItem
