import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../../../components/AppText'
import { capitalize } from '../../../lib/string'

const CommentsListItem = ({ item }) => {
  const [name] = item.email.split('@')

  return (
    <View style={styles.container}>
      <AppText style={styles.name}>{name} says:</AppText>
      <AppText>{`${capitalize(item.body)}.`}</AppText>
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
