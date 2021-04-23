import React, { useReducer, useEffect } from 'react'
import { fetchReducer, initialState } from './reducer'
import { ENUM_TYPES } from './constants'
import USERS from '../../mocks/users'

/* eslint-disable react-hooks/rules-of-hooks */
const useFetch = (url) => (remodel) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    dispatch({ type: ENUM_TYPES.loading })

    const fetchUrl = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok || global.mocks) {
          dispatch({
            type: ENUM_TYPES.complete,
            payload: {
              response: remodel ? remodel(USERS) : USERS,
            },
          })

          // Error behavior
          // dispatch({
          //   type: ENUM_TYPES.error,
          //   payload: {
          //     error: response,
          //   },
          // })

          return
        }

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
