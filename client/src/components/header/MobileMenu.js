import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faX } from '@fortawesome/free-solid-svg-icons'
import { authContext } from '../../context/authContextProvider'
import { logout } from '../../actions/auth'
import './menu.css'

const MobileMenu = props => {
    const ctx = useContext(authContext)
    const navigate = useNavigate()
    const handleClick = ()=> {
        if (!ctx.state.isAuthenticated) {
            navigate('/sign-in')
        } else {
            logout(ctx)
        }
    }
  return (
    <div className={props.isOpen ? 'mobile-menu' : 'mobile-menu toggle-menu'}>
        <div className='mobile-menu-wrapper'> 
            <div className='close-menu' onClick={() => props.toggleMenu(false)}>
                <FontAwesomeIcon icon={faX}/>
            </div>
            <div className='menu-items'>
                <div className='row menu-item saved-listing'>
                    <FontAwesomeIcon icon={faHeart} className='saved-icon'/>
                    <div>Saved Listings</div>
                </div>
                <button className='menu-auth-btn' onClick={handleClick}>
                    {ctx.state.isAuthenticated ? 'Logout': 'Login'}
                </button>
            </div>
        </div>      
    </div>
  )
}

MobileMenu.propTypes = {

}

export default MobileMenu
