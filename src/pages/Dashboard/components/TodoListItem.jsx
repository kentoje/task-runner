import React from 'react'
import { Text, View, Switch, StyleSheet } from 'react-native'

const TodoListItem = ({ item: { id, title, completed }, callback }) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.switch}>
        <Switch
          onChange={() => {
            callback(id)
          }}
          value={completed}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  switch: {
    marginLeft: 'auto',
  },
})

export default TodoListItem
