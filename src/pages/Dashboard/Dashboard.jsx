import React, { useContext, useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { UsersContext } from '../../context/usersContext'
import UserInfos from './components/UserInfos'
import TodoList from './components/TodoList'
import AlbumsList from './components/AlbumsList'
import PostsList from './components/PostsList'
import Loader from '../../components/Loader'
import TodoModal from './components/TodoModal'
import { remodelAlbums } from '../../lib/remodel'

const Dashboard = ({ route, navigation }) => {
  const {
    params: { userId },
  } = route

  const [currentUser, setCurrentUser] = useState(null)
  const [todos, setTodos] = useState(null)
  const [albums, setAlbums] = useState(null)
  const [posts, setPosts] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const navigate = (page, params = {}) => {
    navigation.navigate(page, params)
  }
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

  useEffect(() => {
    setCurrentUser(users?.find((user) => user.id === userId))
  }, [users, userId])

  useEffect(() => {
    ;(async () => {
      if (currentUser) {
        try {
          const todoUrl = `https://jsonplaceholder.typicode.com${currentUser.todos}`
          const response = await fetch(todoUrl)
          const data = await response.json()

          setTodos(data)
        } catch (err) {
          console.error(err)
          setTodos([])
        }
      }
    })()
  }, [currentUser])

  useEffect(() => {
    ;(async () => {
      if (currentUser) {
        try {
          const albumsUrl = `https://jsonplaceholder.typicode.com${currentUser.albums}`
          const response = await fetch(albumsUrl)
          const data = await response.json()

          setAlbums(remodelAlbums(data))
        } catch (err) {
          console.error(err)
          setAlbums([])
        }
      }
    })()
  }, [currentUser])

  useEffect(() => {
    ;(async () => {
      if (currentUser) {
        try {
          const postsUrl = `https://jsonplaceholder.typicode.com${currentUser.posts}`
          const response = await fetch(postsUrl)
          const data = await response.json()

          setPosts(data)
        } catch (err) {
          console.error(err)
          setPosts([])
        }
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
            {todos && todos.length ? (
              <TodoList
                todos={todos}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                openModal={openModal}
              />
            ) : null}
            {albums && albums.length ? <AlbumsList albums={albums} navigate={navigate} /> : null}
            {posts && posts.length ? <PostsList posts={posts} navigate={navigate} /> : null}
          </ScrollView>
        </>
      ) : null}
      {!currentUser || todos === null || albums === null || posts === null ? <Loader /> : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})

export default Dashboard
