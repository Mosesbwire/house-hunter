import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faUser } from '@fortawesome/free-solid-svg-icons'
import './contact-card.css'


const ContactCard = props => {
 return (
	<div className='agent-contacts'>
	 <div className='contact-wrapper'>
	   <div>
	     <p className='contact-cta'>Get Contact Information</p>
	   </div>
	   <div className='contact-info'>
	 	<div className='row'>
	 	  <FontAwesomeIcon icon={faUser}/>
	 	  <p>Agent 47</p>
	 	</div>
	 	<div className='row'>
	 	  <FontAwesomeIcon icon={faMobileScreenButton}/>
	 	  <p>0721678900</p>
	 	</div>
	   </div>
	 </div>
	</div>
 )
}

ContactCard.propTypes = {

}

export default ContactCard
