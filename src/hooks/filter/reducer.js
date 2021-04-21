import React from 'react'
import { ENUM_TYPES } from './constants'

const initialState = []

const filterByFullName = (data, filter) =>
  data.filter((item) => item.firstName.toLowerCase().includes(filter.toLowerCase()))

const reducer = (state = [], action) => {
  if (action.type === ENUM_TYPES.filter) {
    return filterByFullName(action.payload.data, action.payload.filter)
  }

  return state
}

export { initialState, reducer as filterReducer }
