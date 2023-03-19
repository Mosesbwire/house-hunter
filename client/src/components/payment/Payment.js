import React from 'react'
import PropTypes from 'prop-types'
import MpesaLogo from '../../images/lipa_na_mpesa.png'
import './payment.css'
const Payment = props => {
  return (
    <div class="payment-options">
        <h1 className='pay-title'>Payment options</h1>
        <div className='payment-container'>
            <div>
                <div>
                    <ol className='payment-steps'>
                        <li>Enter your safaricom mpesa phone number</li>
                        <li>Press complete payment button</li>
                        <li>Check your phone and enter mpesa pin</li>
                    </ol>
                </div>
                <div>
                    <div className=''>
                        <label className='user-phone_no'>Phone number:</label>
                        <input className='input-phone' type={'tel'} placeholder='070123xxx'/>
                    </div>
                    <button className='btn-payment'>Complete payment</button>
                </div>
            </div>
            <div className='row divider'>
                <hr/>
                <p>or</p>
                <hr/>
            </div>
            <div className='paybill-opt'>
                <img src={MpesaLogo}/>
                <div class="paybill-instructions">
                    <p>Paybill: 555111</p>
                    <p>Account No: <span>account email address</span></p>
                    <p>Amount</p>
                </div>
            </div>
        
        </div>
    </div>
  )
}

Payment.propTypes = {

}

export default Payment
