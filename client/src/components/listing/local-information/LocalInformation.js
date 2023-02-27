import React from 'react'
import PropTypes from 'prop-types'
import './local-information.css'
import LocalMap from '../local-map/LocalMap'

const LocalInformation = props => {

return (
	<div className='container local-information'>
	  <h1> Local Information</h1>
	  <div className='information-categories'>
	   <p className='info-category'>Map</p>
	   <p className='info-category'>Schools</p>
	   <p className='info-category'>Shop & Eat</p>
	  </div>
	  <div className='info-map'>
		<LocalMap/>
	  </div>
	</div>
)
}

LocalInformation.propTypes = {

}

export default LocalInformation
