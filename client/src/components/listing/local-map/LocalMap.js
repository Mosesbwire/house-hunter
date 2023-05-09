import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import  L from 'leaflet'
import icon from "leaflet/dist/images/marker-icon.png"
import 'leaflet/dist/leaflet.css'
import pin from '../../../images/pin.png'

import './local-map.css'
let DefaultIcon = L.icon({
	iconUrl: pin
})

L.Marker.prototype.options.icon = DefaultIcon

const LocalMap = ({coordinates}) => {
	const position = [coordinates.latitude, coordinates.longitude]
	
  return (
	  <div className='local-map'>
		<MapContainer center={position} zoom={13} scrollWheelZoom={false} className='lmap-container'>
	  	   <TileLayer
	  		attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	  	   />
	  	   <Marker position ={position}>
	  			<Tooltip direction='top' offset={[12,0]} permanent={true} >
					Login to get exact location and directions
				</Tooltip>
	        </Marker>
	  	</MapContainer>
	  </div>
  )
}

LocalMap.propTypes = {

}

export default LocalMap
