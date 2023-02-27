import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import './local-map.css'

const LocalMap = props => {

  return (
	  <div className='local-map'>
		<MapContainer center={[-1.36, 36.83]} zoom={13} scrollWhellZoom={false} className='lmap-container'>
	  	   <TileLayer
	  		attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	  	   />
	  	   <Marker position={[-1.36, 36.83]}>
	  		<Popup>
	  		  Location
	  		</Popup>
	           </Marker>
	  		
	  	</MapContainer>
	  </div>
  )
}

LocalMap.propTypes = {

}

export default LocalMap
