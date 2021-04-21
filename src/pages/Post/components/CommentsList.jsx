import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CommentsListItem from './CommentsListItem'

const CommentsList = ({ comments }) => {
  const renderItem = ({ item }) => <CommentsListItem item={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(comment) => String(comment.id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'lavender',
    borderRadius: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 24,
  },
})

export default CommentsList
