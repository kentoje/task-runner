import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler'
import PostsListItem from './PostsListItem'

const PostsList = ({ posts, navigate }) => {
  const renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        navigate('Post', { post: item })
      }}
      underlayColor={'#E9E9E944'}
    >
      <PostsListItem item={item} />
    </TouchableHighlight>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList data={posts} renderItem={renderItem} keyExtractor={(post) => String(post.id)} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  container: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
  },
})

export default PostsList
