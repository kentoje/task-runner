import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import UsersItem from './UsersItem'

const UsersList = ({ users, navigate }) => {
  const renderItem = ({ item }) => (
    <TouchableHighlight onPress={() => navigate(item.id)}>
      <UsersItem user={item} />
    </TouchableHighlight>
  )

  return (
    <View>
      {users.length ? (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(user) => String(user.id)}
        />
      ) : (
        <Text>No user found...</Text>
      )}
    </View>
  )
}

export default UsersList
