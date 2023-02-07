import React from 'react'
import PropTypes from 'prop-types'
import  Logo from '../../images/logo4.png'
import Filter from './Filter'
import Search from './Search'
import SelectedRental from './SelectedRental'
import './Header.css'

const Header = props => {
  return (
    <div className='header'>
      <div className='container header-wrapper'>
	 <div className='branding'>
	     <img src={Logo} alt='logo' className='logo'/>
	 </div>
         <div>
            <Search/>
        </div>
        <div className='filter-selected-box'>
            <Filter/>
            <SelectedRental/>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
