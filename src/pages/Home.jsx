import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFetch } from '../hooks/fetch/useFetch'
import { serializeUsers } from '../lib/serialize'
import UsersList from '../components/Users/UsersList'
import Loader from '../components/Loader'

const Home = () => {
  const url = 'http://jsonplaceholder.typicode.com/users'
  const [users, loading, error] = useFetch(url)(serializeUsers)

  return (
    <View style={styles.container}>
      {!loading ? <UsersList users={users} /> : <Loader />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home
