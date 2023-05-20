import React , {createContext, useReducer}from 'react'

import {authState, authReducer} from '../reducers/auth'

export const authContext = createContext()

export function AuthContextProvider(props) {
    const [auth, dispatch] = useReducer(authReducer, authState)
    return(
        <authContext.Provider value={{state: auth, dispatch: dispatch}}>
            {props.children}
        </authContext.Provider>
    )
}
