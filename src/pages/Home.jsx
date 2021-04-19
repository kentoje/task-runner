import React from 'react'
import { View, Text } from 'react-native'
import { useFetch } from '../hooks/fetch/useFetch'
import { serializeUsers } from '../lib/serialize'
import UsersList from '../components/Users/UsersList'

const Home = () => {
  const url = 'http://jsonplaceholder.typicode.com/users'
  const [users, loading, error] = useFetch(url)(serializeUsers)

  return (
    <View>{!loading ? <UsersList users={users} /> : <Text>Loading</Text>}</View>
  )
}

export default Home
