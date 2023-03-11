import React from 'react'
import PropTypes from 'prop-types'

const Form = props => {
  return (
    <div className='auth-form'>
        <div className='input-grp'>
            <label>Email</label>
            <input type={'email'} placeholder="Your email"/>
        </div>
        <div className='input-grp'>
            <label>Password</label>
            <input type={'password'} placeholder="Enter password"/>
        </div>
        {props.action === "signup" ? <div className='input-grp'>
            <label>Confirm password</label>
            <input type={'password'} placeholder="Confirm password"/>
        </div> : null}
        <button className='form-btn'>{props.buttonText}</button>
    </div>
  )
}

Form.propTypes = {

}

export default Form
