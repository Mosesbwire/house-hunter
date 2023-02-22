import React from 'react'
import PropTypes from 'prop-types'
import ListingGallery from './listingGallery/ListingGallery.js'
import PrimaryDetails from './listing-primary-details/PrimaryDetails.js'
import LocalInformation from './local-information/LocalInformation.js'
import LocalMap from './local-map/LocalMap.js'
import ContactCard from './contact-card/ContactCard.js'
import './listing-page.css'

const ProductPage = props => {

 return (
	<div>
	  <ListingGallery/>
	  <div className='listing-contact-row container'>
	     <PrimaryDetails/>
	     <ContactCard/>
	  </div>
	  <LocalInformation/>
	  <LocalMap/>
	</div>

 )
}

ProductPage.propTypes = {

}

export default ProductPage
