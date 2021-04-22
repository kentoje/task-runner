import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import TodoListItem from './TodoListItem'
import AppText from '../../../components/AppText'

const TodoList = ({ todos, toggleTodo, openModal }) => {
  const renderItem = (item) => <TodoListItem item={item} callback={toggleTodo} key={item.id} />

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText style={styles.title}>Todo List</AppText>
        </View>
        <TouchableHighlight
          onPress={() => {
            openModal()
          }}
          underlayColor={'#E9E9E944'}
        >
          <View style={styles.buttonWrapper}>
            <AppText style={styles.button}>+</AppText>
          </View>
        </TouchableHighlight>
        {todos.map(renderItem)}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9F9F9',
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  todo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: '#007BC3',
    marginBottom: 8,
  },
  button: {
    fontSize: 24,
    color: '#007BC3',
  },
  text: {
    fontSize: 16,
  },
  switch: {
    marginLeft: 30,
  },
})

export default TodoList
