import React, { useReducer, useEffect } from 'react'
import { fetchReducer, initialState } from './reducer'
import { ENUM_TYPES } from './constants'

/* eslint-disable react-hooks/rules-of-hooks */
const useFetch = (url) => (remodel) => {
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
            response: remodel ? remodel(data) : data,
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
  }, [remodel])

  return [state.result, state.loading, state.error]
}

export { useFetch }
