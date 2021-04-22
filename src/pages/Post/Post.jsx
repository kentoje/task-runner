import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Button, StyleSheet } from 'react-native'
import CommentsList from './components/CommentsList'
import Loader from '../../components/Loader'
import { v4 as uuidv4 } from 'uuid'
import { capitalize } from '../../lib/string'
import AppText from '../../components/AppText'

const Post = ({ route }) => {
  const {
    params: { post },
  } = route

  const [email, setEmail] = useState(null)
  const [comments, setComments] = useState([])
  const [inputValue, setInputValue] = useState(null)

  const addComment = (comment) => {
    setComments([comment, ...comments])
  }

  useEffect(() => {
    ;(async () => {
      const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      const response = await fetch(commentsUrl)
      const data = await response.json()

      setComments(data)
    })()
  }, [post])

  return (
    <View style={styles.container}>
      <ScrollView>
        <AppText style={styles.title}>{capitalize(post.title)}</AppText>
        <AppText style={styles.description}>{capitalize(post.body)}</AppText>
        <View style={styles.commentForm}>
          <TextInput
            style={styles.input}
            onChangeText={(event) => {
              setEmail(event)
            }}
            value={email}
            placeholder="Your email"
          />
          <TextInput
            style={styles.input}
            onChangeText={(event) => {
              setInputValue(event)
            }}
            value={inputValue}
            placeholder="Your comment"
          />
          <Button
            onPress={() => {
              addComment({
                id: uuidv4(),
                email,
                body: inputValue,
              })
              setEmail('')
              setInputValue('')
            }}
            title="Submit"
            disabled={!inputValue?.length || !email?.length || !email?.includes('@')}
          />
        </View>
        {comments.length ? <CommentsList comments={comments} /> : <Loader />}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  commentForm: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    marginTop: 16,
  },
  input: {
    borderRadius: 4,
    fontSize: 14,
    borderColor: '#DFDFDF',
    backgroundColor: '#F9F9F9',
    borderWidth: 1.5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
})

export default Post
