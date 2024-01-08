import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import './listinggallery.css'
const ListingGallery = ({images, name})=> {
	const primaryImage = images[0]
	console.log(images);
  return (
    <div>
		
		<div className='listing-name container'>
			{name ? <h1>{name}</h1>: null}
		</div>
		<div className='listing-gallery'>
			<div className='listing-gallery-primary-img'>
			  <img src={`data:${primaryImage.contentType};base64,${primaryImage.imgurl}`} alt='home'/>
			  <div className= 'listing-counter'>1/{images.length}</div>
			</div>
			<div className='listing-gallery-grid'>
				{images.slice(1, 5).map(img => (
					 <div className='listing-gallery-img'>
					 	<img src={`data:${img.contentType};base64,${img.imgurl}`} alt='house'/>
					 </div>
				))}
			  <div className='listing-gallery-showmore'>
				<FontAwesomeIcon icon={faGrip}/>
				<div>Show all photos</div>
			  </div>
			</div>
		</div>
	</div>
  )
}

ListingGallery.propTypes = {

}

export default ListingGallery
