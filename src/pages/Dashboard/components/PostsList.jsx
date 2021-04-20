import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PostsList = ({ posts }) => {
  return (
    <View style={styles.container}>
      <Text>{posts[0].title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})

export default PostsList
