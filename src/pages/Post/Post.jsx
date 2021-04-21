import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import CommentsList from './components/CommentsList'
import Loader from '../../components/Loader'
import { v4 as uuidv4 } from 'uuid'

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
    <View>
      <ScrollView>
        <Text>Title: {post.title}</Text>
        <Text>Description: {post.body}</Text>
        {comments.length ? <CommentsList comments={comments} /> : <Loader />}
        <TextInput
          onChangeText={(event) => {
            setEmail(event)
          }}
          value={email}
          placeholder="Your email"
        />
        <TextInput
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
      </ScrollView>
    </View>
  )
}
export default Post
