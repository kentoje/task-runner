import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import UsersList from '../components/Users/UsersList'
import Loader from '../components/Loader'
import Map from '../components/Map'
import { getMarkersFromUsers } from '../lib/map'
import { UsersContext } from '../context/usersContext'

const Home = () => {
  const { users, loading } = useContext(UsersContext)

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
