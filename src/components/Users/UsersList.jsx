import React from 'react'
import { FlatList, View, ScrollView } from 'react-native'
import UsersItem from './UsersItem'

const UsersList = ({ users }) => {
  const renderItem = ({ item: { firstName, lastName } }) => (
    <UsersItem
      firstName={firstName}
      lastName={lastName}
    />
  )

  return (
    <View>
      <ScrollView>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(user) => String(user.id)}
        />
      </ScrollView>
    </View>
  )
}

export default UsersList
