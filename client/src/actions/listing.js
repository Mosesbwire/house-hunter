
import axios from 'axios'
import { getItemFromSessionStorage } from '../utils/utils'
import {
    GET_LISTING,
    GET_LISTINGS,
    LISTING_ERROR,
    LIKE_LISTING,
    GET_LIKED_LISTINGS
} from './types'

export async function getListings(context) {

    try {
        const res = await axios.get('http://localhost:5000/api/v1/listings')
        
        context.dispatch({type: GET_LISTINGS, payload: res.data})
    } catch (err){
        console.error(err)
        context.dispatch({
            type: LISTING_ERROR,
            payload: {msg: err.message, status: err.code}
        })
    }    
}

export async function getListing(context, id){

    try{
        const res = await axios.get(`http://localhost:5000/api/v1/listings/${id}`)

        context.dispatch({type: GET_LISTING, payload: res.data})
    } catch (err){
        console.error(err)
        context.dispatch({
            type: LISTING_ERROR,
            payload: {msg: err.message, status: err.code}
        })
    }
}

export async function likeListing(context, listingId) {
    const user = getItemFromSessionStorage("user")
    const userId = user._id 
    try {
        const res = await axios.post(`http://localhost:5000/api/v1/customers/${userId}/${listingId}`)
        context.dispatch({
            type: LIKE_LISTING,
            payload: res.data
        })
    } catch (err) {
        context.dispatch({
            type: LISTING_ERROR,
            payload: {msg: 'Error', status: 500}
        })
    }
}

export async function viewLikes(context) {
    const user = getItemFromSessionStorage("user")
    const userId = user._id 
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/customers/${userId}/likes`)
        context.dispatch({
            type: GET_LIKED_LISTINGS,
            payload: res.data
        })
    } catch (err) {
        context.dispatch({
            type: LISTING_ERROR,
            payload: {msg: 'Error', status: 500}
        })
    }
}





