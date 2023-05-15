import React, { createContext, useReducer } from 'react'
import {initialState, listingReducer} from '../reducers/listing'

export const ListingContext = createContext()

export function ListingContextProvider(props){
    const [listings, dispatch] = useReducer(listingReducer, initialState)
    return (
        <ListingContext.Provider value={{state: listings, dispatch: dispatch}}>
            {props.children}
        </ListingContext.Provider>
    )
}
