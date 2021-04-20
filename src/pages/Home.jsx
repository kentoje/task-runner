import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
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

  // TODO: Refacto this crap!
  useEffect(() => {
    if (!loading) {
      filter(users, '')
    }
  }, [loading])

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <TextInput
            onChangeText={(event) => {
              filter(users, event)
            }}
            placeholder="Search for a user"
          />
          <UsersList users={state} />
          <Map data={getMarkersFromUsers(state)} navigation={navigation} />
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
