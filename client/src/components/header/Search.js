import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = props => {
  return (
    <div className='search-bar'>
      <input type='search' placeholder='Start your search' className='search-input'/>
      <div className='search-icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-glass'/>
      </div>
    </div>
  )
}

Search.propTypes = {

}

export default Search
