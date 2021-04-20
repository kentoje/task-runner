import React, { useReducer } from 'react'
import { filterReducer, initialState } from './reducer'
import { ENUM_TYPES } from './constants'

const useFilter = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState)

  const filter = (data, event) => {
    dispatch({
      type: ENUM_TYPES.filter,
      payload: {
        data,
        filter: event,
      },
    })
  }

  return [state, filter]
}

export { useFilter }
