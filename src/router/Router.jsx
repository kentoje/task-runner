import React from 'react'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import Post from '../pages/Post/Post'
import { createStackNavigator } from '@react-navigation/stack'
import { UsersProvider } from '../context/usersContext'

const Stack = createStackNavigator()

const routes = [
  {
    id: 1,
    name: 'Home',
    component: Home,
  },
  {
    id: 2,
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    id: 3,
    name: 'Post',
    component: Post,
  },
]

const Router = () => {
  return (
    <UsersProvider>
      <Stack.Navigator initialRouteName="Home">
        {routes.map(({ id, name, component }) => (
          <Stack.Screen key={id} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </UsersProvider>
  )
}

export default Router
