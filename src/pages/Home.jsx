import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useFetch } from '../hooks/fetch/useFetch'
import { serializeUsers } from '../lib/serialize'
import UsersList from '../components/Users/UsersList'
import Loader from '../components/Loader'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const Home = () => {
  const url = 'http://jsonplaceholder.typicode.com/users'
  const [users, loading, error] = useFetch(url)(serializeUsers)

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <UsersList users={users} />
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
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
  map: {
    width: '100%',
    height: 300,
  },
})

export default Home
