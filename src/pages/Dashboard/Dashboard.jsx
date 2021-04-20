import React, { useContext, useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { UsersContext } from '../../context/usersContext'
import UserInfos from './components/UserInfos'
import Map from '../../components/Map'
import { getMarkersFromUsers } from '../../lib/map'
import TodoList from './components/TodoList'
import Album from './components/Albums'
import Posts from './components/Posts'
import Loader from '../../components/Loader'

const Dashboard = ({ route }) => {
  const {
    params: { userId },
  } = route

  const [currentUser, setCurrentUser] = useState()
  const [todos, setTodos] = useState([])
  const [albums, setAlbums] = useState([])
  const [posts, setPosts] = useState([])

  const { users } = useContext(UsersContext)

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === userId))
  }, [users, userId])

  useEffect(() => {
    ;(async () => {
      if (currentUser) {
        const todoUrl = `https://jsonplaceholder.typicode.com${currentUser.todos}`
        const response = await fetch(todoUrl)
        const data = await response.json()
        setTodos(data)
      }
    })()
  }, [currentUser])

  useEffect(() => {
    ;(async () => {
      if (currentUser) {
        const albumsUrl = `https://jsonplaceholder.typicode.com${currentUser.albums}`
        const response = await fetch(albumsUrl)
        const data = await response.json()
        setAlbums(data)
      }
    })()
  }, [currentUser])

  useEffect(() => {
    ;(async () => {
      if (currentUser) {
        const postsUrl = `https://jsonplaceholder.typicode.com${currentUser.posts}`
        const response = await fetch(postsUrl)
        const data = await response.json()
        setPosts(data)
      }
    })()
  }, [currentUser])

  return (
    <>
      {currentUser ? (
        <ScrollView style={styles.container}>
          <UserInfos user={currentUser} />
          <Map data={getMarkersFromUsers([currentUser])} navigate={() => {}} />
          {todos.length ? <TodoList todos={todos} /> : null}
          {albums.length ? <Album albums={albums} /> : null}
          {posts.length ? <Posts posts={posts} /> : null}
        </ScrollView>
      ) : (
        <Loader />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})

export default Dashboard
