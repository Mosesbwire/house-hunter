import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './pricing.css'

const PricingCard = props => {
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = ()=> {
    setIsSelected(!isSelected)
    props.showPayment(true)
  }
  return (
    <div className={isSelected ? 'prc-card selected-prc-card' : 'prc-card'} onClick={handleClick} >
      <div className='prc-card-wrapper'>
        <p>{props.subType}</p>
        <p>{props.amount}</p>
        <button className={isSelected ? 'pricing-btn selected-btn' : 'pricing-btn'}>{!isSelected ? 'Select' : 'Selected'}</button>
      </div>
    </div>
  )
}

PricingCard.propTypes = {

}

export default PricingCard

