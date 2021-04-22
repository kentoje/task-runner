import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../../../components/AppText'
import { capitalize } from '../../../lib/string'

const PostsListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <AppText>{capitalize(item.title)}</AppText>
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
