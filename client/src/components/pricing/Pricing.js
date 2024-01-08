import React, {useState, useRef, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import PricingCard from './PricingCard'
import Payment from '../payment/Payment'
import Logo from '../../images/logo4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { getPricingPlans } from '../../actions/plan'
import './pricing.css'
import { Link } from 'react-router-dom'

const Pricing = props => {
  const paymentOptionRef = useRef(null)
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)
  const [selectedSubId, setSelectedSubId] = useState(null)
  const [plans, setPlans] = useState([])
  const [isPlans, setIsPlans] = useState(false)
  const [startPayment, isMakingPayment] = useState(false)

  const showPayment = (val)=> {
    setShowPaymentOptions(val)
  }

  const handleSubscription = (id) => {
    setSelectedSubId(id)
  }

  const makePayment = (val)=>{
    isMakingPayment(val)
  }
  

  useEffect(()=>{
    if (showPaymentOptions){
      paymentOptionRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [showPaymentOptions])

  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await getPricingPlans()
      setPlans(data)
      setIsPlans(true)
    }

    fetchData()
  }, [])

  useEffect(()=>{
      
      if (startPayment){
        const eventSource = new EventSource('http://localhost:5000/api/v1/update')

        eventSource.addEventListener('message', (event)=>{
          const data = event.data
          console.log(data)
        })

        eventSource.addEventListener('open',()=>{
          console.log('Connection to server connected')
        })

        eventSource.addEventListener('error', (error)=>{
          console.error('Error occured', error)
        })

        return ()=>{
          eventSource.close()
        }
      }

      

    
  }, [startPayment])

  return (
    <div className='container'>
      <div className='pricing-wrapper'>
        <Link to={'/'}>
          <img src={Logo} className='pricing-logo' />
        </Link>
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
        {isPlans ? <Fragment>
          {plans.map(plan => (
            <PricingCard key={plan.id} id={plan.id} subType={plan.name} amount={plan.price} showPayment={showPayment} handleSubscription={handleSubscription} selectedSubId={selectedSubId}/>
          ))}
        </Fragment>: null
         }
       
      </div>
      <div ref={paymentOptionRef}>
        {showPaymentOptions ? <Payment makePayment={makePayment}/> : null}
      </div>
      
    </div>
  )
}

Pricing.propTypes = {

}

export default Pricing
