import React, { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import ImageSlider from '../slider/ImageSlider.js'
import { authContext } from '../../context/authContextProvider.js'
import { ListingContext } from '../../context/listingsContextProvider.js'
import { likeListing } from '../../actions/listing.js'
import { getItemFromSessionStorage, saveToSessionStorage } from '../../utils/utils.js'

const Card = props => {
	const navigate = useNavigate()
	const ctx = useContext(authContext) 
	const listingCtx = useContext(ListingContext)
	const [isLiked, setIsLiked] = useState(false);
	const handleClick = (e)=>{
		navigate(`/${props.listing.details.buildingType}/${props.listing.location.mainLocation}/${props.listing.id}`)
	}

	const saveListing = async (e) => {
		e.stopPropagation()
		if (!ctx.state.isAuthenticated) {
			toast.info('Login to save your likes', {
				position: toast.POSITION.TOP_CENTER,
				autoClose: false
			})
		} else {
			await likeListing(listingCtx, props.listing.id)
			if (!listingCtx.state.loading) {
				const user = getItemFromSessionStorage("user");
				const likes = user.savedListings
				if (!likes.includes(props.listing.id)){
					user.savedListings.push(props.listing.id)
				} else {
					const index = user.savedListings.indexOf(props.listing.id)
					user.savedListings.splice(index, 1)

				}
				saveToSessionStorage('user', user)
				setIsLiked(!isLiked)
			}
		}	
	}
	useEffect(() => {
		if (ctx.state.isAuthenticated) {
			const user = getItemFromSessionStorage("user");
			const likes = user.savedListings
			if (likes.includes(props.listing.id)) {
				setIsLiked(true)
			}
		}
	}, [ctx.state.isAuthenticated, props.listing.id])
	return (
		<div className='card' onClick={(e) => handleClick(e)}>
			<FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeart} className='crd-save-icon'onClick={e => saveListing(e)}/>
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
