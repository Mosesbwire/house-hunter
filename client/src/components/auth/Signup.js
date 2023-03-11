import React from 'react'
import PropTypes from 'prop-types'
import AuthOption from './AuthOption'
import Form from './Form'
import googleLogo from '../../images/google.png'
import facebookLogo from '../../images/facebook.png'
import './auth.css'

const Signin = props => {
  return (
    <div >
      <div className='container signin-form'>
        <h1 className='heading-200'>Sign up</h1>
        <div className='intro-txt'>
            <p>Create an account. It takes less than a minute</p>
            <p>Already have an account? <span>Login here</span></p>
        </div>
        <div className="auth-providers">
            <AuthOption img_src={googleLogo} action={"Sign up"} provider={"Google"}/>
            <AuthOption img_src={facebookLogo} action={"Sign up"} provider={"Facebook"}/>
        </div>
        <Form buttonText={"Sign up"} action={"signup"}/>
      </div>
    </div>
  )
}

Signin.propTypes = {

}

export default Signin
