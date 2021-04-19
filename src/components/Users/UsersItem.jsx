import React from 'react'
import { View, Text } from 'react-native'

const UsersItem = ({ firstName, lastName }) => {
  return (
    <View>
      <Text>
        {firstName}, {lastName}
      </Text>
    </View>
  )
}

export default UsersItem
