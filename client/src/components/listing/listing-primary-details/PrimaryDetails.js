import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower, faBed, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import './primary-details.css'


const PrimaryDetails = ({rent, location, details}) => {

 return (
	<div className='listing-primary-details'>
	 <div>
	  <div>
	   <div className='row house-location'>
	      <div>
	       <h1 className='text-bold-500'>{location.subLocation? <>{location.subLocation}</>:null}, {location.mainLocation}</h1>
	       <h2 className='text-300'>Nairobi</h2>
	      </div>
	      <div className='listing-amount'>
	       <p className='text-bold-500'>Ksh. {rent}/mo</p>
	      </div>
	   </div>
	   <div className='house-details text-300'>
	 	<div className='row house-detail'>
	 	  <FontAwesomeIcon icon={faBed} className='ic-details'/>
	 	  <div>{details.bedrooms} {details.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}</div>
	 	</div>
	 	<div className='row house-detail'>
	 	  <FontAwesomeIcon icon={faShower} className='ic-details'/>
	 	  <div>{details.bathrooms} {details.bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}</div>
	 	</div>
		<div className='row house-detail'>
			{details.masterEnsuite ?<>
				<FontAwesomeIcon icon={faDoorClosed} className='ic-details'/>
	 	  		<div>Master ensuite bedroom</div>
			</> : null}
	 	  
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
