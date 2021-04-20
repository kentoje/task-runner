import React from 'react'
import { Text, View, Switch, StyleSheet } from 'react-native'

const TodoListItem = ({ item: { title, completed } }) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{title}</Text>
      <Switch
        style={styles.switch}
        trackColor={{ true: '#4169e1' }}
        value={completed}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
  switch: {
    marginLeft: 'auto',
  },
})

export default TodoListItem
