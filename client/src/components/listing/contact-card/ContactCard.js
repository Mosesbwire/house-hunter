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
	 	  <div>Agent 47</div>
	 	</div>
	 	<div className='row'>
	 	  <FontAwesomeIcon icon={faMobileScreenButton}/>
	 	  <div>0721678900</div>
	 	</div>
	   </div>
	 </div>
	</div>
 )
}

ContactCard.propTypes = {

}

export default ContactCard
