import React from 'react'
import { ENUM_TYPES } from './constants'

const initialState = {
  result: null,
  loading: true,
  error: null,
}

const reducer = (state, action) => {
  if (action.type === ENUM_TYPES.loading) {
    return {
      result: null,
      loading: true,
      error: null,
    }
  }

  if (action.type === ENUM_TYPES.complete) {
    return {
      result: action.payload.response,
      loading: false,
      error: null,
    }
  }

  if (action.type === ENUM_TYPES.error) {
    return {
      result: null,
      loading: false,
      error: action.payload.error,
    }
  }

  return state
}

export { initialState, reducer as fetchReducer }
