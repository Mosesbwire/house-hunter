import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import PricingCard from './PricingCard'
import Payment from '../payment/Payment'
import Logo from '../../images/logo4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './pricing.css'


const Pricing = props => {
  const paymentOptionRef = useRef(null)
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)
  const [selectedSubId, setSelectedSubId] = useState(null)

  const showPayment = (val)=> {
    setShowPaymentOptions(val)
  }

  const handleSubscription = (id) => {
    setSelectedSubId(id)
  }
  

  useEffect(()=>{
    if (showPaymentOptions){
      paymentOptionRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [showPaymentOptions])
  return (
    <div className='container'>
      <div className='pricing-wrapper'>
        <img src={Logo} className='pricing-logo'/>
        <h1 className='prc-heading heading-100'>Get unlimited access to all features on House Hunter</h1>
        <p>Get all features from as low as Ksh.350/day</p>
        <div className='features-list'>
          <div className='feature row'>
            <FontAwesomeIcon icon={faCheck} className='feature-icon'/>
            <p>High quality res pics</p>
          </div>
          <div className='feature row'>
            <FontAwesomeIcon icon={faCheck} className='feature-icon'/>
            <p>Get exact location and directions to listing</p>
          </div>
          <div className='feature row'>
            <FontAwesomeIcon icon={faCheck} className='feature-icon'/>
            <p>Phone contact to listing owner | agent | caretaker</p>
          </div>
        </div>
      </div>
      <div className='prices-section'>
        <PricingCard id={1} subType={"One Day"} amount={"Ksh.350"} showPayment={showPayment} handleSubscription={handleSubscription} selectedSubId={selectedSubId}/>
        <PricingCard id={2} subType={"Weekly"} amount={"Ksh.1500/week"} showPayment={showPayment} handleSubscription={handleSubscription} selectedSubId={selectedSubId}/>
        <PricingCard id={3} subType={"Monthly"} amount={"Ksh.4500/month"} showPayment={showPayment} handleSubscription={handleSubscription} selectedSubId={selectedSubId}/>
      </div>
      <div ref={paymentOptionRef}>
        {showPaymentOptions ? <Payment/> : null}
      </div>
      
    </div>
  )
}

Pricing.propTypes = {

}

export default Pricing
