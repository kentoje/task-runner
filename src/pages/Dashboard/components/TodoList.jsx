import React, { useState, useEffect } from 'react'
import { Text, View, Switch, StyleSheet, FlatList } from 'react-native'
import { useFetch } from '../../../hooks/fetch/useFetch'
import Loader from '../../../components/Loader'
import TodoListItem from './TodoListItem'

const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([])
  const url = `https://jsonplaceholder.typicode.com${user.todos}`
  const [result, loading] = useFetch(url)()

  useEffect(() => {
    setTodos(result)
  }, [result])

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <Text style={styles.title}>Todo List</Text>
          <FlatList
            data={result}
            renderItem={TodoListItem}
            keyExtractor={(todo) => String(todo.id)}
          />
        </View>
      ) : (
        <Loader />
      )}
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
