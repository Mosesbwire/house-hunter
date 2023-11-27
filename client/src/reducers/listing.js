import {
    GET_LISTINGS,
    GET_LISTING,
    LISTING_ERROR,
    LIKE_LISTING,
    GET_LIKED_LISTINGS
} from '../actions/types'

export const initialState = {
    listings: [],
    likes: [],
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
        case LIKE_LISTING:
            return {
                ...state,
                loading: false
            }
        case GET_LIKED_LISTINGS:
            return {
                ...state,
                likes: payload,
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