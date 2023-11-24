import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const [showFilter, setShowFilter] = useState(false)
  const toggleMenu = (value)=> {
    setIsOpen(value)
  }
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/'){
      setShowFilter(true)
    } else {
      setShowFilter(false)
    }
  }, [pathname])
  
  return (
    <div className='header'>
      <div className='container header-wrapper'>
	      <div className='branding'>
          <Link to={'/'}>
	          <img src={Logo} alt='logo' className='logo'/>
          </Link>
	      </div>

         <div className='row right-header'>
           <div className='search-container'>
              <Search/>
            </div>
            <div>
              {showFilter ? <Filter/> : null}
            </div>
            <div className='mobile-menu-icon' onClick={()=> toggleMenu(true)}>
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
