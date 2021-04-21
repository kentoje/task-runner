import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CommentsList from './components/CommentsList'

const Post = ({ route }) => {
  const {
    params: { postId },
  } = route

  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    ;(async () => {
      const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
      const response = await fetch(postUrl)
      const data = await response.json()

      setPost(data)
    })()
  }, [postId])

  useEffect(() => {
    ;(async () => {
      const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      const response = await fetch(commentsUrl)
      const data = await response.json()

      setComments(data)
    })()
  }, [postId])

  return (
    <View>
      <ScrollView>
        {post ? (
          <>
            <Text>Title: {post.title}</Text>
            <Text>Description: {post.body}</Text>
          </>
        ) : null}
        {comments.length ? <CommentsList comments={comments} /> : null}
      </ScrollView>
    </View>
  )
}
export default Post
