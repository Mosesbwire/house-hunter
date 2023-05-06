import { useEffect } from 'react'
import axios from 'axios'
import {
    GET_LISTINGS,
    LISTING_ERROR
} from './types'

export default function useGetListings(context) {
    useEffect(()=>{
        const fetchListings = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/v1/listings')
                context.listingDispatch({type: GET_LISTINGS, payload: res.data})
            } catch (err) {
                console.error(err)
                context.listingDispatch({
                    type: LISTING_ERROR,
                    payload: {msg: err.message, status: err.code}
                })
            }
        }

        fetchListings()
	}, [])
}