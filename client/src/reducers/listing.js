import {
    GET_LISTINGS,
    LISTING_ERROR
} from '../customHooks/types'

export const initialState = {
    listings: [],
    listing: null,
    loading: true,
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