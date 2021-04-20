import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getRandomColor, colorsArray } from '../../lib/colors'

const UsersItem = ({ firstName, lastName }) => {
  const initals = `${firstName.charAt(0)} ${lastName.charAt(0)}`
  const backgroundColor = getRandomColor(colorsArray)()
  const color = getRandomColor(colorsArray)(backgroundColor)

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.initialsContainer,
          backgroundColor,
        }}
      >
        <Text style={{ color }}>{initals}</Text>
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
  name: {
    marginLeft: 16,
  },
})

export default UsersItem
