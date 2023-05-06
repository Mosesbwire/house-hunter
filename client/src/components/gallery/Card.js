import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
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

			<FontAwesomeIcon icon={faHeart} className='crd-save-icon'/>
			<div className='card-slider'>
			  <ImageSlider imgContainer={props.listing.imageUrls} type={"pure"}/>
			</div>
			
			<div className='card-info'>
			  <p className='text-300'>{props.listing.location.mainLocation}</p>
			  <p className='text-light text-300'>{props.listing.location.subLocation}</p>
			  <p className='text-300'>{props.listing.details.bedrooms} bedroom | {props.listing.details.bathrooms} bath</p>
			  <p className='text-bold-500 price'>Ksh.{props.listing.rentPrice}</p>
			</div>
		</div>
	)
}

Card.propTypes = {


}

export default Card
