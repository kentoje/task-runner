import React from 'react'
import { Text, View } from 'react-native'

const PostsListItem = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default PostsListItem
