import React, { useContext, useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { UsersContext } from '../../context/usersContext'
import UserInfos from './components/UserInfos'
import TodoList from './components/TodoList'
import AlbumsList from './components/AlbumsList'
import PostsList from './components/PostsList'
import Loader from '../../components/Loader'
import TodoModal from './components/TodoModal'
import { serializeAlbums } from '../../lib/serialize'

const Dashboard = ({ route, navigation }) => {
  const {
    params: { userId },
  } = route

  const [currentUser, setCurrentUser] = useState()
  const [todos, setTodos] = useState([])
  const [albums, setAlbums] = useState([])
  const [posts, setPosts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const { users } = useContext(UsersContext)

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const navigate = (post) => {
    navigation.navigate('Post', { post })
  }

  useEffect(() => {
    setCurrentUser(users?.find((user) => user.id === userId))
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

        setAlbums(serializeAlbums(data))
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
        <>
          <TodoModal
            modalVisible={modalVisible}
            closeModal={closeModal}
            currentUser={currentUser}
            addTodo={addTodo}
          />
          <ScrollView style={styles.container}>
            <UserInfos user={currentUser} />
            {todos.length ? (
              <TodoList
                todos={todos}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                openModal={openModal}
              />
            ) : null}
            {albums.length ? <AlbumsList albums={albums} /> : null}
            {posts.length ? <PostsList posts={posts} navigate={navigate} /> : null}
          </ScrollView>
        </>
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
