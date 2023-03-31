import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCity, faHouse} from '@fortawesome/free-solid-svg-icons'
import './listing-filter.css'

const ListingFilter = props => {
    const handleClick = (e) => {
        e.stopPropagation()
    }
  return (
    <div className='listing-filter' onClick={e => handleClick(e)}>
     <div className='filter-overlay'></div>
      <div className='filter-wrapper'>
        <div className='upper-section'>
            <div className='close-filter' onClick={props.onClose}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
            <h1 className='filter-title no-sm'>Filter</h1>
        </div>
        <div className='main-filter-section'>
            <div className='price-section'>
                <p>Price Range</p>
                <div className='price-range row'>
                    <div className='range-input-grp'>
                        <small>min</small>
                        <input type={'text'} placeholder='7500'/>
                    </div>
                    <div  className='range-input-grp'>
                        <small>max</small>
                        <input type={'text'} placeholder='35000'/>
                    </div>
                </div>
            </div>
            <div className='num-rooms'>
                <p>Bedrooms</p>
                <div className='rooms-wrapper'>
                    <div className='rooms'>
                        <div>Bedsitter</div>
                    </div>
                    <div className='rooms'>
                        <div>1</div>
                    </div>
                    <div className='rooms'>
                        <div>2</div>
                    </div>
                    <div className='rooms'>
                        <div>3</div>
                    </div>
                    <div className='rooms'>
                        <div>4</div>
                    </div>
                    <div className='rooms'>
                        <div>5+</div>
                    </div>
                </div>
                <div className='room-addon'>
                    <input type={'checkbox'}/>
                    <label>Ensuite</label>
                </div>
            </div>
            <div className='listing-type'>
                <p>Listing Type</p>
                <div className='listing-type-wrapper row'>
                    <div>
                        <FontAwesomeIcon icon={faCity} className='icon-building'/>
                        <p>Apartments</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouse} className='icon-building'/>
                        <p>Houses</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='filter-footer'>
            <p>Clear all</p>
            <div className='filtered-listing'>
                <div>Show 50+ listings</div>
            </div>
        </div>
      </div>
    </div>
  )
}

ListingFilter.propTypes = {

}

export default ListingFilter
