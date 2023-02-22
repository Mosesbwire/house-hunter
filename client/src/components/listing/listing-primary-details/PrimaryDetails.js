import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower, faBed, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import './primary-details.css'


const PrimaryDetails = props => {

 return (
	<div>
	 <div>
	  <div>
	   <div className='row house-location'>
	      <div>
	       <h1 className='text-bold-500'>Seasons, Kasarani</h1>
	       <h2 className='text-300'>Nairobi</h2>
	      </div>
	      <div className='listing-amount'>
	       <p className='text-bold-500'>Ksh. 25,000/mo</p>
	      </div>
	   </div>
	   <div className='house-details text-300'>
	 	<div className='row house-detail'>
	 	  <FontAwesomeIcon icon={faBed} className='ic-details'/>
	 	  <p>3 Bedrooms</p>
	 	</div>
	 	<div className='row house-detail'>
	 	  <FontAwesomeIcon icon={faShower} className='ic-details'/>
	 	  <p>1 Bathroom</p>
	 	</div>
		<div className='row house-detail'>
	 	  <FontAwesomeIcon icon={faDoorClosed} className='ic-details'/>
	 	  <p>Master ensuite bedroom</p>
	 	</div>	
	   </div>
	  </div>
	 </div>
	</div>
 )

}

PrimaryDetails.propTypes = {

}

export default PrimaryDetails
