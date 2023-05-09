import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListingGallery from './listingGallery/ListingGallery.js'
import PrimaryDetails from './listing-primary-details/PrimaryDetails.js'
import LocalInformation from './local-information/LocalInformation.js'
import SimilarListings from './similar-listings/SimilarListings.js'
import ContactCard from './contact-card/ContactCard.js'
import Slider from '../slider/ImageSlider.js'
import { ListingContext } from '../../context/listingsContextProvider.js'
import { GET_LISTING } from '../../customHooks/types.js'
import Loading from '../spinner/Loading.js'
import './listing-page.css'

const ListingPage = props => {
	const [loading, setLoading] = useState(true)
	const ctx = useContext(ListingContext)
	const { id } = useParams()
	
	useEffect(()=>{

		if (loading){
			ctx.listingDispatch({type: GET_LISTING, payload: id})
			setLoading(false)
		}
		
		
	}, [id, ctx.listingState.listing])
 return loading ? <Loading/> : (
	<div className='listing-page'>
		<ListingGallery images={ctx.listingState.listing[0].imageUrls} name={ctx.listingState.listing[0].name} />
	  <div className='listing-contact-row container'>
	     <PrimaryDetails
		 	rent={ctx.listingState.listing[0].rentPrice}
		 	location={ctx.listingState.listing[0].location}
		 	details={ctx.listingState.listing[0].details}
		 />
	     <ContactCard/>
	  </div>
	  <LocalInformation coordinates={ctx.listingState.listing[0].geoLocation}/>
	  <SimilarListings/>
	</div>

 )
}

ListingPage.propTypes = {

}

export default ListingPage
