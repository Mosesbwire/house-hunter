import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './badge.css'

const Badge = props => {
  return (
    <div className='badge-pill'>
       <p>{props.name}</p> 
       <FontAwesomeIcon icon={props.icon}/>
    </div>
  )
}

Badge.propTypes = {

}

export default Badge
