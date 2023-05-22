import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './alert.css'

const Alert = (props)=>{
    const handleClick = ()=>{
        props.setShowAlert(false)

    }
    return (
            <div className={`alert alert-type-${props.alertType}`}>
                <p>{props.msg}</p>
                <div className='close-alert-btn' onClick={handleClick}>
                    <FontAwesomeIcon icon={faX}/>
                </div>
            </div>
    )
}

Alert.propTypes = {

}

export default Alert
