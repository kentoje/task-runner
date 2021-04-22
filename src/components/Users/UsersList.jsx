import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import AppText from '../../components/AppText'
import UsersItem from './UsersItem'

const UsersList = ({ users, navigate }) => {
  const renderItem = ({ item, index }) => (
    <>
      {index > 0 ? <View style={styles.row} /> : null}
      <TouchableHighlight
        onPress={() => {
          navigate(item.id)
        }}
        underlayColor={'#E9E9E944'}
      >
        <UsersItem user={item} />
      </TouchableHighlight>
    </>
  )

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Users</AppText>
      {users.length ? (
        <FlatList data={users} renderItem={renderItem} keyExtractor={(user) => String(user.id)} />
      ) : (
        <AppText style={styles.noUser}>No user found...</AppText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    marginBottom: 32,
    backgroundColor: '#F9F9F9',
    borderRadius: 4,
  },
  title: {
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    marginBottom: 16,
    backgroundColor: '#F9F9F9',
  },
  row: {
    height: 1.5,
    marginHorizontal: 16,
    backgroundColor: '#E9E9E9',
  },
  noUser: {
    marginLeft: 16,
  },
})

export default UsersList
