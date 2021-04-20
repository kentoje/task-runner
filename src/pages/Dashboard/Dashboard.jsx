import React, { useContext, useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { UsersContext } from '../../context/usersContext'
import UserInfos from './components/UserInfos'
import TodoList from './components/TodoList'
import Album from './components/Albums'
import Loader from '../../components/Loader'

const Dashboard = ({ route }) => {
  const {
    params: { userId },
  } = route

  const [currentUser, setCurrentUser] = useState()

  const { users } = useContext(UsersContext)

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === userId))
  }, [users, userId])

  return (
    <>
      {currentUser ? (
        <ScrollView style={styles.container}>
          <UserInfos user={currentUser} />
          <TodoList user={currentUser} />
          <Album />
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
