import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './badge.css'

const Badge = props => {
  return (
    <div className='badge-pill'>
       <div>{props.name}</div>
       <FontAwesomeIcon icon={props.icon}/>
    </div>
  )
}

Badge.propTypes = {

}

export default Badge
