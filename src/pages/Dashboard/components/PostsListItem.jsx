import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { capitalize } from '../../../lib/string'

const PostsListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{capitalize(item.title)}</Text>
    </View>
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
})

export default PostsListItem
