
import axios from 'axios'
import {
    GET_LISTING,
    GET_LISTINGS,
    LISTING_ERROR
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




