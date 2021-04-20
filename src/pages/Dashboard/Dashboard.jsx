import React, { useContext, useState, useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  Modal,
  Text,
  Button,
  TextInput,
} from 'react-native'
import { UsersContext } from '../../context/usersContext'
import UserInfos from './components/UserInfos'
import Map from '../../components/Map'
import { getMarkersFromUsers } from '../../lib/map'
import TodoList from './components/TodoList'
import AlbumsList from './components/AlbumsList'
import PostsList from './components/PostsList'
import Loader from '../../components/Loader'

const Dashboard = ({ route }) => {
  const {
    params: { userId },
  } = route

  const [currentUser, setCurrentUser] = useState()
  const [todos, setTodos] = useState([])
  const [albums, setAlbums] = useState([])
  const [posts, setPosts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [newTodo, setNewTodo] = useState({ title: '' })

  const { users } = useContext(UsersContext)

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

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
        <>
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              closeModal()
            }}
          >
            <Text>Add a brand new Todo!</Text>
            <TextInput
              onChangeText={(event) => {
                setNewTodo({
                  id: new Date().toISOString(),
                  userId: currentUser.id,
                  title: event,
                  completed: false,
                })
              }}
              value={newTodo.title}
            />
            <Button
              onPress={() => {
                addTodo(newTodo)
                setNewTodo({ title: '' })
                closeModal()
              }}
              title="Submit"
              color="coral"
            />
            <Button
              onPress={() => {
                closeModal()
              }}
              title="Cancel"
              color="black"
            />
          </Modal>
          <ScrollView style={styles.container}>
            <UserInfos user={currentUser} />
            <Map
              data={getMarkersFromUsers([currentUser])}
              navigate={() => {}}
            />
            {todos.length ? (
              <TodoList
                todos={todos}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                openModal={openModal}
              />
            ) : null}
            {albums.length ? <AlbumsList albums={albums} /> : null}
            {posts.length ? <PostsList posts={posts} /> : null}
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
