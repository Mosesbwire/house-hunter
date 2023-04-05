import React, {useState} from 'react'
import PropTypes from 'prop-types'
import  Logo from '../../images/logo4.png'
import Filter from './Filter'
import Search from './Search'
import MobileMenu from './MobileMenu'
import SelectedRental from './SelectedRental'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = (value)=> {

    setIsOpen(value)
  }
  return (
    <div className='header'>
      <div className='container header-wrapper'>
	      <div className='branding'>
	        <img src={Logo} alt='logo' className='logo'/>
	      </div>

         <div className='row right-header'>
           <div>
              <Search/>
            </div>
            <div>
              <Filter/>
            </div>
            <div onClick={()=> toggleMenu(true)}>
              <FontAwesomeIcon icon={faBars}/>
            </div>
         </div>
         <div className="mobile-menu">
            <MobileMenu isOpen = {isOpen} toggleMenu={toggleMenu}/>
         </div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
