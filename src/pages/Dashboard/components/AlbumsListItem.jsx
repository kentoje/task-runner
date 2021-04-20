import React from 'react'
import { Text, View } from 'react-native'

const AlbumsListItem = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default AlbumsListItem
