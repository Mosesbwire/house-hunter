import React from 'react'
import PropTypes from 'prop-types'
import ListingGallery from './listingGallery/ListingGallery.js'
import PrimaryDetails from './listing-primary-details/PrimaryDetails.js'
import LocalInformation from './local-information/LocalInformation.js'
import SimilarListings from './similar-listings/SimilarListings.js'
import ContactCard from './contact-card/ContactCard.js'
import Slider from '../slider/ImageSlider.js'
import img_one from '../../images/img-01.webp'
import img_two from '../../images/img-02.webp'
import img_three from '../../images/img-03.webp'
import img_four from '../../images/img-04.webp'
import img_five from '../../images/img-05.webp'
import './listing-page.css'

const ListingPage = props => {
	const imgContainer = [
		img_one,
		img_two,
		img_three,
		img_four,
		img_five,
		img_one,
		img_two,
		img_three,
		img_four,
		img_five
		
	];

 return (
	<div className='listing-page'>
	  <ListingGallery/>
	  <div className='listing-contact-row container'>
	     <PrimaryDetails/>
	     <ContactCard/>
	  </div>
	  <LocalInformation/>
	  <SimilarListings/>
	</div>

 )
}

ListingPage.propTypes = {

}

export default ListingPage
