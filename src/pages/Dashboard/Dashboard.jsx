import React, { useContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { UsersContext } from '../../context/usersContext'
import UserInfos from './components/UserInfos'
import TodoList from './components/TodoList'
import Album from './components/Albums'

const Dashboard = ({ route }) => {
  const {
    params: { userId },
  } = route
  const { users, loading } = useContext(UsersContext)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === userId))
  }, [users, userId])

  return (
    <>
      {currentUser ? (
        <View>
          <UserInfos user={currentUser} />
          <TodoList user={currentUser} />
          <Album />
        </View>
      ) : (
        <Text>'bite'</Text>
      )}
    </>
  )
}

export default Dashboard
