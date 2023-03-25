import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './payment-success.css'

const PaymentSuccessModal = props => {
  return (
    <div className='payment-success'>
      <div className='modal-wrapper'>
        <div className='outer-check-wrapper'>
            <div className='check-wrapper'>
                <FontAwesomeIcon className='pay-success-icon'icon={faCheck}/>
            </div>
        </div>
        <h1 className='heading-100'>Thank You!</h1>
        <p>Your payment was successful</p>
        <p>Happy Hunting!</p>
        <button className='explore-listings-btn'>Explore Listings</button>
      </div>
    </div>
  )
}

PaymentSuccessModal.propTypes = {

}

export default PaymentSuccessModal
