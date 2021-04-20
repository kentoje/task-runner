import React, { useContext, useEffect } from 'react'
import { ScrollView, StyleSheet, TextInput, View, Text } from 'react-native'
import UsersList from '../components/Users/UsersList'
import Loader from '../components/Loader'
import Map from '../components/Map'
import { getMarkersFromUsers } from '../lib/map'
import { UsersContext } from '../context/usersContext'
import { useFilter } from '../hooks/filter/useFilter'

/* eslint-disable react-hooks/exhaustive-deps */
const Home = ({ navigation }) => {
  const { users, loading } = useContext(UsersContext)
  const [state, filter] = useFilter()

  const navigate = (id) => {
    navigation.navigate('Dashboard', { userId: id })
  }

  // TODO: Refacto this crap!
  useEffect(() => {
    if (!loading) {
      filter(users, '')
    }
  }, [loading])

  return (
    <>
      {!loading ? (
        <ScrollView>
          <Text style={styles.title}>Users</Text>
          <View style={styles.container}>
            <TextInput
              onChangeText={(event) => {
                filter(users, event)
              }}
              placeholder="Search for a user"
              style={styles.input}
            />
            <UsersList users={state} navigate={navigate} />
          </View>
          <Map data={getMarkersFromUsers(state)} navigate={navigate} />
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    borderRadius: 16,
    fontSize: 16,
    borderColor: 'darkgrey',
    borderWidth: 2,
    padding: 8,
    marginBottom: 16,
  },
})

export default Home
