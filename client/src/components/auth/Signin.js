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
        <h1 className='heading-200'>Sign in</h1>
        <div className='intro-txt'>
            <p>Welcome back. Please enter your details to continue</p>
            <p>Don't have an account? <span>Create account</span></p>
            <p>It takes less than a minute</p>
        </div>
        <div className="auth-providers">
            <AuthOption img_src={googleLogo} action={"Sign in"} provider={"Google"}/>
            <AuthOption img_src={facebookLogo} action={"Sign in"} provider={"Facebook"}/>
        </div>
        <Form buttonText={"Sign in"} action={"signin"}/>
        <p className='frg-pwd'>Forgot password ?</p>
      </div>
    </div>
  )
}

Signin.propTypes = {

}

export default Signin
