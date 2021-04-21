import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { capitalize } from '../../../lib/string'

const CommentsListItem = ({ item }) => {
  const [name] = item.email.split('@')

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name} says:</Text>
      <Text>{`${capitalize(item.body)}.`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E9E9E9',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})

export default CommentsListItem
