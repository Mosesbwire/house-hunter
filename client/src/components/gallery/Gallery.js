import React, {useContext, useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from './Card.js'
import Pill from '../badges/Badge.js'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import './Gallery.css'
import { ListingContext } from '../../context/listingsContextProvider.js'
import { getListings } from '../../actions/listing.js'
import Loading from '../spinner/Loading.js'

const Gallery = props => {

	const navigate = useNavigate()
	const navigateToMap = () => {
		navigate('/map')
	}
	const ctx = useContext(ListingContext)
	useEffect(()=>{
		getListings(ctx)
	},[])
	
	
  return ctx.state.loading ? <Loading/> : (
    <div className='container gallery'>
		{ctx.state.listings.map(listing =>(
			<Card key={listing.id} listing={listing}/>
		))}
	  <div className='map-badge' onClick={navigateToMap}>
		<Pill name={"Show map"} icon={faMap}/>
	  </div>
    </div>
  )
}

Gallery.propTypes = {

}

export default Gallery
