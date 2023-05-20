import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'

import { authContext } from '../../context/authContextProvider'
import { registerUser, login } from '../../actions/auth'

const Form = props => {
  const ctx = useContext(authContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const {firstName, lastName, email, password, confirmPassword} = formData

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = async e =>{
    e.preventDefault()
    if (props.action === "signup"){
      registerUser(ctx, {firstName, lastName, email, password, confirmPassword})
    } else {
      login(ctx, {email, password})
    }

  }
  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className='auth-form'>
          {props.action === "signup" ? <div className='input-grp'>
              <label>First Name</label>
              <input type={'text'} placeholder="First Name" name='firstName' value={firstName} required onChange={e => onChange(e)}/>
          </div> : null}
          {props.action === "signup" ? <div className='input-grp'>
              <label>Last Name</label>
              <input type={'text'} placeholder="Last Name" name='lastName' value={lastName} onChange={e => onChange(e)}/>
          </div> : null}
          <div className='input-grp'>
              <label>Email</label>
              <input type={'email'} placeholder="Your email" name='email' value={email} required onChange={e => onChange(e)}/>
          </div>
          <div className='input-grp'>
              <label>Password</label>
              <input type={'password'} placeholder="Enter password" name='password' value={password} required onChange={e => onChange(e)}/>
          </div>
          {props.action === "signup" ? <div className='input-grp'>
              <label>Confirm password</label>
              <input type={'password'} placeholder="Confirm password" name='confirmPassword' value={confirmPassword} required onChange={e => onChange(e)}/>
          </div> : null}
          <button className='form-btn' type='submit'>{props.buttonText}</button>
      </div>
    </form>
  )
}

Form.propTypes = {

}

export default Form
