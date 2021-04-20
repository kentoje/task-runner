import React, { useReducer, useEffect } from 'react'
import { fetchReducer, initialState } from './reducer'
import { ENUM_TYPES } from './constants'

/* eslint-disable react-hooks/rules-of-hooks */
const useFetch = (url) => (serialize) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    dispatch({ type: ENUM_TYPES.loading })

    const fetchUrl = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()

        dispatch({
          type: ENUM_TYPES.complete,
          payload: {
            response: serialize ? serialize(data) : data,
          },
        })
      } catch (err) {
        dispatch({
          type: ENUM_TYPES.error,
          payload: {
            error: err,
          },
        })
      }
    }

    fetchUrl()
  }, [serialize])

  return [state.result, state.loading, state.error]
}

export { useFetch }
