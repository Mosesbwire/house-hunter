import React , {useEffect, useRef, useState}from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import imgOne from '../../../images/img-01.webp'
import imgTwo from '../../../images/img-02.webp'
import imgThree from '../../../images/img-03.webp'
import imgFour from '../../../images/img-04.webp'
import imgFive from '../../../images/img-05.webp'

import './similar-listing.css'

const SimilarListings = props => {
    const images = [
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive,
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive,
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive,
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive,
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive
    ]

    const slider = useRef()
    const [index, setIndex] = useState(0);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    useEffect(()=>{
        index > 0 ? setShowLeft(true) : setShowLeft(false)
        index < images.length - 1 ? setShowRight(true) : setShowRight(false)
    }, [index])

    const gotoNext = () => {
        slider.current.style.transform = `translateX(-${(index + 1) * 100}%)`
        setIndex(index + 1)
    }

    const gotoPrev = () => {
        slider.current.style.transform = `translateX(-${(index - 1) * 100}%)`
        setIndex(index - 1)
    }

  return (
    <div className='container similar-listing'>
      <h1>Similar Houses in the area</h1>
      <div className='similar-listing-wrapper'>
        {!showLeft ? null : 
        <div className='sml-angle sml-angle-left' onClick={gotoPrev}>
            <FontAwesomeIcon icon={faAngleLeft}/>
        </div>}
        {showRight ?
        <div className='sml-angle sml-angle-right' onClick={gotoNext}>
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>: null}
        <div className='sml-listing-container'>
            <div className='sml-slider' ref={slider}>
                {images.length > 0 ? images.map((img, idx)=> (
                    <div className='sml-card' key={idx}>
                        <img src={img} />
                        <div className='sml-listing-info'>
                            <p>Kahawa West</p>
                            <p>Ksh. 21,000</p>
                            <p>2 bedroom | 1 bath</p>
                        </div>
                    </div>
                )) : null}
                
            </div>
        </div>
      </div>
    </div>
  )
}

SimilarListings.propTypes = {

}

export default SimilarListings
