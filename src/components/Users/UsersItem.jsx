import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UsersItem = ({ user }) => {
  const { firstName, lastName } = user
  const initals = `${firstName.charAt(0)} ${lastName.charAt(0)}`
  const backgroundColor = user.color

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.initialsContainer,
          backgroundColor,
        }}
      >
        <Text style={styles.initials}>{initals}</Text>
      </View>
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  initialsContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  initials: {
    color: 'white',
  },
  name: {
    marginLeft: 16,
    fontWeight: 'bold',
  },
})

export default UsersItem
