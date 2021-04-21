import React from 'react'
import { Text, View, Switch, StyleSheet } from 'react-native'
import { capitalize } from '../../../lib/string'

const TodoListItem = ({ item: { id, title, completed }, callback }) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{capitalize(title)}</Text>
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
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E9E9E9',
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
