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
            4
        </div>
      <FontAwesomeIcon icon={faSliders} alt='sliders' className='sliders'/>
      <div className='filter-text'>Filters</div>
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
