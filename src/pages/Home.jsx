import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useFetch } from '../hooks/fetch/useFetch'
import { serializeUsers } from '../lib/serialize'
import UsersList from '../components/Users/UsersList'
import Loader from '../components/Loader'
import Map from '../components/Map'
import { getMarkersFromUsers } from '../lib/map'

const Home = () => {
  const url = 'http://jsonplaceholder.typicode.com/users'
  const [users, loading] = useFetch(url)(serializeUsers)

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <UsersList users={users} />
          <Map data={getMarkersFromUsers(users)} />
        </View>
      ) : (
        <Loader />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home
