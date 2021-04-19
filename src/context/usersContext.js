import React, { createContext } from 'react'
import { useFetch } from '../hooks/fetch/useFetch'
import { serializeUsers } from '../lib/serialize'

const UsersContext = createContext()

const UsersProvider = ({ children }) => {
  const url = 'http://jsonplaceholder.typicode.com/users'
  const [users, loading, error] = useFetch(url)(serializeUsers)

  return (
    <UsersContext.Provider value={{ users, loading, error }}>
      {children}
    </UsersContext.Provider>
  )
}

export { UsersContext, UsersProvider }
