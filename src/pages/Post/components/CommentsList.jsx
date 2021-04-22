import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../../../components/AppText'
import CommentsListItem from './CommentsListItem'

const CommentsList = ({ comments }) => {
  const renderItem = (item) => <CommentsListItem item={item} key={item.id} />

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Comments</AppText>
      {comments.map(renderItem)}
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
