import React from 'react'
import PropTypes from 'prop-types'
import './pricing.css'

const PricingCard = props => {
  return (
    <div className='prc-card'>
      <div className='prc-card-wrapper'>
        <p>{props.subType}</p>
        <p>{props.amount}</p>
        <button className='pricing-btn'>Select</button>
      </div>
    </div>
  )
}

PricingCard.propTypes = {

}

export default PricingCard

