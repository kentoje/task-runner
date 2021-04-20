import React from 'react'
import { FlatList, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import UsersItem from './UsersItem'

const UsersList = ({ users, navigate }) => {
  const renderItem = ({ item: { firstName, lastName, id } }) => (
    <TouchableHighlight onPress={() => navigate(id)}>
      <UsersItem firstName={firstName} lastName={lastName} />
    </TouchableHighlight>
  )

  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(user) => String(user.id)}
      />
    </View>
  )
}

export default UsersList
