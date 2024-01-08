import React, {useEffect, useContext, useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import AuthOption from './AuthOption'
import Form from './Form'
import googleLogo from '../../images/google.png'
import facebookLogo from '../../images/facebook.png'
import { authContext } from '../../context/authContextProvider'
import Alert from '../alert/Alert'
import './auth.css'

const Signin = props => {
  const ctx = useContext(authContext)
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()
  const gotoSignupPage = ()=>{
    navigate('/sign-up')
  }

  useEffect(()=> {
    if (ctx.state.isAuthenticated){
      navigate('/')
    }
  }, [ctx.state.isAuthenticated, navigate])

  useEffect(()=>{
      if(ctx.state.error){
        setShowAlert(!showAlert)
      }
  }, [ctx.state.error])

  return (
    <div >
      {showAlert && <Alert msg={ctx.state.error.error} alertType={'danger'} setShowAlert={setShowAlert}/>}
      <div className='container signin-form'>
        <h1 className='heading-200'>Sign in</h1>
        <div className='intro-txt'>
            <p>Welcome back. Please enter your details to continue</p>
            <p>Don't have an account? 
              <span className='create-account-link' onClick={gotoSignupPage}>Create account</span>
            </p>
            <p>It takes less than a minute</p>
        </div>
        <div className="auth-providers">
            {/* <AuthOption img_src={googleLogo} action={"Sign in"} provider={"Google"}/>
            <AuthOption img_src={facebookLogo} action={"Sign in"} provider={"Facebook"}/> */}
        </div>
        <Form buttonText={"Sign in"} action={"signin"}/>
        {/* <p className='frg-pwd'>Forgot password ?</p> */}
      </div>
    </div>
  )
}

Signin.propTypes = {

}

export default Signin
