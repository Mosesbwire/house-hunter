import React, {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import { authContext } from '../../context/authContextProvider'

import { useNavigate } from 'react-router-dom'

import AuthOption from './AuthOption'
import Form from './Form'
import googleLogo from '../../images/google.png'
import facebookLogo from '../../images/facebook.png'
import Loading from '../spinner/Loading'
import './auth.css'

const Signin = props => {
  const ctx = useContext(authContext)
  const navigate = useNavigate()
  const gotoLoginPage =()=>{
    navigate('/sign-in')
  }

  useEffect(()=>{
    if (ctx.state.isAuthenticated){
        navigate('/')
    }
  }, [ctx.state.isAuthenticated, navigate])
  return(
    <div >
      <div className='container signin-form'>
        <h1 className='heading-200'>Sign up</h1>
        <div className='intro-txt'>
            <p>Create an account. It takes less than a minute</p>
            <p>Already have an account? 
              <span className='login-link' onClick={gotoLoginPage}>Login here</span>
            </p>
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
