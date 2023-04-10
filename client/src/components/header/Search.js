import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = props => {
  const [openSearch, setOpenSearch] = useState(false)
  const toggleSearchLocation = ()=> {
    setOpenSearch(!openSearch)
  }
  return (
    <div className='search-bar' onClick={toggleSearchLocation}>
      <input type='search' placeholder='Start your search' className='search-input'/>
      <div className='search-icon' >
        <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-glass'/>
      </div>
      {openSearch ? <div className='search-locations'>
        <div className='locations-wrapper'>
          <ul className='location-items'>
            <li>Kasarani</li>
            <li>Kahawa West</li>
            <li>Ruaka</li>
            <li>Umoja</li>
            <li>Parklands</li>
            <li>Westlands</li>
            <li>Donholm</li>
            <li>Utawala</li>
          </ul>
        </div>
      </div> : null }
      
    </div>
  )
}

Search.propTypes = {

}

export default Search
