import React, {useContext}from 'react'
import PropTypes from 'prop-types'
import Card from './Card.js'
import Pill from '../badges/Badge.js'
// import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import './Gallery.css'
import { ListingContext } from '../../context/listingsContextProvider.js'
import useGetListings from '../../customHooks/useGetListings.js'


const Gallery = props => {
	const ctx = useContext(ListingContext)
	useGetListings(ctx)
  return ctx.listingState.loading ? <p>Loading</p> : (
    <div className='container gallery'>
		
		{ctx.listingState.listings.listings.map(listing =>(
			<Card key={listing.id} listing={listing}/>
		))}
	  <div className='map-badge'>
		<Pill name={"Show map"} icon={faMap}/>
	  </div>
    </div>
  )
}

Gallery.propTypes = {

}

export default Gallery
