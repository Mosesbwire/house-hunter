import React, { useRef, useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import img_one from '../../images/img-01.webp'
import img_two from '../../images/img-02.webp'
import img_three from '../../images/img-03.webp'
import img_four from '../../images/img-04.webp'
import img_five from '../../images/img-05.webp'

const images = [
	img_one,
	img_two,
	img_three,
	img_four,
	img_five

]

const ImageSlider = props => {
	const [index, setIndex] = useState(0);
	const [isShowLeft, setShowLeft] = useState(false);
	const [isShowRight, setShowRight] = useState(true);
	const [isHovered, setHovered] = useState(false);
	const slider = useRef();
	
	const len = images.length;

	useEffect(()=>{
		index > 0 && isHovered ? setShowLeft(true) : setShowLeft(false)
		index < len - 1 && isHovered ? setShowRight(true) : setShowRight(false)
	}, [index, isHovered])


	const goToNext = ()=> {
		slider.current.style.transform = `translateX(-${(index + 1)* 100}%)`;
		setIndex(index + 1);
	}

	const goToPrev = ()=> {
		
		slider.current.style.transform = `translateX(-${(index - 1) * 100}%)`;
		setIndex(index - 1);
	}
	
	const showArrows = ()=> {
		setHovered(true)
	}

	const removeArrows = ()=> {
		setHovered(false)
	}
 
  return (
    <div>
     <div className='slider-wrapper'onMouseEnter={showArrows} onMouseLeave={removeArrows}>
	{!isShowLeft ? null :
	<div className='angle angle-left' onClick={goToPrev}>
	  <FontAwesomeIcon icon={faAngleLeft}/>
	</div>}
	{isShowRight ? 
	<div className='angle angle-right' onClick={goToNext}>
	  <FontAwesomeIcon icon={faAngleRight}/>
	</div> : null}
	<div className='heart-ic'>
	  <FontAwesomeIcon icon={faHeart} className='heart-icon'/>
	</div>
	<div className='slider'>
	  <div className='slider-container' ref={slider}>
	  {images.length === 0 ? <p>Loading</p>: images.map((image,index) => 
		(<div className='slider-img' key={index}>
			<img src={image}/>
		  </div>)
	  )}
	  </div>
	</div>
	<div className='slider-indicators'>
	 	{images.length > 0 ? <Fragment>
			{images.map((img, idx)=>
				<div className={idx === index ? 'circle active-circle' : 'circle'}  key={idx}></div>
			)}
			</Fragment> : null}
	 </div>
     </div>
    </div>
  )
}

ImageSlider.propTypes = {

}

export default ImageSlider
