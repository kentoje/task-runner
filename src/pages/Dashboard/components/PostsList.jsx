import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler'
import PostsListItem from './PostsListItem'

const PostsList = ({ posts, navigate }) => {
  const renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        navigate(item.id)
      }}
    >
      <PostsListItem item={item} />
    </TouchableHighlight>
  )

  return (
    <View style={styles.container}>
      <Text>Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(post) => String(post.id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})

export default PostsList
