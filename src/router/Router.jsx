import React from 'react'
import Home from '../pages/Home'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const routes = [
  {
    id: 1,
    name: 'Home',
    component: Home,
  },
]

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {routes.map(({ id, name, component }) => (
        <Stack.Screen key={id} name={name} component={component} />
      ))}
    </Stack.Navigator>
  )
}

export default Router
