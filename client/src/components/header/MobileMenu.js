import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faX } from '@fortawesome/free-solid-svg-icons'
import './menu.css'

const MobileMenu = props => {
  return (
    <div className={props.isOpen ? 'mobile-menu' : 'mobile-menu close-menu'}>
        <div className='mobile-menu-wrapper'> 
            <div className='close-menu' onClick={() => props.toggleMenu(false)}>
                <FontAwesomeIcon icon={faX}/>
            </div>
            <div className='menu-items'>
                <div className='row menu-item'>
                    <FontAwesomeIcon icon={faHeart}/>
                    <div>Saved Listings</div>
                </div>
                <button className='menu-auth-btn'>Login</button>
            </div>
        </div>      
    </div>
  )
}

MobileMenu.propTypes = {

}

export default MobileMenu
