import React, { Component, useRef, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import pic from '../images/omegahead2.png'
// import pic1 from '../images/omega.png'
import pic2 from '../images/omega2.png'
import pic3 from '../images/omega3.png'
import pic4 from '../images/omega4.png'

export default class OmegaBakery extends Component {
    render() {
        const settings1 = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ]
        };
  return (
    <div>
        <div className='omega'>
            <h1>OMEGA BAKERY</h1> 
        </div>
        <div className='omega-details'>
                <p><span>PROJECT:</span> OMEGA BAKERY APP</p>
                <p><span>ROLE:</span> UI/UX DESIGNER</p>
                <p><span>DURATION:</span> 6 WEEKS</p>
                <a href='https://www.behance.net/gallery/142603447/Full-case-study-of-omega-bakery-app' target={"_blank"} rel="noreferrer"><button>VIEW CASE STUDY</button></a>
        </div>
        <div className='omega-images'>
            <h1>More Images</h1>
            <Slider {...settings1}>
          <div className='omega-images-container'>
            <img src={pic} alt="" />
          </div>
          <div className='omega-images-container'>
            <img src={pic2} alt="" />
          </div>
          <div className='omega-images-container'>
            <img src={pic3} alt="" />
          </div>
          <div className='omega-images-container'>
            <img src={pic4} alt="" />
          </div>
          
          
        </Slider>

        </div>
    </div>
  )
} }


