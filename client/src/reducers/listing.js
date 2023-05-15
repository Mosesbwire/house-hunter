import {
    GET_LISTINGS,
    GET_LISTING,
    LISTING_ERROR
} from '../actions/types'

export const initialState = {
    listings: [],
    listing: null,
    loading: true,
    listing_loading: true,
    error: {}
}

export function listingReducer(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case GET_LISTINGS:
           
            return {
                ...state,
                listings: payload,
                loading: false
            }
        case GET_LISTING:
           
            return {
                ...state,
                listing: payload,
                listing_loading: false
            }
        case LISTING_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}