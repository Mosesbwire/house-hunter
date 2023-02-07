import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSliders} from '@fortawesome/free-solid-svg-icons'

const Filter = props => {
  return (
    <div className='badge-container filter'>
        <div className='badge'>
            <p>4</p>
        </div>
      <FontAwesomeIcon icon={faSliders} alt='sliders' className='sliders'/>
      <p className='filter-text'>Filters</p>
    </div>
  )
}

Filter.propTypes = {

}

export default Filter
