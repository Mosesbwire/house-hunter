import React, {useState, useContext, useEffect} from 'react'
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

  const [formError, setFormError] = useState(null)
  const {firstName, lastName, email, password, confirmPassword} = formData

  const onChange = e =>{
    if (formError && formError[e.target.name]){
        delete formError[e.target.name]
    }
    setFormData({...formData, [e.target.name]: e.target.value})
  } 

  useEffect(()=>{

      setFormError(ctx.state.error)
  },[ctx.state.error, formError])
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
              <input type={'text'} className={formError && formError.firstName ? 'input-err' : ''} placeholder="First Name" name='firstName' value={firstName} required onChange={e => onChange(e)}/>
              <small>{formError ? formError.firstName : ''}</small>
          </div> : null}
          {props.action === "signup" ? <div className='input-grp'>
              <label>Last Name</label>
              <input type={'text'} className={formError && formError.lastName ? 'input-err' : ''} placeholder="Last Name" name='lastName' value={lastName} onChange={e => onChange(e)}/>
              <small>{formError ? formError.lastName : ''}</small>

          </div> : null}
          <div className='input-grp'>
              <label>Email</label>
              <input type={'email'} className={formError && formError.email ? 'input-err' : ''} placeholder="Your email" name='email' value={email} required onChange={e => onChange(e)}/>
              <small>{formError ? formError.email : ''}</small>

          </div>
          <div className='input-grp'>
              <label>Password</label>
              <input type={'password'} className={formError && formError.password ? 'input-err' : ''} placeholder="Enter password" name='password' value={password} required onChange={e => onChange(e)}/>
              <small>{formError ? formError.password : ''}</small>

          </div>
          {props.action === "signup" ? <div className='input-grp'>
              <label>Confirm password</label>
              <input type={'password'} className={formError && formError.confirmPassword ? 'input-err' : ''} placeholder="Confirm password" name='confirmPassword' value={confirmPassword} required onChange={e => onChange(e)}/>
              <small>{formError ? formError.confirmPassword : ''}</small>

          </div> : null}
          <button className='form-btn' type='submit'>{props.buttonText}</button>
      </div>
    </form>
  )
}

Form.propTypes = {

}

export default Form
