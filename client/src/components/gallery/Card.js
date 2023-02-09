import React from 'react'
import PropTypes from 'prop-types'
import ImageSlider from './ImageSlider.js'

const Card = props => {
	return (
		<div className='card'>
			<ImageSlider/>
			<div className='card-info'>
				<p className='text-300'>Clay City, Kasarani</p>
				<p className='text-light text-300'>Nairobi</p>
				<p className='text-bold-500 price'>Ksh. 22,000</p>
			</div>
		</div>
	)
}

Card.propTypes = {


}

export default Card
