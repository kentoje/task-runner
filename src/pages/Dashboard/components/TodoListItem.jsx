import React from 'react'
import { Text, View, Switch, StyleSheet } from 'react-native'

const TodoListItem = ({ item: { id, title, completed }, callback }) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{title}</Text>
      <Switch
        onChange={() => {
          callback(id)
        }}
        style={styles.switch}
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
