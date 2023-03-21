import React, {useState} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSliders} from '@fortawesome/free-solid-svg-icons'
import ListingFilter from '../filter/ListingFilter'

const Filter = props => {
  const [showFilter, setShowFilter] = useState(false)

  const handleClick = ()=> {
    setShowFilter(!showFilter)
  }
  return (
    <div className='badge-container filter' onClick={handleClick}>
        <div className='badge'>
            <p>4</p>
        </div>
      <FontAwesomeIcon icon={faSliders} alt='sliders' className='sliders'/>
      <p className='filter-text'>Filters</p>
      {showFilter && createPortal(
        <ListingFilter onClose={()=> setShowFilter(false)}/>,
        document.getElementById('portal-root')
      )}
    </div>
  )
}

Filter.propTypes = {

}

export default Filter
