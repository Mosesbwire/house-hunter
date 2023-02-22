import React from 'react'
import PropTypes from 'prop-types'
import ListingGallery from './listingGallery/ListingGallery.js'
import PrimaryDetails from './listing-primary-details/PrimaryDetails.js'
import LocalInformation from './local-information/LocalInformation.js'

const ProductPage = props => {

 return (
	<div>
	  <ListingGallery/>
	  <PrimaryDetails/>
	  <LocalInformation/>
	</div>

 )
}

ProductPage.propTypes = {

}

export default ProductPage
