import React from 'react'
import PropTypes from 'prop-types'
import './local-information.css'

const LocalInformation = props => {

return (
	<div className='container'>
	  <h1> Local Information</h1>
	  <div className='information-categories'>
	   <p className='info-category'>Map</p>
	   <p className='info-category'>Schools</p>
	   <p className='info-category'>Shop & Eat</p>
	  </div>
	  <div className='info-map'>
	  </div>
	</div>
)
}

LocalInformation.propTypes = {

}

export default LocalInformation
