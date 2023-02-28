import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import Pill from '../badges/Badge.js'
import 'leaflet/dist/leaflet.css'
import './map.css'

const Map = props => {
  return (
    <div>
        <MapContainer center={[-1.36, 36.83]} zoom={13} scrollWhellZoom={false} className='map'>
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
		<div className='list-pill'>
			<Pill name={"Show list"} icon={faListUl}/>
		</div>
    </div>
  )
}

Map.propTypes = {

}

export default Map
