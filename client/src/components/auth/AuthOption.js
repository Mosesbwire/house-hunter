import React from 'react'
import PropTypes from 'prop-types'
import './auth.css'

const AuthOption = props => {
  return (
    <div className='auth-option row'>
      <img src={props.img_src}/>
      <p>{props.action} with {props.provider}</p>
    </div>
  )
}

AuthOption.propTypes = {

}

export default AuthOption
