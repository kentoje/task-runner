import React from 'react'
import { Text, View } from 'react-native'

const Album = ({ albums }) => {
  return (
    <View>
      <Text>{albums[0].title}</Text>
    </View>
  )
}

export default Album
