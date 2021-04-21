import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CommentsList from './components/CommentsList'
import Loader from '../../components/Loader'

const Post = ({ route }) => {
  const {
    params: { post },
  } = route

  const [comments, setComments] = useState([])

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
      </ScrollView>
    </View>
  )
}
export default Post
