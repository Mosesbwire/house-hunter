import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './pricing.css'

const PricingCard = props => {
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = ()=> {
    setIsSelected(!isSelected)
    props.showPayment(true)
    props.handleSubscription(props.id)
  }
  return (
    <div className={isSelected && props.id === props.selectedSubId ? 'prc-card selected-prc-card' : 'prc-card'} onClick={handleClick} >
      <div className='prc-card-wrapper'>
        <p>{props.subType}</p>
        <p>{`Kshs. ${props.amount}`}</p>
        <button className={isSelected && props.id === props.selectedSubId ? 'pricing-btn selected-btn' : 'pricing-btn'}>{isSelected && props.id === props.selectedSubId ? 'Selected' : 'Select'}</button>
      </div>
    </div>
  )
}

PricingCard.propTypes = {

}

export default PricingCard

