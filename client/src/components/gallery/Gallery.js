import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card.js'
import Pill from '../badges/Badge.js'
// import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import './Gallery.css'


const Gallery = props => {
  return (
    <div className='container gallery'>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  <div className='map-badge'>
		<Pill name={"Show map"} icon={faMap}/>
	  </div>
    </div>
  )
}

Gallery.propTypes = {

}

export default Gallery
