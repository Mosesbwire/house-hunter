import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCity, faHouse} from '@fortawesome/free-solid-svg-icons'

const ListingFilter = props => {
  return (
    <div>
      <div>
        <div className='upper-section'>
            <div className='close-filter'>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
            <h1>Filter</h1>
        </div>
        <div className='main-filter-section'>
            <div className='price-section'>
                <p>Price Range</p>
                <div className='price-range'>
                    <div>
                        <small>min</small>
                        <input/>
                    </div>
                    <div>
                        <small>max</small>
                        <input/>
                    </div>
                </div>
            </div>
            <div className='num-rooms'>
                <p>Bedrooms</p>
                <div>
                    <div className='rooms'>
                        <p>Bedsitter</p>
                    </div>
                    <div className='rooms'>
                        <p>1</p>
                    </div>
                    <div className='rooms'>
                        <p>2</p>
                    </div>
                    <div className='rooms'>
                        <p>3</p>
                    </div>
                    <div className='rooms'>
                        <p>4</p>
                    </div>
                    <div className='rooms'>
                        <p>5+</p>
                    </div>
                </div>
                <div>
                    <input type={'checkbox'}/>
                    <label>Ensuite</label>
                </div>
            </div>
            <div>
                <p>Listing Type</p>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faCity}/>
                        <p>Apartments</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouse}/>
                        <p>Houses</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='filter-footer'>
            <p>Clear all</p>
            <div className='filtered-listing'>
                <p>Show 50+ listings</p>
            </div>
        </div>
      </div>
    </div>
  )
}

ListingFilter.propTypes = {

}

export default ListingFilter
