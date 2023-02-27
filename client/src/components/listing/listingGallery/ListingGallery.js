import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import img_one from '../../../images/img-01.webp'
import img_two from '../../../images/img-02.webp'
import img_three from '../../../images/img-03.webp'
import img_four from '../../../images/img-04.webp'
import img_five from '../../../images/img-05.webp'
import './listinggallery.css'
const ListingGallery = props => {
  return (
    <div>
		<div className='listing-name container'>
			<h1>The Mirage</h1>
		</div>
		<div className='listing-gallery'>
			<div className='listing-gallery-primary-img'>
			  <img src={img_one}/>
			  <div className= 'listing-counter'>1/5</div>
			</div>
			<div className='listing-gallery-grid'>
			  <div>
			  <img src={img_two}/>
			  </div>
			  <div>
				<img src={img_three}/>
			  </div>
			  <div>
				<img src={img_four}/>
			  </div>
			  <div>
				<img src={img_five}/>
			  </div>
			  <div className='listing-gallery-showmore'>
				<FontAwesomeIcon icon={faGrip}/>
				<p>Show all photos</p>
			  </div>
			</div>
		</div>
	</div>
  )
}

ListingGallery.propTypes = {

}

export default ListingGallery
