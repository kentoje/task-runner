import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  TouchableHighlight,
} from 'react-native'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, addTodo, toggleTodo, openModal }) => {
  const renderItem = ({ item }) => (
    <TodoListItem item={item} callback={toggleTodo} />
  )

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View />
          <Text style={styles.title}>Todo List</Text>
          <TouchableHighlight
            onPress={() => {
              openModal()
            }}
          >
            <Text style={styles.button}>+</Text>
          </TouchableHighlight>
        </View>
        <FlatList
          data={todos}
          renderItem={renderItem}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  todo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    fontSize: 30,
  },
  text: {
    fontSize: 16,
  },
  switch: {
    marginLeft: 30,
  },
})

export default TodoList
