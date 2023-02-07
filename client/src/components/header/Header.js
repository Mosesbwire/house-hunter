import React from 'react'
import PropTypes from 'prop-types'
import  Logo from '../../images/logo2.png'
import Filter from './Filter'
import Search from './Search'
import SelectedRental from './SelectedRental'
import './Header.css'

const Header = props => {
  return (
    <div className='header'>
      <div className='container'>
        <img src={Logo} alt='logo' className='logo'/>
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
