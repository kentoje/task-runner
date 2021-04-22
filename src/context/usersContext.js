import React, { createContext } from 'react'
import { useFetch } from '../hooks/fetch/useFetch'
import { remodelUsers } from '../lib/remodel'

const UsersContext = createContext()

const UsersProvider = ({ children }) => {
  const url = 'http://jsonplaceholder.typicode.com/users'
  const [users, loading, error] = useFetch(url)(remodelUsers)

  return <UsersContext.Provider value={{ users, loading, error }}>{children}</UsersContext.Provider>
}

export { UsersContext, UsersProvider }
