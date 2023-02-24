import React, { useRef, useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import './slider.css'


const ImageSlider = props => {
	const [index, setIndex] = useState(0);
	const [isShowLeft, setShowLeft] = useState(false);
	const [isShowRight, setShowRight] = useState(true);
	const [isHovered, setHovered] = useState(false);
	const [carouselType, setCarouselType] = useState("");
	const [carouselLen, setCarouselLen] = useState(0);
	const slider = useRef();

	useEffect(()=> {
		if (props.type === "owl"){
			setCarouselType("owl-car")
		}else{
			setCarouselType("pure-car")
		}
	}, [])
	
	useEffect(()=> {
		if (props.type === "owl"){
			
			setCarouselLen(props.imgContainer.length / 4)
			
		}else {
			setCarouselLen(props.imgContainer.length)
		}
	}, [])

	useEffect(()=>{
		index > 0 && isHovered ? setShowLeft(true) : setShowLeft(false)
		index < carouselLen - 1 && isHovered ? setShowRight(true) : setShowRight(false)
	}, [index, isHovered])

	
	const goToNext = ()=> {
		slider.current.style.transform = `translateX(-${(index + 1) * 100}%)`;
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
	<div className='slider'>
	  <div className='slider-container' ref={slider}>
		{props.imgContainer.length > 0 ?<Fragment>
			{props.imgContainer.map((img,idx)=> (
				<div className={carouselType} key={idx}>
					<img src={img}/>
				</div>
			))}
		</Fragment> : null}
	  </div>
	</div>
	<div className='slider-indicators'>
	 	{props.imgContainer.length > 0 ? <Fragment>
			{props.imgContainer.map((img, idx)=>
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
