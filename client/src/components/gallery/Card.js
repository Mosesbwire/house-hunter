import React from 'react'
import PropTypes from 'prop-types'
import ImageSlider from '../slider/ImageSlider.js'

import img_one from '../../images/img-01.webp'
import img_two from '../../images/img-02.webp'
import img_three from '../../images/img-03.webp'
import img_four from '../../images/img-04.webp'
import img_five from '../../images/img-05.webp'

const Card = props => {
	const imgContainer = [
		img_one,
		img_two,
		img_three,
		img_four,
		img_five

	];
	return (
		<div className='card'>
			<ImageSlider imgContainer={imgContainer} type={"pure"}/>
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
