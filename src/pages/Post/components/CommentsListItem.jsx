import React from 'react'
import { Text, View } from 'react-native'

const CommentsListItem = ({ item }) => {
  const [name] = item.email.split('@')

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Comment: {item.body}</Text>
    </View>
  )
}

export default CommentsListItem
