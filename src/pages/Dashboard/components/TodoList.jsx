import React, { useEffect, useState } from 'react'
import { Text, View, Switch, StyleSheet } from 'react-native'
import { useFetch } from '../../../hooks/fetch/useFetch'

const TodoList = ({ user }) => {
  /*  const url = `https://jsonplaceholder.typicode.com${user.todos}`
  const [result, loading] = useFetch(url)('GET')()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos(result)
  }, [result])
 */
  const mockedTodos = [
    {
      id: 1,
      title: 'Tg fdp ou',
      complete: false,
    },
    {
      id: 2,
      title: 'Bonjour madame',
      complete: true,
    },
  ]

  const onToggle = () => {
    const [result, loading] = useFetch(url)()
  }

  return (
    <>
      <View>
        {mockedTodos.map(({ title, complete }) => (
          <View style={styles.todo}>
            <Text style={styles.text}>{title}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={complete ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={onToggle}
              value={complete}
            />
          </View>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
  },
  text: {
    color: 'red',
  },
})

export default TodoList
