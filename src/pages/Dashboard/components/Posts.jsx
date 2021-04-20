import React from 'react'
import { Text, View } from 'react-native'

const Posts = ({ posts }) => {
  return (
    <View>
      <Text>{posts[0].title}</Text>
    </View>
  )
}

export default Posts
