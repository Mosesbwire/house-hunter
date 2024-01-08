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
import { getListing } from '../../actions/listing.js'
import Loading from '../spinner/Loading.js'
import './listing-page.css'

const ListingPage = props => {
	const [loading, setLoading] = useState(true)
	const ctx = useContext(ListingContext)
	const { id } = useParams()
	
	useEffect(()=>{

		getListing(ctx, id)
			
	}, [id])
	
 return ctx.state.listing_loading ? <Loading/> : (
	<div className='listing-page'>
		
		<ListingGallery images={ctx.state.listing.images} name={ctx.state.listing.name} />
	  <div className='listing-contact-row container'>
	     <PrimaryDetails
		 	rent={ctx.state.listing.rentPrice}
		 	location={ctx.state.listing.location}
		 	details={ctx.state.listing.details}
		 />
	     <ContactCard/>
	  </div>
	  <LocalInformation coordinates={ctx.state.listing.geoLocation}/>
	  <SimilarListings/>
	</div>

 )
}

ListingPage.propTypes = {

}

export default ListingPage
