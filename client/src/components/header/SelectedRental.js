import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import apartment  from '../../images/apartment.png'

const SelectedRental = props => {
  return (
    <div className='badge-container'>
      <div className='badge'>
        2
      </div>
      <div>
        <img src={apartment} alt='apartment building'className='apt-icon'/>
      </div>
    </div>
  )
}

SelectedRental.propTypes = {

}

export default SelectedRental
