import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import ImageSlider from '../slider/ImageSlider.js'

const Card = props => {
	const navigate = useNavigate()
	const handleClick = ()=>{
		navigate(`/${props.listing.details.buildingType}/${props.listing.location.mainLocation}/${props.listing.id}`)
	}
	return (
		<div className='card' onClick={handleClick}>

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
