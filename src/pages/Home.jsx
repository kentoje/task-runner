import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
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
  const [focusFilter, setFocusFilter] = useState(false)

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
        <View style={styles.container}>
          <View style={styles.userWrapper}>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={(event) => {
                  filter(users, event)
                }}
                onFocus={() => {
                  setFocusFilter(true)
                }}
                onBlur={() => {
                  setFocusFilter(false)
                }}
                placeholder="Search for a user"
                style={styles.input}
              />
            </View>
            <View style={styles.usersWrapper}>
              <UsersList users={state} navigate={navigate} />
            </View>
          </View>
          {!focusFilter ? (
            <View style={styles.mapWrapper}>
              <Map data={getMarkersFromUsers(state)} navigate={navigate} />
            </View>
          ) : null}
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
  userWrapper: {
    flex: 3,
    paddingTop: 8,
  },
  mapWrapper: {
    flex: 2,
  },
  inputWrapper: {
    paddingHorizontal: 8,
  },
  usersWrapper: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
  },
  input: {
    borderRadius: 4,
    fontSize: 16,
    borderColor: '#DFDFDF',
    backgroundColor: '#F9F9F9',
    borderWidth: 1.5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
})

export default Home
