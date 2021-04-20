import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const UserInfos = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Informations</Text>
      <Text style={styles.item}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.item}>{user.companyName}</Text>
      <Text style={styles.item}>{user.email}</Text>
      <Text style={styles.item}>{user.phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'lavender',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
  },
})

export default UserInfos
