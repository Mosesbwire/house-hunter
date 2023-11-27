import React, {useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import Card from '../gallery/Card'
import { viewLikes } from '../../actions/listing'
import { ListingContext } from '../../context/listingsContextProvider'
import Loading from '../spinner/Loading'
import './saved-listing.css'

const SavedListings = props => {
  const ctx = useContext(ListingContext)

  useEffect(() => {
    viewLikes(ctx)
  }, [])

  if (ctx.state.loading){
    return <Loading/>
  }
  return (
    <div className='container saved-pg'>
      <h1 className='heading-100'>Saved Listings</h1>
      <div className='container-grid'>
        {ctx.state.likes.length === 0 ? <div>No Likes</div> : <>
          {ctx.state.likes.map(like => (
            <Card key={like.id} listing={like}/>
          ))}
        </>}
        
      </div>
    </div>
  )
}

SavedListings.propTypes = {

}

export default SavedListings
