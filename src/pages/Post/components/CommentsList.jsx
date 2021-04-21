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
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
})

export default CommentsList
