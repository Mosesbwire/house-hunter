import React from 'react'
import PropTypes from 'prop-types'
import Card from '../gallery/Card'
import './saved-listing.css'

const SavedListings = props => {
  return (
    <div className='container saved-pg'>
      <h1 className='heading-100'>Saved Listings</h1>
      <div className='container-grid'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

SavedListings.propTypes = {

}

export default SavedListings
