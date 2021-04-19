import React from 'react'
import { Text, View } from 'react-native'

const UserInfos = ({ user }) => {
  return (
    <View>
      <Text>{user.firstName}</Text>
      <Text>{user.lastName}</Text>
      <Text>{user.companyName}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
    </View>
  )
}

export default UserInfos
