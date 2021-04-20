import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <FlatList
          data={todos}
          renderItem={TodoListItem}
          keyExtractor={(todo) => String(todo.id)}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'lavender',
    borderRadius: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
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

export default TodoList
